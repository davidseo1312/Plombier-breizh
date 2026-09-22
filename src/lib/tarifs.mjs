/* ==========================================================================
   TARIFS ET DISPONIBILITÉ
   --------------------------------------------------------------------------
   Un seul montant est affiché : les frais de déplacement. Le prix de
   l'intervention n'est pas annoncé en ligne, il est établi sur place.

   ⚠ Deux règles à tenir, sinon l'affichage devient trompeur :
   1. Les prix affichés au consommateur sont TTC.
   2. Le dépannage, la réparation et l'entretien dans le bâtiment imposent un
      devis écrit au-delà de 150 € TTC — c'est ce qu'annonce la note.
   ========================================================================== */

export const DEPLACEMENT = '45 €';
export const SUR_DEVIS = 'Devis sur place';

const FRAIS = ['Frais de déplacement', DEPLACEMENT,
  'Le technicien se déplace et constate sur place ce qu’il y a à faire.'];

export const TARIFS_PLOMBERIE = [
  FRAIS,
  ['Intervention de plomberie', SUR_DEVIS,
   'Robinetterie, mitigeur, chasse d’eau, recherche de fuite, chauffe-eau, sanitaires.']
];

export const TARIFS_DEGORGEMENT = [
  FRAIS,
  ['Débouchage et dégorgement', SUR_DEVIS,
   'WC, évier, lavabo, douche, baignoire, réseau d’évacuation, regard ou fosse.']
];

export const TARIFS_TOUS = [
  FRAIS,
  ['Intervention', SUR_DEVIS,
   'Plomberie, débouchage ou dégorgement : le montant dépend de ce qu’il y a à faire.']
];

export const NOTE_TARIFS = `Montants TTC. Le prix de l’intervention est établi sur place, une fois
le problème constaté : il vous est annoncé avant que le travail commence, et un devis écrit
vous est remis dès que le montant dépasse 150&nbsp;€ TTC. Rien n’est engagé sans votre accord.`;

/** Bloc tarifs. `lignes` : une des listes ci-dessus. */
export const tarifsSection = (lignes, { titre = 'Nos tarifs', eyebrow = 'Tarifs', tint = true } = {}) => `
<section class="section${tint ? ' section--tint' : ''}" id="tarifs">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">${eyebrow}</span>
      <h2>${titre}</h2>
    </div>
    <ul class="tarifs">
      ${lignes.map(([nom, prix, detail]) => `<li class="tarifs__ligne">
        <div class="tarifs__nom"><strong>${nom}</strong><span>${detail}</span></div>
        <div class="tarifs__prix${prix === SUR_DEVIS ? ' tarifs__prix--devis' : ''}">${prix}</div>
      </li>`).join('\n      ')}
    </ul>
    <p class="tarifs__note">${NOTE_TARIFS}</p>
  </div>
</section>`;
