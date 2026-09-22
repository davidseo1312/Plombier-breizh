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

/* Plancher annoncé pour toute intervention, une fois le déplacement facturé.

   ⚠ « À partir de » suppose qu'une intervention est RÉELLEMENT facturée à ce
   montant. Si le ticket plancher remonte, corrigez ici : afficher un prix
   d'appel qu'aucun client ne paie est une pratique commerciale trompeuse
   (art. L.121-2 du Code de la consommation). */
export const INTERVENTION = 'à partir de 89 €';

/* --------------------------------------------------------------------------
   FOURCHETTES PAR INTERVENTION — À COMPLÉTER
   --------------------------------------------------------------------------
   Une fourchette convertit nettement mieux qu'un « devis sur place » : elle
   lève l'inquiétude principale du visiteur — « combien ça va me coûter » —
   sans vous engager sur un montant ferme.

   Remplissez la colonne `prix` avec vos vraies fourchettes TTC, par exemple
   'de 120 à 190 €'. Toute ligne laissée vide continue d'afficher
   « Devis sur place » : la page reste juste, jamais approximative.

   ⚠ Une fourchette affichée vous engage. Le plancher doit correspondre à une
   intervention réellement facturée à ce prix, et le montant final doit tomber
   dans la fourchette annoncée, sans quoi l'affichage devient trompeur
   (art. L.121-2 du Code de la consommation).
   -------------------------------------------------------------------------- */

const FRAIS = ['Frais de déplacement', DEPLACEMENT,
  'Le technicien se déplace et constate sur place ce qu’il y a à faire.'];

/* prix : '' tant que la fourchette n'est pas connue. */
export const FOURCHETTES_PLOMBERIE = [
  ['Recherche de fuite', '', 'Détecteur acoustique, caméra si l’accès est difficile.'],
  ['Réparation de fuite', '', 'Raccord, flexible, joint, reprise d’alimentation.'],
  ['Robinetterie et mitigeur', '', 'Remplacement ou réparation, cuisine et salle de bain.'],
  ['Chasse d’eau et WC', '', 'Mécanisme, flotteur, joint de cuvette.'],
  ['Chauffe-eau', '', 'Résistance, thermostat, groupe de sécurité, détartrage.'],
  ['Sanitaires', '', 'Pose ou remplacement d’un lavabo, d’un évier, d’une douche.']
];

export const FOURCHETTES_DEGORGEMENT = [
  ['Débouchage de WC', '', 'Ventouse, furet manuel ou furet électrique selon le bouchon.'],
  ['Débouchage d’évier ou de lavabo', '', 'Démontage du siphon, furet, nettoyage de la conduite.'],
  ['Débouchage de douche ou de baignoire', '', 'Cheveux et savon compactés dans l’évacuation.'],
  ['Débouchage de canalisation', '', 'Colonne ou conduite enterrée, furet électrique.'],
  ['Hydrocurage haute pression', '', 'Réseau complet, racines, dépôts incrustés.'],
  ['Inspection caméra', '', 'Localisation précise avant travaux, quand la conduite n’est pas accessible.']
];

/* Construit le tableau final : l'en-tête déplacement, puis chaque fourchette
   renseignée. Si aucune ne l'est, on retombe sur la ligne générique. */
const avecFourchettes = (fourchettes, libelleGenerique, detailGenerique) => {
  const connues = fourchettes.filter(([, prix]) => prix && String(prix).trim());
  return connues.length
    ? [FRAIS, ...connues]
    : [FRAIS, [libelleGenerique, INTERVENTION, detailGenerique]];
};

export const TARIFS_PLOMBERIE = avecFourchettes(FOURCHETTES_PLOMBERIE,
  'Intervention de plomberie',
  'Robinetterie, mitigeur, chasse d’eau, recherche de fuite, chauffe-eau, sanitaires.');

export const TARIFS_DEGORGEMENT = avecFourchettes(FOURCHETTES_DEGORGEMENT,
  'Débouchage et dégorgement',
  'WC, évier, lavabo, douche, baignoire, réseau d’évacuation, regard ou fosse.');

export const TARIFS_TOUS = avecFourchettes([...FOURCHETTES_PLOMBERIE, ...FOURCHETTES_DEGORGEMENT],
  'Intervention',
  'Plomberie, débouchage ou dégorgement : le montant dépend de ce qu’il y a à faire.');

/** Fourchettes encore vides, listées à chaque build. */
export const fourchettesManquantes = () => {
  const vides = [...FOURCHETTES_PLOMBERIE, ...FOURCHETTES_DEGORGEMENT]
    .filter(([, prix]) => !(prix && String(prix).trim()));
  return vides.map(([nom]) => nom);
};

export const NOTE_TARIFS = `Montants TTC. Le montant exact dépend de l’intervention, de l’accès et du
temps passé : il est arrêté sur place, une fois le problème constaté, et vous est annoncé avant que
le travail commence. Un devis écrit vous est remis dès que le montant dépasse 150&nbsp;€ TTC.
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
        <div class="tarifs__prix${prix === SUR_DEVIS ? ' tarifs__prix--devis' : ''}">${prix}</div>
      </li>`).join('\n      ')}
    </ul>
    <p class="tarifs__note">${NOTE_TARIFS}</p>
  </div>
</section>`;
