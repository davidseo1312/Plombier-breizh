/* ==========================================================================
   Avis clients — RÉELS, fournis par l'entreprise.
   Aucun avis n'est inventé. Pour en ajouter un, complétez simplement la liste
   ci-dessous : il sera repris automatiquement dans le carrousel des pages
   auxquelles il est affecté (voir `page` en bas de fichier).
   ========================================================================== */

export const AVIS = [
  /* ---------------- Finistère (29) ---------------- */
  {
    note: 5, nom: 'Thomas Le Goff', ville: 'Quimper', dept: '29', page: 'lp29',
    texte: 'Gros bouchon dans les WC un dimanche matin… J’ai appelé et le technicien a pu intervenir assez rapidement. Travail efficace et surtout il a pris le temps de m’expliquer ce qui avait provoqué le problème.'
  },
  {
    note: 5, nom: 'Élodie Martin', ville: 'Brest', dept: '29', page: 'lp29',
    texte: 'Mon évier était complètement bouché et l’eau ne s’écoulait quasiment plus. Intervention rapide, technicien sympa et travail propre. Le problème a été réglé sans perdre de temps.'
  },
  {
    note: 5, nom: 'Julien Le Roux', ville: 'Concarneau', dept: '29', page: 'lp29',
    texte: 'Canalisation complètement engorgée avec de l’eau qui remontait dans la douche. Le technicien a rapidement trouvé l’origine du bouchon et a effectué le dégorgement. Depuis, plus aucun problème.'
  },
  {
    note: 4, nom: 'Nicolas Le Gall', ville: 'Morlaix', dept: '29', page: 'accueil',
    texte: 'Petite fuite sous l’évier qui devenait de plus en plus importante. Intervention dans la journée et réparation directement sur place. Bon contact et travail sérieux.'
  },
  {
    note: 5, nom: 'Camille Kerbrat', ville: 'Douarnenez', dept: '29', page: 'accueil',
    texte: 'Nous avions régulièrement des problèmes d’évacuation dans la cuisine. Cette fois-ci, le technicien a vraiment cherché d’où venait le problème au lieu de simplement déboucher. Très professionnel.'
  },

  /* ---------------- Morbihan (56) ---------------- */
  {
    note: 5, nom: 'Alexandre Le Goff', ville: 'Vannes', dept: '56', page: 'lp56',
    texte: 'Douche totalement bouchée, impossible de faire couler l’eau correctement. J’ai appelé le matin et l’intervention s’est faite rapidement. Débouchage efficace, rien à redire.'
  },
  {
    note: 5, nom: 'Marie Le Floch', ville: 'Lorient', dept: '56', page: 'lp56',
    texte: 'WC bouchés avec l’eau qui commençait à remonter. Le technicien est arrivé avec le matériel nécessaire et a réglé le problème rapidement. Intervention propre et efficace.'
  },
  {
    note: 5, nom: 'Kevin Le Roux', ville: 'Auray', dept: '56', page: 'lp56',
    texte: 'L’évacuation de l’évier était de plus en plus lente depuis plusieurs jours. Après le passage du plombier, tout fonctionne normalement. Très bonne intervention et bonnes explications.'
  },
  {
    note: 4, nom: 'Pierre Le Guen', ville: 'Pontivy', dept: '56', page: 'accueil',
    texte: 'Canalisation complètement bloquée avec de l’eau qui remontait. Prise en charge assez rapide malgré l’urgence. Le technicien était sérieux et nous a expliqué les différentes étapes du dégorgement.'
  },
  {
    note: 5, nom: 'Sophie Le Gall', ville: 'Hennebont', dept: '56', page: 'accueil',
    texte: 'Fuite d’eau assez urgente à la maison. Très bon échange au téléphone et intervention rapide. Le problème a été identifié et réparé proprement. Service sérieux.'
  }
];

/** Avis affectés à une page : 'lp29', 'lp56' ou 'accueil'. */
export const avisDe = (cle) => AVIS.filter(a => a.page === cle);

/** Sélection explicite, dans l'ordre donné : permet de mettre en avant sur
    chaque page les avis qui parlent de la prestation concernée. */
export const avisParNoms = (...noms) =>
  noms.map(n => AVIS.find(a => a.nom === n)).filter(Boolean);

/** Lien vers la fiche établissement Google, si vous souhaitez l'ajouter.
    Laissez vide tant que l'URL n'est pas connue : aucun lien ne sera affiché. */
export const LIEN_GOOGLE = '';
