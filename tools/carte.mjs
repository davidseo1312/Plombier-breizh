/* ==========================================================================
   Carte de la zone d'intervention — Finistère (29) et Morbihan (56)
   Usage : node tools/carte.mjs

   Les contours viennent du dépôt france-geojson, construit à partir du
   découpage administratif officiel (INSEE / IGN). Les coordonnées des
   communes couvertes en sont extraites de la même source : rien n'est
   dessiné à main levée.

   Produit trois fichiers dans assets/img/ :
     carte-intervention.svg      les deux départements au même niveau
     carte-intervention-29.svg   Finistère mis en avant
     carte-intervention-56.svg   Morbihan mis en avant
   ========================================================================== */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';

const BASE = 'https://raw.githubusercontent.com/gregoiredavid/france-geojson/master';
const CACHE = 'tools/.cache-geo';
mkdirSync(CACHE, { recursive: true });

/* Les fichiers sources sont volumineux : on les garde en cache local et on
   ne les recharge que s'ils manquent. Ce cache n'est pas versionné. */
const telecharger = async (url, fichier) => {
  if (existsSync(fichier)) return;
  process.stdout.write(`  téléchargement ${fichier.split('/').pop()}… `);
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${r.status} sur ${url}`);
  writeFileSync(fichier, Buffer.from(await r.arrayBuffer()));
  console.log('ok');
};

const SLUGS = { 22: '22-cotes-d-armor', 29: '29-finistere', 35: '35-ille-et-vilaine', 56: '56-morbihan' };
for (const [n, slug] of Object.entries(SLUGS))
  await telecharger(`${BASE}/departements/${slug}/departement-${slug}.geojson`, `${CACHE}/dep-${n}.json`);
await telecharger(`${BASE}/communes-version-simplifiee.geojson`, `${CACHE}/communes.json`);

/* Centroïdes des communes couvertes, extraits de la source officielle. */
const VILLES_COUVERTES = ['Brest', 'Quimper', 'Morlaix', 'Concarneau', 'Landerneau', 'Douarnenez',
  'Quimperlé', 'Châteaulin', 'Vannes', 'Lorient', 'Lanester', 'Auray', 'Pontivy', 'Hennebont',
  'Ploemeur', 'Questembert'];
const centre = (geo) => {
  const rings = geo.type === 'Polygon' ? geo.coordinates : geo.coordinates.flat();
  const r = rings.reduce((a, b) => b.length > a.length ? b : a, []);
  let x = 0, y = 0; for (const [lo, la] of r) { x += lo; y += la; }
  return { lon: +(x / r.length).toFixed(5), lat: +(y / r.length).toFixed(5) };
};
const villes = {};
for (const f of JSON.parse(readFileSync(`${CACHE}/communes.json`, 'utf8')).features) {
  const code = String(f.properties.code || '');
  if (!VILLES_COUVERTES.includes(f.properties.nom)) continue;
  if (!(code.startsWith('29') || code.startsWith('56'))) continue;
  villes[f.properties.nom] = { ...centre(f.geometry), dept: code.slice(0, 2) };
}
const absentes = VILLES_COUVERTES.filter(v => !villes[v]);
if (absentes.length) console.warn('⚠ communes non localisées :', absentes.join(', '));

const DEPS = { 22: 'Côtes-d’Armor', 29: 'Finistère', 35: 'Ille-et-Vilaine', 56: 'Morbihan' };
const COUVERTS = ['29', '56'];

/* -- simplification Douglas-Peucker ---------------------------------------- */
const dist2 = (p, a, b) => {
  let x = a[0], y = a[1], dx = b[0] - x, dy = b[1] - y;
  if (dx || dy) {
    const t = ((p[0] - x) * dx + (p[1] - y) * dy) / (dx * dx + dy * dy);
    if (t > 1) { x = b[0]; y = b[1]; } else if (t > 0) { x += dx * t; y += dy * t; }
  }
  return (p[0] - x) ** 2 + (p[1] - y) ** 2;
};
const simplifier = (pts, tol) => {
  if (pts.length < 3) return pts;
  const garde = new Array(pts.length).fill(false);
  garde[0] = garde[pts.length - 1] = true;
  const pile = [[0, pts.length - 1]];
  while (pile.length) {
    const [i, j] = pile.pop();
    let max = 0, idx = -1;
    for (let k = i + 1; k < j; k++) { const d = dist2(pts[k], pts[i], pts[j]); if (d > max) { max = d; idx = k; } }
    if (max > tol * tol) { garde[idx] = true; pile.push([i, idx], [idx, j]); }
  }
  return pts.filter((_, i) => garde[i]);
};

/* -- projection : équirectangulaire corrigée, suffisante à cette échelle ---- */
const LAT0 = 47.9, K = Math.cos(LAT0 * Math.PI / 180);
const proj = ([lon, lat]) => [lon * K, -lat];

const anneaux = {};
for (const n of Object.keys(DEPS)) {
  const g = JSON.parse(readFileSync(`${CACHE}/dep-${n}.json`, 'utf8'));
  const geo = g.features ? g.features[0].geometry : g.geometry;
  const polys = geo.type === 'Polygon' ? [geo.coordinates] : geo.coordinates;
  anneaux[n] = polys.map(p => p[0])
    .map(r => simplifier(r.map(proj), 0.0035))
    .filter(r => r.length > 6);
}

/* -- cadrage --------------------------------------------------------------- */
let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
for (const n of Object.keys(DEPS)) for (const r of anneaux[n]) for (const [x, y] of r) {
  if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
}
const W = 1000, M = 26;
const s = (W - M * 2) / (x1 - x0);
const H = Math.round((y1 - y0) * s + M * 2) + 56;   /* place pour la légende */
const px = ([x, y]) => [+((x - x0) * s + M).toFixed(1), +((y - y0) * s + M).toFixed(1)];
const d = (n) => anneaux[n].map(r => 'M' + r.map(p => px(p).join(' ')).join('L') + 'Z').join('');

/* -- étiquettes : on privilégie les villes les plus connues ---------------- */
const PRIORITE = ['Brest', 'Quimper', 'Vannes', 'Lorient', 'Morlaix', 'Pontivy',
  'Concarneau', 'Auray', 'Landerneau', 'Douarnenez', 'Hennebont', 'Quimperlé',
  'Châteaulin', 'Lanester', 'Ploemeur', 'Questembert'];

const pts = Object.entries(villes).map(([nom, v]) => {
  const [x, y] = px(proj([v.lon, v.lat]));
  return { nom, x, y, dept: v.dept, rang: PRIORITE.indexOf(nom) };
});
const poses = [];
for (const p of [...pts].sort((a, b) => a.rang - b.rang)) {
  p.droite = p.x < W * 0.62;
  const lg = p.nom.length * 11 + 22;
  const bx = p.droite ? p.x + 12 : p.x - 12 - lg;
  p.label = !poses.some(q => Math.abs(q.y - p.y) < 24 && bx < q.bx + q.lg + 14 && q.bx < bx + lg + 14);
  if (p.label) { p.bx = bx; p.lg = lg; poses.push(p); }
}

const svg = (actif) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img"
     aria-label="Carte de la zone d’intervention de Plombier Breizh : Finistère (29) et Morbihan (56)">
  <style>
    .hors{fill:#E8EDF1;stroke:#FFFFFF;stroke-width:2}
    .zone{fill:#00AEEF;stroke:#FFFFFF;stroke-width:2.5}
    .zone--fort{fill:#0076C0}
    .lg{font:700 22px Lato,system-ui,sans-serif;fill:#0F2B3A}
    .lg--hors{fill:#8A97A2}
    .nom{font:700 21px Lato,system-ui,sans-serif;fill:#0F2B3A;paint-order:stroke;stroke:#F7FBFD;stroke-width:4.5;stroke-linejoin:round}
    .nom--hors{fill:#8A97A2}
    .pt{fill:#111111}
    .pt--fort{fill:#FFFFFF;stroke:#0F2B3A;stroke-width:2}
  </style>
  <rect width="${W}" height="${H}" fill="#F7FBFD"/>
  ${['22', '35'].map(n => `<path class="hors" d="${d(n)}"/>`).join('\n  ')}
  ${COUVERTS.map(n => `<path class="zone${actif === n ? ' zone--fort' : ''}" d="${d(n)}"/>`).join('\n  ')}
  ${pts.map(p => `<circle class="pt${p.dept === actif ? ' pt--fort' : ''}" cx="${p.x}" cy="${p.y}" r="5.5"/>`).join('\n  ')}
  ${pts.filter(p => p.label).map(p =>
    `<text class="nom" x="${p.droite ? p.x + 12 : p.x - 12}" y="${p.y + 7}" text-anchor="${p.droite ? 'start' : 'end'}">${p.nom}</text>`).join('\n  ')}
  <g transform="translate(${M}, ${H - 46})">
    <rect width="22" height="22" fill="${actif === '29' ? '#0076C0' : '#00AEEF'}"/>
    <text class="lg" x="32" y="17">Finistère (29)</text>
    <rect x="215" width="22" height="22" fill="${actif === '56' ? '#0076C0' : '#00AEEF'}"/>
    <text class="lg" x="247" y="17">Morbihan (56)</text>
    <rect x="450" width="22" height="22" fill="#E8EDF1"/>
    <text class="lg lg--hors" x="482" y="17">Hors zone</text>
  </g>
</svg>`;

const R = 'assets/img/';
for (const [nom, actif] of [['carte-intervention', null], ['carte-intervention-29', '29'], ['carte-intervention-56', '56']]) {
  const out = svg(actif);
  writeFileSync(R + nom + '.svg', out);
  console.log(`✓ ${nom}.svg  ${W}×${H}  ${(out.length / 1024).toFixed(1)} Ko  (${pts.filter(p => p.label).length}/${pts.length} villes nommées)`);
}
