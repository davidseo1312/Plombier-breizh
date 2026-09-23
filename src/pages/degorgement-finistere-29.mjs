import { landingService } from '../lib/lp-service.mjs';
import { DEGORGEMENT } from '../lib/metiers.mjs';
import { avisParNoms } from '../lib/reviews.mjs';

export default landingService({
  metier: DEGORGEMENT,
  tarifs: DEGORGEMENT.tarifs,
  slug: 'degorgement-finistere-29',
  dept: 'Finistère', article: 'le', num: '29',
  cities: ['Brest', 'Quimper', 'Morlaix', 'Concarneau', 'Landerneau', 'Douarnenez', 'Quimperlé', 'Châteaulin'],
  title: 'Débouchage et dégorgement Finistère (29) — déplacement 45 € | Plombier Breizh',
  description: 'Débouchage à Brest, Quimper, Concarneau et dans le Finistère : WC, évier, douche, canalisation, hydrocurage. Déplacement 45 € TTC, prix annoncé. 02 20 06 01 96.',

  tag: 'Dégorgement &amp; débouchage — Finistère 29',
  h1: 'Dégorgement de canalisation dans <em>le Finistère (29)</em>',
  subArguments: ['Déplacement 45 €', 'Prix transparent', 'Prix annoncé avant travaux'],
  sub: 'Une évacuation bloquée, de l’eau qui remonte, un regard plein : décrivez ce que vous constatez par téléphone pour organiser l’intervention.',
  heroCamion: true,
  heroAlt: 'Camion et matériel de dégorgement Plombier Breizh, dans le Finistère',

  servicesTitre: 'Ce que nous débouchons dans le Finistère',
  services: [
    ['debouchage-wc', 'WC bouché', 'Les WC ne s’évacuent plus. On rétablit l’écoulement sans rien casser.'],
    ['debouchage-evier', 'Évier bouché', 'Graisses et résidus : on démonte, on nettoie le siphon, on contrôle l’évacuation.'],
    ['debouchage-douche', 'Douche bouchée', 'Cheveux, savon, calcaire : on dégage la bonde et la conduite.'],
    ['debouchage-canalisation', 'Débouchage', 'Une évacuation qui ralentit finit par se boucher. On retire le bouchon avant le refoulement.'],
    ['canalisation-bouchee', 'Canalisation obstruée', 'Bouchon profond, dépôts, racines : on cherche d’abord où ça bloque.'],
    ['degorgement', 'Dégorgement de réseau', 'Plusieurs évacuations lâchent en même temps : le bouchon est en aval, on dégorge.']
  ],

  appelTitre: 'Ce qui se passe quand vous appelez',
  appelIntro: 'Deux minutes au téléphone suffisent à savoir dans quel cas vous êtes : un débouchage sur un point d’eau, ou un dégorgement du réseau. Vous n’engagez rien en appelant.',
  etapes: [
    ['Vous décrivez — 1 minute', 'Quelles évacuations sont touchées, depuis quand, si l’eau remonte. Pas besoin de vocabulaire technique.'],
    ['On identifie — 30 secondes', 'On vous dit si le bouchon est proche ou sur le réseau commun, et quel matériel il faut prévoir.'],
    ['On fixe le passage — 30 secondes', 'Vous validez, on convient du créneau. Sans votre accord, rien n’est lancé.']
  ],
  nonFaits: [
    'Aucun déplacement sans que vous ayez validé le passage.',
    'On cherche l’origine du bouchon avant de forcer quoi que ce soit.',
    'Vous savez ce qu’on va faire avant qu’on commence.'
  ],
  infographie: true,

  materielTitre: 'Le matériel du dégorgement',
  materielIntro: 'Un bouchon ne se traite pas au hasard : ce qui marche sur des graisses de cuisine n’a aucun effet sur des racines dans une conduite enterrée. C’est le diagnostic qui choisit l’outil.',
  materiel: [
    ['equip-furet-electrique', 'Furet électrique', 'Pour percer les bouchons compacts installés en profondeur dans la conduite.'],
    ['equip-haute-pression', 'Déboucheur haute pression', 'Pour décoller les dépôts accumulés sur les parois d’un réseau ancien.'],
    ['equip-pompe', 'Camion de pompage', 'Pour vider un regard ou une fosse avant d’intervenir sur le réseau.']
  ],

  avis: avisParNoms('Thomas Le Goff', 'Élodie Martin', 'Julien Le Roux', 'Camille Kerbrat'),

  zoneTexte: 'Nous intervenons sur ces communes du Finistère et leurs alentours.',

  faq: [
    ['Vous intervenez dans quels délais ?',
     'Nous sommes joignables 7j/7, 24h/24, soir et week-end compris. Le créneau dépend ensuite de votre commune et du planning : nous vous le disons dès l’appel.'],
    ['Combien coûte un débouchage ?',
     'Les frais de déplacement sont de 45 € TTC. Le prix du débouchage est établi sur place : l’écart est important entre un point d’eau isolé et un réseau enterré. Le montant définitif vous est annoncé avant le début des travaux, et un devis écrit vous est remis au-delà de 150 € TTC.'],
    ['Les déboucheurs chimiques, ça marche ?',
     'Rarement durablement. Le produit ouvre parfois un passage pour une journée, puis le bouchon revient plus compact — et il reste dans la canalisation pour celui qui interviendra ensuite.'],
    ['Comment savez-vous où se situe le bouchon ?',
     'Si un seul point d’eau est touché, il est proche. Si plusieurs lâchent le même jour, il est en aval, sur la partie commune. En cas de doute, la caméra d’inspection tranche.'],
    ['Que faire en attendant votre arrivée ?',
     'N’utilisez plus les évacuations concernées et évitez de tirer la chasse, pour ne pas provoquer de débordement.']
  ],

  formIntro: 'Laissez votre numéro et votre commune : nous vous rappelons pour organiser l’intervention.',
  ctaFinalTexte: 'Canalisation bouchée, refoulement, regard plein : un appel suffit pour lancer la prise en charge.'
});
