import { landingPage } from '../lib/lp.mjs';
import { pick } from '../lib/services.mjs';
import { avisParNoms } from '../lib/reviews.mjs';

export default landingPage({
  slug: 'degorgement-morbihan-56',
  dept: 'Morbihan', article: 'le', num: '56',
  cities: ['Vannes', 'Lorient', 'Lanester', 'Auray', 'Pontivy', 'Hennebont', 'Ploemeur', 'Questembert'],
  title: 'Dégorgement Morbihan (56) — canalisation bouchée | Plombier Breizh',
  description: 'Dégorgement et débouchage de canalisation dans le Morbihan : camion de pompage, furet, haute pression. Appelez Plombier Breizh au 02 20 06 01 96.',

  tag: 'Dégorgement &amp; débouchage — Morbihan 56',
  h1: 'Dégorgement de canalisation dans <em>le Morbihan (56)</em>',
  sub: 'L’eau stagne, refoule, ou plusieurs évacuations lâchent en même temps ? Plombier Breizh dégorge votre réseau dans le Morbihan.',
  heroImg: 'siphon-encrasse', heroPhotoCamion: false,
  heroAlt: 'Siphon d’évacuation entièrement encrassé, avant dégorgement',
  atouts: [
    'Intervention rapide',
    'Camion de pompage',
    'Furet &amp; haute pression',
    'Caméra d’inspection',
    'Intervention dans le Morbihan'
  ],

  introTitle: 'Le dégorgement dans le Morbihan',
  introImg: 'cliente-attente',
  introAlt: 'Cliente attendant l’intervention devant son évier bouché, dans le Morbihan',
  introText: [
    'Le premier réflexe, quand une évacuation ralentit, c’est le déboucheur chimique. Il donne parfois l’illusion que ça repart — l’eau passe une journée, puis le bouchon revient, plus compact qu’avant. Et le produit, lui, reste dans la canalisation pour celui qui interviendra ensuite.',
    'Dans le Morbihan, beaucoup de résidences ne sont occupées qu’une partie de l’année. Un réseau qui ne sert plus pendant des semaines s’assèche, les dépôts durcissent, et la remise en service se fait mal. Ajoutez à cela les fosses et les regards des maisons hors agglomération, et vous avez l’essentiel de ce que nous traitons ici.',
    'Un appel permet généralement de trancher : débouchage ponctuel sur un point d’eau, ou dégorgement du réseau commun. Dites-nous ce que vous constatez, on vous oriente sans détour.'
  ],
  situations: [
    'Évacuation bouchée à la réouverture d’un logement',
    'Plusieurs points d’eau lents en même temps',
    'Eau qui remonte dans le bac de douche',
    'Regard ou fosse qui ne se vide plus',
    'Odeurs qui remontent des canalisations',
    'Déboucheur chimique resté sans effet'
  ],
  moyens: [
    'Camion de pompage pour vider un regard ou une fosse',
    'Furet électrique sur les bouchons compacts',
    'Débouchage haute pression sur les dépôts de paroi',
    'Caméra d’inspection pour localiser l’obstruction',
    'Contrôle de l’écoulement après intervention'
  ],

  servicesTitre: 'Nos interventions de dégorgement dans le Morbihan',
  servicesIntro: 'Du siphon d’évier au réseau enterré complet, voici ce que nous prenons en charge.',
  services: pick('Dégorgement', 'Canalisation obstruée', 'Débouchage',
                 'WC bouché', 'Douche bouchée', 'Évier bouché'),
  autres: [
    ['Pompage de regard', 'Vidange du regard avant intervention sur le réseau.'],
    ['Inspection de canalisation', 'Contrôle caméra pour voir ce qui bloque, sans casser.'],
    ['Réseau enterré', 'Dépôts, tartre ou racines sur une conduite extérieure.'],
    ['Urgence refoulement', 'Eau qui remonte : appelez, n’attendez pas que ça déborde.']
  ],

  telephoneTitre: 'Une canalisation bouchée dans le Morbihan ?',
  telephoneTexte: 'Une évacuation bloquée ne s’arrange pas seule. Un appel suffit pour lancer la prise en charge.',

  equipTitre: 'Le matériel du dégorgement',
  equipIntro: 'Un bouchon ne se traite pas au hasard : ce qui marche sur des graisses de cuisine n’a aucun effet sur des racines dans une conduite enterrée.',
  equipements: [
    ['equip-pompe', 'Camion de pompage', 'Pour vider un regard ou une fosse et évacuer ce qui bloque le réseau.'],
    ['equip-furet-electrique', 'Furet électrique', 'Pour percer les bouchons compacts installés en profondeur dans la conduite.'],
    ['equip-haute-pression', 'Déboucheur haute pression', 'Pour décoller les dépôts accumulés sur les parois du réseau d’évacuation.']
  ],

  whyIntro: 'Ce sur quoi vous pouvez compter en appelant Plombier Breizh pour un dégorgement dans le Morbihan.',
  avis: avisParNoms('Pierre Le Guen', 'Alexandre Le Goff', 'Marie Le Floch'),

  formTitre: 'Demander un dégorgement dans le Morbihan',
  formIntro: 'Indiquez votre commune et les évacuations concernées : nous vous rappelons pour organiser l’intervention.',
  ctaFinalTitre: 'Besoin d’un dégorgement dans le Morbihan ?',
  ctaFinalTexte: 'Canalisation bouchée, refoulement, regard plein : appelez-nous, nous prenons le relais.'
});
