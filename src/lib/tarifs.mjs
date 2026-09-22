/* ==========================================================================
   TARIFS ET DISPONIBILITÉ
   --------------------------------------------------------------------------
   Montants fournis par l'entreprise. Ils sont affichés TTC et en « à partir
   de » : le prix exact dépend de l'intervention, ce que le bloc dit
   explicitement.

   ⚠ Trois règles à tenir, sinon l'affichage devient trompeur :
   1. « À partir de » suppose qu'une intervention est réellement facturée à
      ce prix. Si le ticket plancher monte, relevez le chiffre ici.
   2. Les prix affichés au consommateur sont TTC.
   3. Le dépannage, la réparation et l'entretien dans le bâtiment imposent un
      devis écrit au-delà de 150 € TTC — c'est ce qu'annonce la note.
   ========================================================================== */

export const DEPLACEMENT = '45 €';
export const INTERVENTION = 'à partir de 99 €';

export const TARIFS_PLOMBERIE = [
  ['Déplacement et diagnostic sur place', DEPLACEMENT, 'Le technicien se déplace, constate et vous dit ce qu’il faut faire.'],
  ['Dépannage courant', INTERVENTION, 'Robinetterie, mitigeur, chasse d’eau, raccord, joint, vanne d’arrêt.'],
  ['Intervention technique', INTERVENTION, 'Recherche de fuite, chauffe-eau, reprise d’alimentation, sanitaires.']
];

export const TARIFS_DEGORGEMENT = [
  ['Déplacement et diagnostic sur place', DEPLACEMENT, 'Le technicien se déplace, constate et vous dit ce qu’il faut faire.'],
  ['Débouchage d’un point d’eau', INTERVENTION, 'WC, évier, lavabo, douche ou baignoire : un seul point bloqué.'],
  ['Dégorgement de réseau', INTERVENTION, 'Plusieurs évacuations, canalisation enterrée, regard ou fosse.']
];

export const TARIFS_TOUS = [
  ['Déplacement et diagnostic sur place', DEPLACEMENT, 'Le technicien se déplace, constate et vous dit ce qu’il faut faire.'],
  ['Dépannage courant et débouchage', INTERVENTION, 'Robinetterie, chasse d’eau, WC, évier, douche : une intervention simple.'],
  ['Intervention technique ou dégorgement', INTERVENTION, 'Recherche de fuite, chauffe-eau, réseau d’évacuation, pompage.']
];

export const NOTE_TARIFS = `Montants TTC. Quelle que soit l’intervention, elle démarre à 99 € : le prix exact
dépend de l’accès, de la méthode et du temps passé. Il vous est annoncé avant que le travail
commence, et un devis écrit vous est remis dès que le montant dépasse 150 € TTC.
Rien n’est engagé sans votre accord.`;

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
        <div class="tarifs__prix">${prix}</div>
      </li>`).join('\n      ')}
    </ul>
    <p class="tarifs__note">${NOTE_TARIFS}</p>
  </div>
</section>`;
