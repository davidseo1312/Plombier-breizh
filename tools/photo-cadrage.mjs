/* ==========================================================================
   RECADRAGE SUR LE TRAVAIL
   --------------------------------------------------------------------------
   Usage : node tools/photo-cadrage.mjs   (Chromium sur le 9222)

   Ce qui trahit une photo générée, ce n'est pas le grain : c'est le VISAGE,
   et c'est la répétition. Le même technicien apparaissait dans onze des
   vingt et une photos, toujours en uniforme impeccable dans une pièce
   immaculée. Aucun artisan ne dispose de onze portraits de studio.

   La preuve était dans la série elle-même : « siphon-encrasse », plan serré
   sans personne, ne se distingue pas d'une vraie photo de chantier.

   On recadre donc sur le geste — les mains, l'outil, la pièce, la fuite —
   et on laisse le visage hors champ. Un plan serré de ce qu'on répare
   ressemble à ce qu'un plombier photographie vraiment avec son téléphone.

   Le rapport 3/2 est conservé pour ne pas fausser les dimensions déclarées
   dans les pages, et le facteur de zoom reste sous 1,75 pour que la
   définition tienne. Un léger grain est réappliqué, le recadrage
   agrandissant l'image et diluant celui du fichier d'origine.
   ========================================================================== */
import { readFileSync, writeFileSync, statSync, existsSync } from 'node:fs';

const PORT = process.env.CDP_PORT || 9222;

/* nom : [zoom, point de visée x, point de visée y] — visée en fraction de
   l'image d'origine. Seules les photos où un visage dominait sont reprises ;
   les plans d'outillage et de détail sont déjà crédibles et restent intacts. */
const CADRAGES = {
  'canalisation-bouchee':   [1.60, 0.58, 0.55],  // déboucheur et mains
  'chauffe-eau':            [2.00, 0.88, 0.48],  // ballon et cuivres
  'debouchage-canalisation':[1.70, 0.30, 0.62],  // machine au sol
  'debouchage-douche':      [1.60, 0.42, 0.62],  // furet et bonde
  'debouchage-evier':       [1.85, 0.80, 0.58],  // siphon démonté
  'debouchage-wc':          [1.60, 0.66, 0.60],  // cuvette et outil
  'degorgement':            [1.75, 0.62, 0.80],  // tuyau et regard
  'depannage-plomberie':    [1.60, 0.62, 0.62],  // broyeur et raccord
  'equip-camion-plombier':  [1.50, 0.68, 0.48],  // flocage seul
  'equip-pompe':            [1.25, 0.42, 0.50],  // cuve, visage hors champ
  'fuite-eau':              [1.85, 0.88, 0.68],  // fuite au siphon
  'recherche-fuite':        [1.70, 0.55, 0.72]   // détecteur et tranchée
};

const t = await (await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: 'PUT' })).json();
const ws = new WebSocket(t.webSocketDebuggerUrl);
let id = 0; const attente = new Map();
const send = (m, q = {}) => new Promise(r => { const i = ++id; attente.set(i, r); ws.send(JSON.stringify({ id: i, method: m, params: q })); });
await new Promise(r => ws.addEventListener('open', r));
ws.addEventListener('message', e => {
  const m = JSON.parse(e.data);
  if (m.id && attente.has(m.id)) { attente.get(m.id)(m.result); attente.delete(m.id); }
});

const traitement = `async (b64, zoom, fx, fy) => {
  const img = new Image();
  img.src = 'data:image/jpeg;base64,' + b64;
  await img.decode();
  const W = img.naturalWidth, H = img.naturalHeight;

  /* Fenêtre de recadrage, au même rapport que l'original, centrée sur le
     point de visée puis ramenée à l'intérieur de l'image. */
  const w = W / zoom, h = H / zoom;
  let sx = fx * W - w / 2, sy = fy * H - h / 2;
  sx = Math.max(0, Math.min(W - w, sx));
  sy = Math.max(0, Math.min(H - h, sy));

  const c = new OffscreenCanvas(W, H), x = c.getContext('2d', { willReadFrequently: true });
  x.imageSmoothingQuality = 'high';
  x.drawImage(img, sx, sy, w, h, 0, 0, W, H);

  /* L'agrandissement dilue le grain du fichier d'origine : on en remet une
     dose légère, par paquets de deux pixels pour qu'il survive à la
     réduction en 760 et 480 px. Léger vignetage pour recentrer le regard. */
  const d = x.getImageData(0, 0, W, H), p = d.data;
  const gt = 2, gw = Math.ceil(W / gt), gh = Math.ceil(H / gt);
  const paquets = new Float32Array(gw * gh);
  for (let i = 0; i < paquets.length; i++)
    paquets[i] = (Math.random() + Math.random() + Math.random() - 1.5) * 1.15;

  const cx = W / 2, cy = H / 2, rmax = Math.hypot(cx, cy);
  for (let i = 0, n = 0; i < p.length; i += 4, n++) {
    const px = n % W, py = (n / W) | 0;
    let r = p[i], g = p[i + 1], b = p[i + 2];
    const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    const bruit = paquets[((py / gt) | 0) * gw + ((px / gt) | 0)] * (1.6 + 2.2 * (1 - lum));
    const k = 1 - 0.07 * Math.pow(Math.hypot(px - cx, py - cy) / rmax, 2.4);
    r = (r + bruit) * k; g = (g + bruit) * k; b = (b + bruit) * k;
    p[i] = r < 0 ? 0 : r > 255 ? 255 : r;
    p[i + 1] = g < 0 ? 0 : g > 255 ? 255 : g;
    p[i + 2] = b < 0 ? 0 : b > 255 ? 255 : b;
  }
  x.putImageData(d, 0, 0);

  const blob = await c.convertToBlob({ type: 'image/jpeg', quality: 0.93 });
  const buf = new Uint8Array(await blob.arrayBuffer());
  let s = ''; for (let i = 0; i < buf.length; i++) s += String.fromCharCode(buf[i]);
  return btoa(s);
}`;

let n = 0;
const seulement = process.argv.slice(2);
for (const [nom, [zoom, fx, fy]] of Object.entries(CADRAGES)) {
  if (seulement.length && !seulement.includes(nom)) continue;
  const src = `assets/photos/${nom}.jpg`;
  if (!existsSync(src)) { console.log(`  · ${nom} — absent, ignoré`); continue; }
  const b64 = readFileSync(src).toString('base64');
  const r = await send('Runtime.evaluate', {
    expression: `(${traitement})(${JSON.stringify(b64)}, ${zoom}, ${fx}, ${fy})`,
    awaitPromise: true, returnByValue: true
  });
  if (!r.result || typeof r.result.value !== 'string') {
    console.log(`  ✗ ${nom} — ${r.exceptionDetails?.exception?.description || 'échec'}`);
    continue;
  }
  writeFileSync(src, Buffer.from(r.result.value, 'base64'));
  console.log(`  ✓ ${nom}  ×${zoom}  ${Math.round(statSync(src).size / 1024)} Ko`);
  n++;
}
console.log(`\n${n} photo(s) recadrée(s). Relancez « node tools/images.mjs ».`);
await send('Page.close'); ws.close();
