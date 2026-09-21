/* ==========================================================================
   SIGNATURE BRETONNE
   --------------------------------------------------------------------------
   Deux motifs repris du gwenn-ha-du, déjà présents dans le logo : la
   moucheture d'hermine et les bandes noires et blanches. Ils servent de
   signature visuelle — c'est ce qui distingue ce site d'un gabarit de
   dépannage interchangeable.

   Usage mesuré : un filigrane dans le premier écran, un filet au-dessus des
   sections clés. Jamais de décoration gratuite.
   ========================================================================== */

/** Moucheture d'hermine, tracée d'un seul chemin. */
export const hermine = (classe = 'hermine') => `<svg class="${classe}" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
  <path d="M50 24C50 41 41 56 29 67c7 0 13 4 15 11l6-9 6 9c2-7 8-11 15-11C59 56 50 41 50 24Z"/>
  <circle cx="50" cy="11" r="5.4"/><circle cx="35" cy="20" r="4.8"/><circle cx="65" cy="20" r="4.8"/>
</svg>`;

/** Filet gwenn-ha-du : quatre bandes noires, l'hermine en tête. */
export const bandeBreizh = (classe = '') =>
  `<span class="gwenn${classe ? ` ${classe}` : ''}" aria-hidden="true">${hermine('gwenn__hermine')}<span class="gwenn__bandes"></span></span>`;
