/* ==========================================================================
   Génère les visuels de substitution rectangulaires du site.
   Usage : node tools/generate-placeholders.mjs

   Ces fichiers SVG sont des EMPLACEMENTS PHOTO aux bons ratios (4:3 et 1:1).
   Remplacez-les par de vraies photos d'intervention en conservant le même
   ratio (voir README.md, section « Images »).
   ========================================================================== */
import { writeFileSync, mkdirSync } from 'node:fs';

const GLYPHS = {
  drop: 'M32 6C32 6 14 26 14 39a18 18 0 0 0 36 0C50 26 32 6 32 6Z',
  wrench: 'M44 8a13 13 0 0 0-12 18L10 48l6 6 22-22a13 13 0 0 0 18-12l-9 9-8-2-2-8 9-9Z',
  pipe: 'M8 20h20v10H18v14H8V20Zm28 0h20v24H46V30H36V20Z',
  camera: 'M8 18h12l4-6h16l4 6h12v30H8V18Zm24 6a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z',
  gear: 'M32 20a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm0 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10ZM28 4h8l1 8 7 3 7-4 6 6-4 7 3 7 8 1v8l-8 1-3 7 4 7-6 6-7-4-7 3-1 8h-8l-1-8-7-3-7 4-6-6 4-7-3-7-8-1v-8l8-1 3-7-4-7 6-6 7 4 7-3 1-8Z',
  alert: 'M32 6 60 54H4L32 6Zm-3 16h6v18h-6V22Zm0 22h6v6h-6v-6Z',
  tap: 'M14 44h36v10H14V44Zm4-12h28v8H18v-8Zm10-22h8v20h-8V10Z',
  shower: 'M32 6a14 14 0 0 1 14 14H18A14 14 0 0 1 32 6Zm-8 24h4v10h-4V30Zm10 0h4v16h-4V30Zm10 0h4v10h-4V30Z',
  coil: 'M20 8h26v6H28v10h18v6H28v10h18v6H28v10h18v6H20V8Z',
  loupe: 'M27 6a19 19 0 1 0 0 38 19 19 0 0 0 0-38Zm0 6a13 13 0 1 1 0 26 13 13 0 0 1 0-26Zm17 30 4-4 14 14-4 4Z'
};

/* [fichier, photo attendue à terme, glyphe, ratio] */
export const IMAGES = [
  ['hero-plombier-intervention', 'Plombier professionnel en intervention', 'wrench', 4 / 3],
  ['depannage-plomberie', 'Dépannage de plomberie (robinetterie, alimentation)', 'gear', 4 / 3],
  ['debouchage-canalisation', 'Débouchage de canalisation', 'pipe', 4 / 3],
  ['degorgement', 'Dégorgement de réseau d’évacuation', 'coil', 4 / 3],
  ['debouchage-wc', 'Débouchage de WC', 'drop', 4 / 3],
  ['debouchage-evier', 'Débouchage d’évier de cuisine', 'tap', 4 / 3],
  ['debouchage-lavabo', 'Débouchage de lavabo', 'drop', 4 / 3],
  ['debouchage-douche', 'Débouchage de douche / baignoire', 'shower', 4 / 3],
  ['fuite-eau', 'Intervention sur une fuite d’eau', 'drop', 4 / 3],
  ['canalisation-bouchee', 'Canalisation bouchée', 'coil', 4 / 3],
  ['recherche-fuite', 'Recherche de fuite non visible', 'loupe', 4 / 3],
  ['urgence-plomberie', 'Intervention de plomberie en urgence', 'alert', 4 / 3],
  ['technicien-camion', 'Technicien plombier en déplacement', 'wrench', 4 / 3],
  ['inspection-canalisation', 'Inspection de canalisation à la caméra', 'camera', 4 / 3],
  ['intervention-salle-de-bain', 'Intervention en salle de bain', 'shower', 4 / 3],
  ['reseau-evacuation', 'Réseau d’évacuation / canalisation', 'pipe', 4 / 3],
  ['equip-pompe', 'Pompe professionnelle', 'gear', 1],
  ['equip-furet-electrique', 'Furet électrique', 'coil', 1],
  ['equip-haute-pression', 'Déboucheur haute pression', 'drop', 1],
  ['equip-camera-inspection', 'Caméra d’inspection', 'camera', 1],
  ['equip-recherche-fuite', 'Matériel de recherche de fuite', 'loupe', 1],
  ['equip-outillage', 'Outillage professionnel de plomberie', 'wrench', 1]
];

const PALETTES = [
  ['#0A2233', '#123B57', '#007BCB'],
  ['#0C2A3D', '#0F4463', '#00AEEF'],
  ['#111820', '#16344A', '#0F86C9']
];

function svg(slug, glyph, ratio, i) {
  const W = 960, H = Math.round(W / ratio);
  const [c1, c2, accent] = PALETTES[i % PALETTES.length];
  const size = Math.min(W, H) * 0.42;
  const scale = size / 64;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="presentation">
<defs>
<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>
<pattern id="p" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0v40" fill="none" stroke="#FFFFFF" stroke-opacity="0.05" stroke-width="1"/></pattern>
</defs>
<rect width="${W}" height="${H}" fill="url(#g)"/>
<rect width="${W}" height="${H}" fill="url(#p)"/>
<path d="M${W} 0 L${W} ${H} L${W * 0.55} ${H} Z" fill="#FFFFFF" fill-opacity="0.03"/>
<rect x="0" y="0" width="${W}" height="8" fill="${accent}"/>
<g transform="translate(${(W - size) / 2} ${(H - size) / 2 - H * 0.04}) scale(${scale.toFixed(3)})">
<path d="${GLYPHS[glyph]}" fill="#FFFFFF" fill-opacity="0.22"/>
</g>
<g transform="translate(44 78)">
<rect x="0" y="-26" width="34" height="5" fill="${accent}"/>
<text x="46" y="-20" font-family="Segoe UI,Helvetica Neue,Arial,sans-serif" font-size="19" font-weight="700" letter-spacing="3.5" fill="#FFFFFF" fill-opacity="0.82">PLOMBIER BREIZH</text>
</g>
</svg>`;
}

mkdirSync('assets/img', { recursive: true });
IMAGES.forEach(([slug, , glyph, ratio], i) => {
  writeFileSync(`assets/img/${slug}.svg`, svg(slug, glyph, ratio, i));
});
console.log(`${IMAGES.length} visuels générés dans assets/img/`);
