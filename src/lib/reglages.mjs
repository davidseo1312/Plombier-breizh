/* ==========================================================================
   RÉGLAGES À COMPLÉTER PAR L'ENTREPRISE
   --------------------------------------------------------------------------
   Tout ce qui ne peut PAS être deviné est regroupé ici. Chaque champ vide
   désactive proprement l'affichage qui en dépend : la page reste correcte et
   ne montre jamais de mention approximative. Dès qu'un champ est rempli,
   l'élément correspondant apparaît sur les seize pages, sans autre travail.

   `node build.mjs` liste à chaque génération les champs encore vides.
   ========================================================================== */

export const REGLAGES = {

  /* --- 1. Qui répond au téléphone -------------------------------------
     Affiché sous les boutons du premier écran : « Vous parlez à Untel,
     plombier depuis X ans ». C'est l'argument anti-plateforme le plus fort.

     ⚠ Vous aviez demandé de retirer le nom du gérant des pages publiques.
     Un prénom seul n'est pas la même chose qu'une raison sociale : il
     humanise sans exposer l'état civil complet. À vous de trancher.
     Les deux champs doivent être remplis pour que la ligne s'affiche. */
  interlocuteur: '',        // prénom seul, ex. 'Bilal'
  anneesExperience: '',     // nombre d'années RÉELLEMENT exercées, ex. 12

  /* --- 2. Horaires réellement tenus ------------------------------------
     ⚠ Valeur actuelle : 7j/7 24h/24, telle que vous me l'aviez indiquée.
     Si une seule de ces heures n'est pas couverte, corrigez ici : la mention
     est reprise partout (en-tête, preuves, pied de page, données
     structurées). Une ligne qui ne décroche pas la nuit rend l'annonce
     trompeuse et fait brûler du budget Ads sur des appels manqués.

     `schema` suit le format schema.org : jour(s) puis plage horaire.
     Exemple d'horaires classiques :
       court  : 'Lun–Sam, 8h–20h'
       long   : 'Joignable du lundi au samedi, de 8h à 20h'
       schema : ['Mo-Sa 08:00-20:00'] */
  horaires: {
    court: '7j/7 — 24h/24',
    long: 'Joignable 7j/7, 24h/24',
    detail: 'Soir, week-end et jours fériés compris.',
    schema: ['Mo-Su 00:00-23:59']
  },

  /* --- 3. Fiche Google ---------------------------------------------------
     À remplir UNIQUEMENT avec les valeurs lues sur la fiche Google
     Business Profile. Tant que `url` et `note` sont vides, la page affiche
     la moyenne calculée sur les avis publiés — honnête, mais moins forte
     qu'une note vérifiable par le visiteur en un clic.

     La note n'est reprise dans les données structurées (aggregateRating)
     que si ces champs sont remplis : Google interdit de baliser une note
     issue de ses propres avis auto-hébergés. */
  google: {
    note: '',          // ex. '4.8'
    nombreAvis: '',    // ex. '87'
    url: ''            // lien public de la fiche, ex. 'https://g.page/r/...'
  },

  /* --- 4. Suivi des conversions Google Ads -------------------------------
     Sans ces identifiants, AUCUNE conversion n'est mesurée : impossible de
     savoir quels mots-clés génèrent des appels, donc impossible d'optimiser
     les enchères. C'est aujourd'hui le premier poste de perte du compte.

     Le script gtag n'est injecté que si `ads.id` ou `ga4` est renseigné :
     tant qu'ils sont vides, aucune requête tierce n'est faite et la page
     reste plus rapide.

     `conversionAppel` et `conversionRappel` : les libellés complets fournis
     par Google Ads, au format 'AW-123456789/AbCdEfGhIjK'. */
  ads: {
    id: '',                  // ex. 'AW-123456789'
    conversionAppel: '',     // ex. 'AW-123456789/AbCdEfGhIjK'
    conversionRappel: ''     // ex. 'AW-123456789/LmNoPqRsTuV'
  },
  ga4: '',                   // ex. 'G-XXXXXXXXXX'

  /* --- 5. Destinataire du formulaire -------------------------------------
     Sans point de collecte, le formulaire retombe sur le client de messagerie
     du visiteur : sur mobile, la grande majorité des demandes est perdue.
     Renseignez l'URL d'un service de collecte (Formspree, Basin, Web3Forms…). */
  formulaireAction: ''
};

/* Un champ « rempli » est une chaîne non vide une fois nettoyée. */
const rempli = (v) => Boolean(v && String(v).trim());

export const identiteDisponible = () =>
  rempli(REGLAGES.interlocuteur) && rempli(REGLAGES.anneesExperience);

export const googleDisponible = () =>
  rempli(REGLAGES.google.note) && rempli(REGLAGES.google.url);

export const suiviDisponible = () => rempli(REGLAGES.ads.id) || rempli(REGLAGES.ga4);

/** Liste lisible des réglages encore vides, affichée à chaque build. */
export const reglagesManquants = () => {
  const m = [];
  if (!identiteDisponible())
    m.push('interlocuteur + anneesExperience — ligne « Vous parlez à … » du premier écran');
  if (!googleDisponible())
    m.push('google.note + google.nombreAvis + google.url — note Google et lien vers la fiche');
  if (!rempli(REGLAGES.ads.id))
    m.push('ads.id — aucune conversion Google Ads n’est mesurée');
  if (!rempli(REGLAGES.ads.conversionAppel))
    m.push('ads.conversionAppel — les appels ne remontent pas comme conversion');
  if (!rempli(REGLAGES.ads.conversionRappel))
    m.push('ads.conversionRappel — les demandes de rappel ne remontent pas');
  if (!rempli(REGLAGES.ga4))
    m.push('ga4 — aucune mesure d’audience');
  if (!rempli(REGLAGES.formulaireAction))
    m.push('formulaireAction — le formulaire retombe sur mailto:, les envois mobiles sont perdus');
  return m;
};
