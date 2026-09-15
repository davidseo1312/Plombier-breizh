/* ==========================================================================
   IDENTITÉ LÉGALE DE L'ENTREPRISE — source unique
   --------------------------------------------------------------------------
   Les mentions légales et la politique de confidentialité sont générées à
   partir de ce seul fichier. Complétez une valeur ici, relancez
   `node build.mjs`, et les deux pages sont à jour.

   RIEN N'EST INVENTÉ. Un champ laissé vide apparaît comme « à compléter »
   sur le site et est listé à la fin du build. Ne remplissez que des données
   que vous pouvez justifier (extrait Kbis / avis de situation SIRENE /
   fiche Pappers).
   ========================================================================== */

export const ENTREPRISE = {
  /* ---- Identité ------------------------------------------------------- */
  /* Dénomination telle qu'immatriculée. Pour une entreprise individuelle,
     c'est le nom de l'entrepreneur. */
  denomination: 'ASSOUL BILAL',

  /* Nom commercial / enseigne sous laquelle l'activité est exercée. */
  enseigne: 'Plombier Breizh',

  /* Ex. « Entrepreneur individuel », « SASU », « SARL »… */
  formeJuridique: '',

  /* Personne physique responsable. Sert aussi de directeur de la publication
     si `directeurPublication` est laissé vide. */
  dirigeant: '',
  dirigeantQualite: '',
  directeurPublication: '',

  /* Capital social — laisser vide pour une entreprise individuelle. */
  capital: '',

  /* ---- Siège social --------------------------------------------------- */
  adresse: '',
  codePostal: '',
  ville: '',

  /* ---- Immatriculation ------------------------------------------------ */
  /* SIREN à 9 chiffres — vérifié (clé de Luhn valide). */
  siren: '901133041',

  /* SIRET du siège : les 9 chiffres du SIREN + les 5 chiffres du NIC. */
  siret: '',

  /* Numéro de TVA intracommunautaire.
     La clé ci-dessous est calculée par la formule officielle
     (12 + 3 × (SIREN mod 97)) mod 97 = 17, d'où FR17901133041.
     ⚠ À NE PUBLIER QUE si l'entreprise est réellement assujettie à la TVA.
     En franchise en base (micro-entreprise), videz ce champ et laissez
     `franchiseTVA` à true : la mention légale correspondante s'affichera. */
  /* Laissé vide volontairement : je ne peux pas vérifier le régime de TVA.
     - si l'entreprise est assujettie   → mettre 'FR17901133041'
     - si elle est en franchise en base → laisser vide et passer
       `franchiseTVA` à true (la mention art. 293 B s'affichera). */
  tva: '',
  franchiseTVA: false,

  /* RCS / RM : ville du greffe d'immatriculation. */
  rcsVille: '',
  /* 'RCS' (commerçants), 'RM' (artisans, répertoire des métiers) ou ''. */
  rcsType: 'RCS',

  /* Code APE / NAF et son libellé. */
  ape: '',
  apeLibelle: '',

  dateCreation: '',

  /* ---- Activité réglementée ------------------------------------------- */
  /* Assurance responsabilité civile professionnelle : nom de l'assureur,
     numéro de contrat et couverture géographique (art. L.111-4 code conso). */
  assureur: '',
  assuranceContrat: '',
  assuranceZone: 'France',

  /* Médiateur de la consommation — obligatoire pour tout professionnel
     travaillant avec des particuliers (art. L.616-1 code de la consommation). */
  mediateurNom: '',
  mediateurAdresse: '',
  mediateurSite: '',

  /* ---- Hébergeur du site ---------------------------------------------- */
  hebergeur: {
    nom: '',
    adresse: '',
    telephone: '',
    site: ''
  }
};

/* Champs dont l'absence pose un problème légal : listés à la fin du build. */
export const CHAMPS_OBLIGATOIRES = [
  ['formeJuridique', 'forme juridique'],
  ['dirigeant', 'nom du dirigeant'],
  ['adresse', 'adresse du siège'],
  ['codePostal', 'code postal du siège'],
  ['ville', 'ville du siège'],
  ['siret', 'SIRET du siège'],
  ['rcsVille', 'ville du greffe (RCS / RM)'],
  ['ape', 'code APE / NAF'],
  ['assureur', 'assureur responsabilité civile professionnelle'],
  ['mediateurNom', 'médiateur de la consommation']
];

/** Valeur renseignée, ou marqueur visible « à compléter ». */
export const val = (v) => (v && String(v).trim())
  ? String(v).trim()
  : '<span class="todo">à compléter</span>';

/** Ligne « Libellé : valeur » ; omise si la valeur est vide et facultative. */
export const ligne = (libelle, v, { obligatoire = true } = {}) => {
  const rempli = v && String(v).trim();
  if (!rempli && !obligatoire) return '';
  return `${libelle} : ${rempli ? String(v).trim() : '<span class="todo">à compléter</span>'}<br>`;
};

/** Adresse postale sur une ligne, telle qu'elle doit apparaître. */
export const adressePostale = (e = ENTREPRISE) => {
  const l = [e.adresse, [e.codePostal, e.ville].filter(Boolean).join(' ')].filter(Boolean).join(', ');
  return l || '';
};

/** Raison sociale affichée : « Enseigne » exploitée par « Dénomination ». */
export const identiteCourte = (e = ENTREPRISE) =>
  e.denomination && e.denomination !== e.enseigne
    ? `${e.enseigne} — ${e.denomination}`
    : e.enseigne;

/** Liste des champs obligatoires encore vides. */
export const champsManquants = (e = ENTREPRISE) =>
  CHAMPS_OBLIGATOIRES.filter(([k]) => !(e[k] && String(e[k]).trim())).map(([, libelle]) => libelle)
    .concat(e.hebergeur.nom ? [] : ['hébergeur du site'])
    .concat((e.tva || e.franchiseTVA) ? [] : ['régime de TVA (n° intracommunautaire ou franchise en base)']);
