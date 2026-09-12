import { landingPage } from '../lib/lp.mjs';
import { pick } from '../lib/services.mjs';
import { avisParNoms } from '../lib/reviews.mjs';

export default landingPage({
  slug: 'degorgement-finistere-29',
  dept: 'Finistère', article: 'le', num: '29',
  cities: ['Brest', 'Quimper', 'Morlaix', 'Concarneau', 'Landerneau', 'Douarnenez', 'Quimperlé', 'Châteaulin'],
  title: 'Dégorgement Finistère (29) — canalisation bouchée | Plombier Breizh',
  description: 'Dégorgement et débouchage de canalisation dans le Finistère : camion de pompage, furet, haute pression, caméra. Appelez Plombier Breizh au 02 20 06 01 96.',

  tag: 'Dégorgement &amp; débouchage — Finistère 29',
  h1: 'Dégorgement de canalisation dans <em>le Finistère (29)</em>',
  sub: 'L’eau stagne, refoule, ou plusieurs évacuations lâchent en même temps ? Plombier Breizh dégorge votre réseau dans le Finistère.',
  heroPhotoCamion: true,
  heroAlt: 'Camion et matériel de dégorgement Plombier Breizh dans le Finistère',
  atouts: [
    'Canalisation bouchée',
    'Camion de pompage',
    'Furet &amp; haute pression',
    'Caméra d’inspection',
    'Réseau enterré &amp; regard'
  ],

  introTitle: 'Le dégorgement dans le Finistère',
  introImg: 'siphon-encrasse',
  introAlt: 'Siphon entièrement encrassé, avant dégorgement',
  introText: [
    'Un seul point d’eau qui ralentit, c’est un débouchage : le bouchon est proche, souvent dans le siphon ou juste après. Mais quand la douche, l’évier et les WC lâchent le même jour, l’obstruction est ailleurs — en aval, sur la partie du réseau que tout le logement partage. Là, un coup de furet dans le siphon ne sert à rien.',
    'Dans le Finistère, une bonne part des appels concerne des réseaux enterrés anciens. Des dépôts se sont accumulés sur les parois année après année, parfois des racines se sont infiltrées à un joint. Le diamètre utile se réduit sans qu’on voie rien, jusqu’au jour où l’eau ne passe plus du tout.',
    'On commence par identifier où ça bloque, puis on choisit : furet électrique, haute pression, ou pompage quand le regard est plein. Décrivez-nous ce que vous constatez, on vous dit tout de suite dans quel cas vous êtes.'
  ],
  situationsTitre: 'Les signes d’un réseau bouché',
  situations: [
    'Plusieurs évacuations lentes en même temps dans le logement',
    'Eau sale qui remonte dans la douche ou la baignoire',
    'Regard extérieur plein, qui ne se vide plus',
    'Odeurs persistantes malgré le nettoyage des siphons',
    'Gargouillis dans les canalisations quand on tire la chasse',
    'Canalisation enterrée obstruée par des dépôts ou des racines'
  ],
  moyensTitre: 'Le déroulé d’un dégorgement',
  moyens: [
    'On localise l’obstruction avant de travailler, à la caméra si besoin',
    'On vide le regard ou la fosse au camion de pompage quand c’est nécessaire',
    'On perce le bouchon compact au furet électrique',
    'On décolle les dépôts de paroi au déboucheur haute pression',
    'On contrôle l’écoulement complet avant de repartir'
  ],
  infographie: true,

  servicesTitre: 'Nos interventions de dégorgement dans le Finistère',
  servicesIntro: 'Débouchage de WC, d’évier, de douche, dégorgement du réseau complet ou canalisation enterrée obstruée : ce sont nos interventions du quotidien dans le 29.',
  services: pick('Dégorgement', 'Canalisation obstruée', 'Débouchage',
                 'WC bouché', 'Douche bouchée', 'Évier bouché'),
  autresTitre: 'Les cas plus lourds que nous traitons dans le Finistère',
  autres: [
    ['Pompage de regard', 'Vidange du regard avant de pouvoir intervenir sur le réseau.'],
    ['Inspection caméra', 'On regarde dans la conduite pour voir ce qui bloque, sans casser.'],
    ['Racines dans une conduite', 'Réseau enterré envahi à hauteur d’un joint ou d’un raccord.'],
    ['Refoulement en cours', 'L’eau remonte déjà : appelez, n’attendez pas que ça déborde.']
  ],

  recherchesTitre: 'Les recherches qui mènent le plus souvent à nous dans le Finistère',
  recherchesIntro: 'Ce sont les mots que l’on tape quand une évacuation lâche. Si l’un d’eux correspond à votre situation, appelez le 02 20 06 01 96 : on vous répond directement.',
  recherches: [
    'débouchage canalisation Brest',
    'dégorgement canalisation Quimper',
    'canalisation bouchée que faire',
    'camion de pompage Finistère',
    'déboucher WC sans ventouse',
    'entreprise de débouchage 29',
    'eau qui remonte dans la douche',
    'regard extérieur qui déborde',
    'furet canalisation Morlaix',
    'débouchage urgence Brest',
    'curage de canalisation Finistère',
    'déboucher une canalisation enterrée'
  ],

  telephoneTitre: 'Une canalisation bouchée dans le Finistère ?',
  telephoneTexte: 'Une évacuation bloquée ne s’arrange jamais toute seule : elle finit par refouler. Un appel suffit pour lancer la prise en charge.',

  equipTitre: 'Le matériel du dégorgement',
  equipIntro: 'Un bouchon ne se traite pas au hasard : ce qui marche sur des graisses de cuisine n’a aucun effet sur des racines dans une conduite enterrée. C’est le diagnostic qui choisit l’outil, pas l’inverse.',
  equipements: [
    ['equip-pompe', 'Camion de pompage', 'Pour vider un regard ou une fosse et évacuer ce qui bloque le réseau avant toute intervention.'],
    ['equip-furet-electrique', 'Furet électrique', 'Pour percer les bouchons compacts installés en profondeur dans la conduite.'],
    ['equip-haute-pression', 'Déboucheur haute pression', 'Pour décoller les dépôts accumulés sur les parois d’un réseau ancien.']
  ],

  whyTuiles: {
    materielTitre: 'Le bon outil pour le bon bouchon',
    materielTexte: 'Furet électrique, haute pression, caméra d’inspection, camion de pompage : le camion part avec ce que le réseau demande.',
    metierTitre: 'Le débouchage, tous les jours',
    metierTexte: 'Siphons, WC, réseaux enterrés, regards : ce sont nos interventions quotidiennes dans le Finistère.'
  },
  whyIntro: 'Ce sur quoi vous pouvez compter en appelant Plombier Breizh pour un dégorgement ou un débouchage dans le Finistère.',
  avis: avisParNoms('Julien Le Roux', 'Élodie Martin', 'Thomas Le Goff'),

  formTitre: 'Demander un dégorgement dans le Finistère',
  formIntro: 'Indiquez votre commune et les évacuations concernées : nous vous rappelons pour organiser l’intervention.',
  ctaFinalTitre: 'Besoin d’un dégorgement dans le Finistère ?',
  ctaFinalTexte: 'Canalisation bouchée, refoulement, regard plein : appelez-nous, nous prenons le relais.'
});
