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
  },

  /* ---------------- Plomberie — avis transmis sans commune -----------------
     Textes et noms fournis par l'entreprise. La commune n'a pas été
     communiquée et n'est pas inventée : la carte affiche alors le département
     sous le nom. Ajoutez `ville` ici dès que vous l'avez, elle sera reprise
     automatiquement. */
  {
    id: 'plomberie-29-a', note: 5, nom: 'Antoine Leclerc', dept: '29', page: 'plomberie29',
    texte: 'Intervention rapide et efficace pour une fuite d’eau dans la cuisine. Le plombier a trouvé l’origine du problème rapidement et a effectué la réparation proprement. Travail sérieux et professionnel. Je recommande.'
  },
  {
    id: 'plomberie-29-b', note: 5, nom: 'Camille Morel', dept: '29', page: 'plomberie29',
    texte: 'Très satisfait de l’intervention. Notre canalisation était complètement bouchée et le technicien est intervenu rapidement. Ponctuel, efficace et de bons conseils. Le problème a été réglé sans perdre de temps.'
  },
  {
    id: 'plomberie-29-c', note: 5, nom: 'Thomas Garnier', dept: '29', page: 'plomberie29',
    texte: 'Plombier très professionnel. Intervention pour une fuite sur une canalisation avec recherche de fuite et réparation. Travail propre, explications claires et tarif annoncé avant l’intervention. Rien à redire.'
  },
  {
    id: 'plomberie-56-a', note: 5, nom: 'Julie Perrin', dept: '56', page: 'plomberie56',
    texte: 'Très bonne expérience avec ce plombier. Intervention rapide pour un problème de chauffe-eau, diagnostic effectué rapidement et réparation réalisée dans la foulée. Technicien sérieux et agréable.'
  },
  {
    id: 'plomberie-56-b', note: 5, nom: 'Nicolas Fontaine', dept: '56', page: 'plomberie56',
    texte: 'Appel pour un évier complètement bouché. Le plombier est arrivé rapidement avec le matériel nécessaire et a réglé le problème efficacement. Intervention propre et professionnelle. Je recommande sans hésiter.'
  },
  {
    id: 'plomberie-56-c', note: 5, nom: 'Laura Marchand', dept: '56', page: 'plomberie56',
    texte: 'Excellent service pour une fuite d’eau dans la salle de bain. Le technicien a pris le temps de rechercher précisément la fuite avant de faire la réparation. Ponctuel, professionnel et travail soigné.'
  }
];

/** Avis affectés à une page : 'lp29', 'lp56' ou 'accueil'. */
export const avisDe = (cle) => AVIS.filter(a => a.page === cle);

/** Sélection explicite, dans l'ordre donné : permet de mettre en avant sur
    chaque page les avis qui parlent de la prestation concernée. Une clé est
    soit le nom du client, soit l'`id` de l'avis quand il a été transmis
    sans nom. */
export const avisParNoms = (...cles) =>
  cles.map(c => AVIS.find(a => a.nom === c || a.id === c)).filter(Boolean);

/** Regroupe une sélection d'avis par département, dans l'ordre demandé.
    Rend `[['29', [...]], ['56', [...]]]` en laissant de côté les départements
    sans avis : les pages n'affichent jamais un bloc vide. */
export const DEPARTEMENTS = { '29': 'Finistère', '56': 'Morbihan' };

export const avisParDept = (liste, ordre = ['29', '56']) =>
  ordre
    .map(d => [d, liste.filter(a => a.dept === d)])
    .filter(([, avis]) => avis.length > 0);

/** Lien vers la fiche établissement Google, si vous souhaitez l'ajouter.
    Laissez vide tant que l'URL n'est pas connue : aucun lien ne sera affiché. */
export const LIEN_GOOGLE = '';
