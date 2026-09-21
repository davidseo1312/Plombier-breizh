/* ==========================================================================
   CARTE DE LA ZONE D'INTERVENTION
   --------------------------------------------------------------------------
   Contours départementaux officiels (INSEE / IGN via france-geojson) et
   communes positionnées d'après la même source. Regénérer avec
   `node tools/carte.mjs` — voir README, section « Carte d'intervention ».
   ========================================================================== */

/** @param dept '29', '56', ou rien pour les deux au même niveau. */
export const carte = (dept = '') => `
      <figure class="carte">
        <img src="/assets/img/carte-intervention${dept ? `-${dept}` : ''}.svg"
             alt="Carte de la zone d’intervention de Plombier Breizh : Finistère (29) et Morbihan (56)"
             width="1000" height="658" loading="lazy" decoding="async">
        <figcaption>Zone d’intervention — Finistère (29) et Morbihan (56).
        Contours d’après le découpage administratif officiel.</figcaption>
      </figure>`;
