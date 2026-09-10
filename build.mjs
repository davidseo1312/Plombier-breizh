/* ==========================================================================
   Plombier Breizh — générateur de site statique (0 dépendance)
   Usage : node build.mjs
   Lit src/pages/*.mjs et écrit les fichiers .html à la racine du projet,
   ainsi que sitemap.xml. Les .html racine sont générés : ne les éditez pas
   directement, modifiez src/.
   ========================================================================== */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { page, SITE } from './src/lib/layout.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(root, 'src', 'pages');

/* ---- Empreinte de contenu sur les URLs d'assets ----------------------------
   Les en-têtes d'hébergement mettent /assets/* en cache un an (immutable).
   Sans empreinte, un visiteur déjà venu garderait l'ancienne feuille de style
   ou l'ancien logo. Chaque fichier réellement présent reçoit donc `?v=<hash>` :
   seuls les fichiers modifiés changent d'URL, les autres restent en cache.
   Les .woff2 sont exclus : ils sont aussi référencés depuis le CSS, où l'URL
   ne serait pas réécrite — deux URLs pour une même police feraient deux
   téléchargements. */
const empreintes = new Map();
const empreinte = (chemin) => {
  if (!empreintes.has(chemin)) {
    empreintes.set(chemin, createHash('sha1').update(readFileSync(chemin)).digest('hex').slice(0, 8));
  }
  return empreintes.get(chemin);
};
const versionner = (html) => html.replace(
  /\/assets\/[A-Za-z0-9_.\/-]+\.(?:css|js|png|jpe?g|webp|svg)(?![?\w])/g,
  (url) => {
    const chemin = url.slice(1);            // '/assets/…' → 'assets/…' sur le disque
    return existsSync(chemin) ? `${url}?v=${empreinte(chemin)}` : url;
  }
);


/* ---- Chaîne de repli du logo : ne garder que les fichiers présents ---------
   Le header et le pied de page essaient plusieurs noms de fichier pour laisser
   le logo officiel être déposé librement. Les candidats absents provoqueraient
   une requête 404 à chaque chargement de page ; on les retire au build, tout
   en gardant la chaîne complète si aucun n'existe (le nom écrit en toutes
   lettres prend alors le relais). */
const nettoyerRepliLogo = (html) => html.replace(
  /src="(\/assets\/[^"]+)"([^>]*?)data-logo-fallbacks="([^"]*)"/g,
  (tout, src, milieu, replis) => {
    const candidats = [src, ...replis.split(',').filter(Boolean)];
    const presents = candidats.filter((u) => existsSync(u.trim().slice(1)));
    if (!presents.length) return tout;
    const [premier, ...reste] = presents;
    return `src="${premier}"${milieu}data-logo-fallbacks="${reste.join(',')}"`;
  }
);

const files = (await readdir(pagesDir)).filter(f => f.endsWith('.mjs')).sort();
const built = [];

for (const file of files) {
  const mod = (await import(path.join(pagesDir, file))).default;
  if (!mod || !mod.slug) throw new Error(`Page invalide : ${file}`);
  const html = versionner(nettoyerRepliLogo(page(mod)));
  await writeFile(path.join(root, `${mod.slug}.html`), html, 'utf8');
  built.push(mod.slug);
  console.log(`✓ ${mod.slug}.html  (${(html.length / 1024).toFixed(1)} Ko)`);
}

/* ---- sitemap.xml (hors pages techniques) ---- */
const excluded = new Set(['404']);
const today = new Date().toISOString().slice(0, 10);
const urls = built.filter(s => !excluded.has(s)).map(s => {
  const loc = s === 'index' ? `${SITE.baseUrl}/` : `${SITE.baseUrl}/${s}`;
  const priority = s === 'index' ? '1.0'
    : ['finistere-29', 'morbihan-56'].includes(s) ? '0.9'
    : ['plomberie', 'debouchage', 'degorgement', 'urgence-plomberie', 'bretagne'].includes(s) ? '0.8' : '0.6';
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
}).join('\n');

await writeFile(path.join(root, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, 'utf8');
console.log(`✓ sitemap.xml (${built.length - excluded.size} URL)`);

/* ---- contrôles de cohérence ---- */
let warnings = 0;
for (const slug of built) {
  const html = await readFile(path.join(root, `${slug}.html`), 'utf8');
  const checks = [
    [html.includes(SITE.phoneDisplay), 'numéro de téléphone absent'],
    [html.includes(SITE.email), 'email absent'],
    [html.includes('Plombier Breizh'), 'nom de marque absent'],
    [html.includes('logo-plombier-breizh'), 'logo absent'],
    [!/border-radius:\s*(?!0|2px|var\(--radius)/.test(html), 'border-radius suspect en inline'],
    [!/rounded-full|border-radius:\s*50%|border-radius:\s*9999px/.test(html), 'forme arrondie interdite détectée']
  ];
  for (const [ok, msg] of checks) {
    if (!ok) { console.warn(`⚠ ${slug}.html : ${msg}`); warnings++; }
  }
}
console.log(warnings === 0 ? '\nTous les contrôles sont passés.' : `\n${warnings} avertissement(s).`);
