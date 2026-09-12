import { landingPage } from '../lib/lp.mjs';
import { pick } from '../lib/services.mjs';
import { avisParNoms } from '../lib/reviews.mjs';

export default landingPage({
  slug: 'degorgement-finistere-29',
  dept: 'Finistère', article: 'le', num: '29',
  cities: ['Brest', 'Quimper', 'Morlaix', 'Concarneau', 'Landerneau', 'Douarnenez', 'Quimperlé', 'Châteaulin'],
  title: 'Dégorgement Finistère (29) — canalisation bouchée | Plombier Breizh',
  description: 'Dégorgement et débouchage de canalisation dans le Finistère : camion de pompage, furet, haute pression. Appelez Plombier Breizh au 02 20 06 01 96.',

  tag: 'Dégorgement &amp; débouchage — Finistère 29',
  h1: 'Dégorgement de canalisation dans <em>le Finistère (29)</em>',
  sub: 'L’eau stagne, refoule, ou plusieurs évacuations lâchent en même temps ? Plombier Breizh dégorge votre réseau dans le Finistère.',
  heroPhotoCamion: true,
  heroAlt: 'Camion et matériel de dégorgement Plombier Breizh dans le Finistère',
  atouts: [
    'Intervention rapide',
    'Camion de pompage',
    'Furet &amp; haute pression',
    'Caméra d’inspection',
    'Intervention dans le Finistère'
  ],

  introTitle: 'Le dégorgement dans le Finistère',
  introImg: 'siphon-encrasse',
  introAlt: 'Siphon entièrement encrassé, avant dégorgement',
  introText: [
    'Un seul point d’eau qui ralentit, c’est un débouchage : le bouchon est proche, souvent dans le siphon ou juste après. Mais quand la douche, l’évier et les WC lâchent le même jour, l’obstruction est ailleurs — en aval, sur la partie du réseau que tout le logement partage. Là, un coup de furet dans le siphon ne sert à rien.',
    'Dans le Finistère, une bonne part des appels concerne des réseaux enterrés anciens. Des dépôts se sont accumulés sur les parois année après année, parfois des racines se sont infiltrées à un joint. Le diamètre utile se réduit sans qu’on voie rien, jusqu’au jour où l’eau ne passe plus du tout.',
    'On commence par identifier où ça bloque, puis on choisit : furet électrique, haute pression, ou pompage quand le regard est plein. Décrivez-nous ce que vous constatez, on vous dit tout de suite dans quel cas vous êtes.'
  ],
  situations: [
    'Plusieurs évacuations lentes en même temps dans le logement',
    'Eau sale qui remonte dans la douche ou la baignoire',
    'Regard extérieur plein, qui ne se vide plus',
    'Odeurs persistantes malgré le nettoyage des siphons',
    'Gargouillis dans les canalisations quand on tire la chasse',
    'Canalisation enterrée obstruée par des dépôts ou des racines'
  ],
  moyens: [
    'Camion de pompage pour vider un regard ou une fosse',
    'Furet électrique sur les bouchons compacts',
    'Débouchage haute pression sur les dépôts de paroi',
    'Caméra d’inspection pour localiser l’obstruction',
    'Contrôle de l’écoulement après intervention'
  ],

  servicesTitre: 'Nos interventions de dégorgement dans le Finistère',
  servicesIntro: 'Du siphon d’évier au réseau enterré complet, voici ce que nous prenons en charge.',
  services: pick('Dégorgement', 'Canalisation obstruée', 'Débouchage',
                 'WC bouché', 'Douche bouchée', 'Évier bouché'),
  autres: [
    ['Pompage de regard', 'Vidange du regard avant intervention sur le réseau.'],
    ['Inspection de canalisation', 'Contrôle caméra pour voir ce qui bloque, sans casser.'],
    ['Réseau enterré', 'Dépôts, tartre ou racines sur une conduite extérieure.'],
    ['Urgence refoulement', 'Eau qui remonte : appelez, n’attendez pas que ça déborde.']
  ],

  telephoneTitre: 'Une canalisation bouchée dans le Finistère ?',
  telephoneTexte: 'Une évacuation bloquée ne s’arrange pas seule. Un appel suffit pour lancer la prise en charge.',

  equipTitre: 'Le matériel du dégorgement',
  equipIntro: 'Un bouchon ne se traite pas au hasard : ce qui marche sur des graisses de cuisine n’a aucun effet sur des racines dans une conduite enterrée.',
  equipements: [
    ['equip-pompe', 'Camion de pompage', 'Pour vider un regard ou une fosse et évacuer ce qui bloque le réseau.'],
    ['equip-furet-electrique', 'Furet électrique', 'Pour percer les bouchons compacts installés en profondeur dans la conduite.'],
    ['equip-haute-pression', 'Déboucheur haute pression', 'Pour décoller les dépôts accumulés sur les parois du réseau d’évacuation.']
  ],

  whyIntro: 'Ce sur quoi vous pouvez compter en appelant Plombier Breizh pour un dégorgement dans le Finistère.',
  avis: avisParNoms('Julien Le Roux', 'Élodie Martin', 'Thomas Le Goff'),

  formTitre: 'Demander un dégorgement dans le Finistère',
  formIntro: 'Indiquez votre commune et les évacuations concernées : nous vous rappelons pour organiser l’intervention.',
  ctaFinalTitre: 'Besoin d’un dégorgement dans le Finistère ?',
  ctaFinalTexte: 'Canalisation bouchée, refoulement, regard plein : appelez-nous, nous prenons le relais.'
});
