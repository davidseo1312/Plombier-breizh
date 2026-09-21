/* ==========================================================================
   LOGOS DE CONFIANCE
   --------------------------------------------------------------------------
   Logos fournis par l'entreprise. Chaque libellé décrit le lien réel avec
   l'organisme : il ne s'agit pas de décoration.

   ⚠ À VÉRIFIER AVANT MISE EN LIGNE
   1. Le lien doit être exact (assureur en cours de contrat, adhésion à jour).
      Afficher un logo sans le lien correspondant est une pratique commerciale
      trompeuse (art. L.121-2 du Code de la consommation).
   2. L'usage d'un logo de tiers suppose son autorisation. Les assureurs et
      les réseaux la donnent en général à leurs adhérents, souvent avec une
      charte d'utilisation à respecter.
   Pour retirer un logo : commentez sa ligne et relancez `node build.mjs`.
   ========================================================================== */

export const LOGOS_CONFIANCE = [
  {
    fichier: 'mic-insurance',
    nom: 'MIC Insurance',
    /* Reprise dans les mentions légales via ENTREPRISE.assureur. */
    libelle: 'Assurance responsabilité civile professionnelle',
    largeur: 430, hauteur: 160
  },
  {
    fichier: 'chambre-metiers-artisanat',
    nom: 'Chambres de Métiers et de l’Artisanat',
    libelle: 'Entreprise artisanale enregistrée',
    largeur: 204, hauteur: 160
  },
  {
    fichier: 'artisan-de-france',
    nom: 'Artisan de France',
    libelle: 'Membre du réseau Artisan de France',
    largeur: 277, hauteur: 160
  }
];

/** Bandeau des logos, posé automatiquement en bas de chaque page. */
export const confianceSection = (titre = 'Assurance et affiliations professionnelles') =>
  LOGOS_CONFIANCE.length ? `
<section class="confiance" aria-label="Assurance et affiliations">
  <div class="container">
    <p class="confiance__titre">${titre}</p>
    <ul class="confiance__list">
      ${LOGOS_CONFIANCE.map(l => `<li class="confiance__item">
        <img src="/assets/img/confiance/${l.fichier}.png" alt="${l.nom}"
             width="${l.largeur}" height="${l.hauteur}" loading="lazy" decoding="async">
        <span>${l.libelle}</span>
      </li>`).join('\n      ')}
    </ul>
  </div>
</section>` : '';
