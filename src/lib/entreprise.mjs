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
  formeJuridique: 'Entrepreneur individuel (EI)',

  /* Personne physique responsable. Sert aussi de directeur de la publication
     si `directeurPublication` est laissé vide. */
  dirigeant: 'Bilal Assoul',
  dirigeantQualite: 'entrepreneur individuel',
  directeurPublication: 'Bilal Assoul',

  /* Capital social — laisser vide pour une entreprise individuelle. */
  capital: '',

  /* ---- Siège social --------------------------------------------------- */
  adresse: '1 rue Albert Simonin',
  codePostal: '92400',
  ville: 'Courbevoie',

  /* ---- Immatriculation ------------------------------------------------ */
  /* SIREN à 9 chiffres — vérifié (clé de Luhn valide). */
  siren: '901 133 041',

  /* SIRET du siège : les 9 chiffres du SIREN + les 5 chiffres du NIC. */
  siret: '901 133 041 00011',

  /* Numéro de TVA intracommunautaire.
     La clé ci-dessous est calculée par la formule officielle
     (12 + 3 × (SIREN mod 97)) mod 97 = 17, d'où FR17901133041.
     ⚠ À NE PUBLIER QUE si l'entreprise est réellement assujettie à la TVA.
     En franchise en base (micro-entreprise), videz ce champ et laissez
     `franchiseTVA` à true : la mention légale correspondante s'affichera. */
  /* Le numéro FR17901133041 existe mais apparaît NON VALIDE sur la fiche
     d'entreprise (non actif au répertoire VIES) : c'est la signature d'une
     franchise en base de TVA. La mention légale correspondante est donc
     affichée à la place du numéro.
     Si l'entreprise est en réalité assujettie : mettre tva: 'FR17901133041'
     et repasser franchiseTVA à false. */
  tva: '',
  franchiseTVA: true,

  /* RCS / RM : ville du greffe d'immatriculation. */
  rcsVille: 'Nanterre',
  /* 'RCS' (commerçants), 'RM' (artisans, répertoire des métiers) ou ''. */
  rcsType: 'RCS',

  /* Code APE / NAF enregistré. N'EST PLUS PUBLIÉ sur le site : il ne
     correspond pas à l'activité vendue (plomberie) et n'est pas une mention
     légale obligatoire. Conservé ici à titre documentaire, à régulariser
     auprès du greffe / de l'INPI. */
  ape: '81.29A',
  apeLibelle: 'Désinfection, désinsectisation, dératisation',

  dateCreation: '6 juillet 2021',

  /* ---- Activité réglementée ------------------------------------------- */
  /* Assurance responsabilité civile professionnelle : nom de l'assureur,
     numéro de contrat et couverture géographique (art. L.111-4 code conso). */
  /* Repris du logo MIC Insurance fourni pour le bandeau de confiance.
     ⚠ À confirmer : contrat en cours, et n° de police à compléter ci-dessous. */
  assureur: 'MIC Insurance',
  assuranceContrat: '',
  assuranceZone: 'France',

  /* Médiateur de la consommation — obligatoire pour tout professionnel
     travaillant avec des particuliers (art. L.616-1 code de la consommation). */
  mediateurNom: '',
  mediateurAdresse: '',
  mediateurSite: '',

  /* ---- Hébergeur du site ---------------------------------------------- */
  /* ⚠ Adresse à confirmer sur votre facture Hostinger : le groupe exploite
     plusieurs entités selon le contrat. Hostinger n'expose pas de numéro de
     téléphone d'assistance (support par chat et ticket), d'où le champ vide. */
  hebergeur: {
    nom: 'Hostinger International Ltd',
    adresse: '61 Lordou Vironos Street, 6023 Larnaca, Chypre',
    telephone: '',
    site: 'https://www.hostinger.fr'
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
