import { landingPage } from '../lib/lp.mjs';
import { pick } from '../lib/services.mjs';
import { avisParNoms } from '../lib/reviews.mjs';

export default landingPage({
  slug: 'degorgement-morbihan-56',
  dept: 'Morbihan', article: 'le', num: '56',
  cities: ['Vannes', 'Lorient', 'Lanester', 'Auray', 'Pontivy', 'Hennebont', 'Ploemeur', 'Questembert'],
  title: 'Dégorgement Morbihan (56) — canalisation bouchée | Plombier Breizh',
  description: 'Dégorgement et débouchage de canalisation dans le Morbihan : camion de pompage, furet, haute pression, pompage de fosse. Appelez Plombier Breizh au 02 20 06 01 96.',

  tag: 'Dégorgement &amp; débouchage — Morbihan 56',
  h1: 'Dégorgement de canalisation dans <em>le Morbihan (56)</em>',
  sub: 'L’eau stagne, refoule, ou plusieurs évacuations lâchent en même temps ? Plombier Breizh dégorge votre réseau dans le Morbihan.',
  heroPhotoCamion: true,
  heroAlt: 'Camion et matériel de dégorgement Plombier Breizh dans le Morbihan',
  atouts: [
    'Canalisation bouchée',
    'Pompage de regard &amp; de fosse',
    'Furet &amp; haute pression',
    'Remise en service après vacance',
    'Maisons hors agglomération'
  ],

  introTitle: 'Le dégorgement dans le Morbihan',
  introImg: 'cliente-attente',
  introAlt: 'Cliente attendant l’intervention devant son évier bouché, dans le Morbihan',
  introText: [
    'Le premier réflexe, quand une évacuation ralentit, c’est le déboucheur chimique. Il donne parfois l’illusion que ça repart — l’eau passe une journée, puis le bouchon revient, plus compact qu’avant. Et le produit, lui, reste dans la canalisation pour celui qui interviendra ensuite.',
    'Dans le Morbihan, beaucoup de résidences ne sont occupées qu’une partie de l’année. Un réseau qui ne sert plus pendant des semaines s’assèche, les dépôts durcissent, et la remise en service se fait mal. Ajoutez à cela les fosses et les regards des maisons hors agglomération, et vous avez l’essentiel de ce que nous traitons ici.',
    'Un appel permet généralement de trancher : débouchage ponctuel sur un point d’eau, ou dégorgement du réseau commun. Dites-nous ce que vous constatez, on vous oriente sans détour.'
  ],
  situationsTitre: 'Ce que nous constatons le plus souvent dans le 56',
  situations: [
    'Évacuation bouchée à la réouverture d’une maison restée vide',
    'Plusieurs points d’eau lents le même jour',
    'Eau qui remonte dans le bac de douche',
    'Regard ou fosse qui ne se vide plus',
    'Odeurs qui remontent des canalisations',
    'Déboucheur chimique resté sans effet'
  ],
  moyensTitre: 'Les méthodes de dégorgement que nous employons',
  moyens: [
    'Pompage du regard ou de la fosse quand le réseau est saturé',
    'Haute pression sur les dépôts durcis par une longue période sans usage',
    'Furet électrique sur les bouchons compacts d’un point d’eau',
    'Caméra d’inspection quand le bouchon ne se laisse pas situer',
    'Rinçage et contrôle de l’écoulement avant de repartir'
  ],
  infographie: true,

  servicesTitre: 'Nos interventions de dégorgement dans le Morbihan',
  servicesIntro: 'Débouchage de WC, d’évier, de douche, dégorgement du réseau complet ou canalisation extérieure obstruée : ce sont nos interventions du quotidien dans le 56.',
  services: pick('Dégorgement', 'Canalisation obstruée', 'Débouchage',
                 'WC bouché', 'Douche bouchée', 'Évier bouché'),
  autresTitre: 'Les cas plus lourds que nous traitons dans le Morbihan',
  autres: [
    ['Pompage de fosse et de regard', 'Vidange avant de pouvoir travailler sur le réseau.'],
    ['Remise en service d’un réseau', 'Maison rouverte après plusieurs semaines sans usage.'],
    ['Inspection caméra', 'Pour situer un bouchon qui revient sans cesse au même endroit.'],
    ['Refoulement en cours', 'L’eau remonte déjà : appelez, n’attendez pas que ça déborde.']
  ],

  recherchesTitre: 'Les recherches qui mènent le plus souvent à nous dans le Morbihan',
  recherchesIntro: 'Ce sont les mots que l’on tape quand une évacuation lâche. Si l’un d’eux correspond à votre situation, appelez le 02 20 06 01 96 : on vous répond directement.',
  recherches: [
    'débouchage canalisation Vannes',
    'dégorgement canalisation Lorient',
    'canalisation bouchée Vannes',
    'camion de pompage Morbihan',
    'déboucher WC bouché Lorient',
    'entreprise de débouchage 56',
    'regard qui déborde maison',
    'évier bouché Auray',
    'déboucheur chimique ne marche pas',
    'pompage de fosse Morbihan',
    'odeur d’égout dans la maison',
    'débouchage urgence Vannes'
  ],

  telephoneTitre: 'Une canalisation bouchée dans le Morbihan ?',
  telephoneTexte: 'Un bouchon qui revient, un regard plein, une maison à remettre en service : décrivez-nous la situation, on vous dit ce qu’il faut prévoir.',

  equipTitre: 'Le matériel du dégorgement',
  equipIntro: 'Entre un siphon encrassé et une fosse qui ne se vide plus, ce n’est ni le même outil ni la même intervention. On prépare le camion d’après ce que vous décrivez au téléphone.',
  equipements: [
    ['equip-haute-pression', 'Déboucheur haute pression', 'Pour reprendre un réseau resté longtemps sans usage, dont les dépôts ont durci.'],
    ['equip-pompe', 'Pompe et camion de pompage', 'Pour vider un regard ou une fosse avant d’intervenir sur la canalisation.'],
    ['equip-camion', 'Un camion équipé', 'Le matériel part avec le technicien, y compris pour les communes éloignées du littoral.']
  ],

  whyTuiles: {
    materielTitre: 'Le bon outil pour le bon bouchon',
    materielTexte: 'Pompage, haute pression, furet électrique, caméra : on prépare le camion d’après ce que vous décrivez au téléphone.',
    metierTitre: 'Le débouchage, tous les jours',
    metierTexte: 'Points d’eau bouchés, réseaux restés sans usage, regards et fosses : c’est notre quotidien dans le Morbihan.'
  },
  whyIntro: 'Ce sur quoi vous pouvez compter en appelant Plombier Breizh pour un dégorgement ou un débouchage dans le Morbihan.',
  avis: avisParNoms('Pierre Le Guen', 'Alexandre Le Goff', 'Marie Le Floch'),

  formTitre: 'Demander un dégorgement dans le Morbihan',
  formIntro: 'Indiquez votre commune et les évacuations concernées : nous vous rappelons pour organiser l’intervention.',
  ctaFinalTitre: 'Besoin d’un dégorgement dans le Morbihan ?',
  ctaFinalTexte: 'Canalisation bouchée, refoulement, regard ou fosse plein : appelez-nous, nous prenons le relais.'
});
