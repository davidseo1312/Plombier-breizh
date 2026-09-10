/* ==========================================================================
   Logo Plombier Breizh — version vectorielle de travail
   Usage : node tools/generate-logo.mjs

   Reconstitution SVG du logo fourni (goutte d'eau + carte de Bretagne au
   gwenn-ha-du + « Plombier Breizh » bicolore + baseline de services).
   Deux déclinaisons sont produites :
     - assets/logo-plombier-breizh.svg           (horizontale, pour le header)
     - assets/logo-plombier-breizh-vertical.svg  (verticale + baseline, footer)

   ⚠ Cette version vectorielle est PROVISOIRE. Le site charge en priorité
   les fichiers officiels s'ils existent :
     - assets/logo-plombier-breizh.png
     - assets/logo-plombier-breizh-vertical.png
   Il suffit de les déposer pour qu'ils remplacent automatiquement le SVG.
   ========================================================================== */
import { writeFileSync } from 'node:fs';

const NAVY = '#14224B';   // bleu nuit du mot « Plombier » et du tracé de la carte
const BLUE = '#007BCB';   // bleu de marque (goutte et mot « Breizh »)
const BLUE_LIGHT = '#00AEEF';

/* ---- Goutte d'eau (100 x 130 dans son repère local) ---- */
const droplet = `
    <g transform="translate(${'%DX%'} ${'%DY%'}) scale(${'%DS%'})">
      <clipPath id="dropClip%ID%"><path d="M50 4C50 4 6 58 6 90a44 44 0 0 0 88 0C94 58 50 4 50 4Z"/></clipPath>
      <path d="M50 4C50 4 6 58 6 90a44 44 0 0 0 88 0C94 58 50 4 50 4Z" fill="${BLUE}"/>
      <g clip-path="url(#dropClip%ID%)">
        <circle cx="18" cy="98" r="34" fill="${NAVY}" opacity="0.18"/>
      </g>
      <path d="M74 66a30 30 0 0 1-16 46" fill="none" stroke="#FFFFFF" stroke-width="7"
            stroke-linecap="round" opacity="0.92"/>
    </g>`;

/* ---- Carte de Bretagne (150 x 95 dans son repère local) ----
   Silhouette simplifiée : côte nord découpée, pointes du Finistère à l'ouest,
   côte sud vers l'est. */
const BZH_PATH = 'M158 20 L140 15 L128 23 L112 14 L96 22 L80 13 L66 23 L52 17 L38 27 L26 21 L14 31 '
  + 'L2 34 L18 39 L6 46 L21 51 L4 57 L21 62 L12 71 '
  + 'L32 75 L44 70 L56 79 L70 73 L84 82 L98 75 L114 85 L130 77 L146 86 L159 79 L161 46 Z';

/* Moucheture d'hermine */
const ermine = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})">
        <path d="M0 -1 L3 5 L1.2 4.2 L2.6 8 L-2.6 8 L-1.2 4.2 L-3 5 Z"/>
        <circle cx="-2.4" cy="-4.2" r="1.1"/><circle cx="2.4" cy="-4.2" r="1.1"/><circle cx="0" cy="-6.4" r="1.1"/>
      </g>`;

const ERMINES = [
  [13, 24], [30, 24], [47, 24], [62, 24],
  [21, 35], [38, 35], [55, 35],
  [13, 46], [30, 46], [47, 46], [62, 46]
];

/* Bandes du gwenn-ha-du : 5 bandes noires, 4 blanches */
const bands = () => {
  const top = 13, h = 8;          /* 9 bandes : 5 noires, 4 blanches */
  let out = '';
  for (let i = 0; i < 5; i++) out += `<rect x="0" y="${(top + i * 2 * h).toFixed(1)}" width="165" height="${h}" fill="${NAVY}"/>`;
  return out;
};

const brittany = (id) => `
    <g transform="translate(%BX% %BY%) scale(%BS%)">
      <clipPath id="bzhClip${id}"><path d="${BZH_PATH}"/></clipPath>
      <g clip-path="url(#bzhClip${id})">
        <rect x="0" y="0" width="165" height="100" fill="#FFFFFF"/>
        ${bands()}
        <rect x="0" y="10" width="74" height="45" fill="#FFFFFF"/>
        <g fill="${NAVY}">${ERMINES.map(([x, y]) => ermine(x, y, 0.72)).join('')}</g>
      </g>
      <path d="${BZH_PATH}" fill="none" stroke="${NAVY}" stroke-width="5" stroke-linejoin="round"/>
    </g>`;

const FONT = 'Segoe UI,Helvetica Neue,Arial,sans-serif';

const place = (tpl, { dx, dy, ds, bx, by, bs, id }) => tpl
  .replaceAll('%DX%', dx).replaceAll('%DY%', dy).replaceAll('%DS%', ds)
  .replaceAll('%BX%', bx).replaceAll('%BY%', by).replaceAll('%BS%', bs)
  .replaceAll('%ID%', id);

/* ---------- Version horizontale (header) ---------- */
const horizontal = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 530 160" role="img" aria-label="Plombier Breizh">
  <title>Plombier Breizh</title>
${place(droplet, { dx: 6, dy: 16, ds: 1.02, bx: 0, by: 0, bs: 1, id: 'H' })}
${place(brittany('H'), { dx: 0, dy: 0, ds: 1, bx: 118, by: 22, bs: 0.92, id: 'H' })}
  <text x="272" y="80" font-family="${FONT}" font-size="58" font-weight="800" letter-spacing="-1" fill="${NAVY}">Plombier</text>
  <text x="276" y="142" font-family="${FONT}" font-size="58" font-weight="800" font-style="italic" letter-spacing="-1" fill="${BLUE}">Breizh</text>
</svg>
`;

/* ---------- Version verticale (footer) ---------- */
const vertical = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 380" role="img" aria-label="Plombier Breizh — Dépannage, Installation, Rénovation">
  <title>Plombier Breizh</title>
${place(droplet, { dx: 82, dy: 8, ds: 1.05, bx: 0, by: 0, bs: 1, id: 'V' })}
${place(brittany('V'), { dx: 0, dy: 0, ds: 1, bx: 200, by: 20, bs: 1.02, id: 'V' })}
  <text x="235" y="230" text-anchor="middle" font-family="${FONT}" font-size="78" font-weight="800" letter-spacing="-2" fill="${NAVY}">Plombier</text>
  <text x="235" y="308" text-anchor="middle" font-family="${FONT}" font-size="78" font-weight="800" font-style="italic" letter-spacing="-2" fill="${BLUE}">Breizh</text>
  <text x="235" y="356" text-anchor="middle" font-family="${FONT}" font-size="23" font-weight="700" fill="${NAVY}">Dépannage <tspan fill="${BLUE_LIGHT}">•</tspan> Installation <tspan fill="${BLUE_LIGHT}">•</tspan> Rénovation</text>
</svg>
`;

writeFileSync('assets/logo-plombier-breizh.svg', horizontal);
writeFileSync('assets/logo-plombier-breizh-vertical.svg', vertical);
console.log('Logos générés : assets/logo-plombier-breizh.svg (horizontal) + -vertical.svg');
