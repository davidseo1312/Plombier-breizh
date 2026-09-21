/* ==========================================================================
   IMAGES RESPONSIVES
   --------------------------------------------------------------------------
   Émet un <picture> qui propose le WebP en premier et garde le format
   d'origine en repli. Les largeurs proposées sont celles réellement
   présentes sur le disque : si `node tools/images.mjs` n'a jamais tourné,
   on retombe sur un <img> simple et rien ne casse.

   Le navigateur choisit la largeur d'après `sizes` : un téléphone télécharge
   la version 480 px, pas l'originale.
   ========================================================================== */
import { existsSync } from 'node:fs';

const LARGEURS = [480, 700, 760, 1100, 1536];

/* Largeurs de rendu selon l'emplacement. Conteneur : 1280 px, gouttière 20 px. */
export const SIZES = {
  carte: '(min-width:1280px) 400px, (min-width:1000px) 31vw, (min-width:700px) 47vw, calc(100vw - 40px)',
  hero: '(min-width:1000px) 570px, calc(100vw - 40px)',
  split: '(min-width:1000px) 560px, calc(100vw - 40px)',
  large: '(min-width:1280px) 1240px, calc(100vw - 40px)'
};

/* Largeurs réellement produites : les paliers standards, plus la largeur
   d'origine de l'image (les logos, par exemple, ne tombent sur aucun palier). */
const variantes = (chemin, ext, naturelle) =>
  [...new Set([...LARGEURS, naturelle].filter(Boolean))].sort((a, b) => a - b)
    .filter(w => existsSync(`${chemin.slice(1)}-${w}.${ext}`));

/**
 * @param chemin  chemin sans extension, depuis la racine : '/assets/photos/fuite-eau'
 * @param usage   clé de SIZES, ou chaîne `sizes` complète
 * @param repli   image affichée si le fichier manque (SVG de substitution)
 */
export const photo = ({
  chemin, ext = 'jpg', alt = '', largeur, hauteur,
  usage = 'carte', priorite = false, classe = '', repli = ''
}) => {
  const sizes = SIZES[usage] || usage;
  const dispo = variantes(chemin, ext, largeur);
  const attrs = [
    classe ? `class="${classe}"` : '',
    `alt="${alt}"`,
    largeur ? `width="${largeur}"` : '',
    hauteur ? `height="${hauteur}"` : '',
    priorite ? 'fetchpriority="high" decoding="async"' : 'loading="lazy" decoding="async"',
    repli ? `onerror="this.onerror=null;this.srcset='';this.src='${repli}';"` : ''
  ].filter(Boolean).join(' ');

  if (!dispo.length) return `<img src="${chemin}.${ext}" ${attrs}>`;

  const srcset = (e) => dispo.map(w => `${chemin}-${w}.${e} ${w}w`).join(', ');
  const plusGrand = dispo[dispo.length - 1];
  const webp = variantes(chemin, 'webp', largeur);

  return `<picture>${webp.length ? `
        <source type="image/webp" srcset="${webp.map(w => `${chemin}-${w}.webp ${w}w`).join(', ')}" sizes="${sizes}">` : ''}
        <img src="${chemin}-${plusGrand}.${ext}" srcset="${srcset(ext)}" sizes="${sizes}" ${attrs}>
      </picture>`;
};

/** Balise de préchargement de l'image du premier écran (gain de LCP). */
export const preloadPhoto = (chemin, ext = 'jpg', usage = 'hero') => {
  const webp = variantes(chemin, 'webp');
  if (!webp.length) return existsSync(chemin.slice(1) + '.' + ext)
    ? `<link rel="preload" as="image" href="${chemin}.${ext}">` : '';
  return `<link rel="preload" as="image" type="image/webp" imagesrcset="${webp.map(w => `${chemin}-${w}.webp ${w}w`).join(', ')}" imagesizes="${SIZES[usage] || usage}">`;
};
