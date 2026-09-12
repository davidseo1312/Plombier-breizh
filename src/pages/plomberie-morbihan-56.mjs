import { landingPage } from '../lib/lp.mjs';
import { pick } from '../lib/services.mjs';
import { avisParNoms } from '../lib/reviews.mjs';

export default landingPage({
  slug: 'plomberie-morbihan-56',
  dept: 'Morbihan', article: 'le', num: '56',
  cities: ['Vannes', 'Lorient', 'Lanester', 'Auray', 'Pontivy', 'Hennebont', 'Ploemeur', 'Questembert'],
  title: 'Plombier Morbihan (56) — fuite d’eau et dépannage | Plombier Breizh',
  description: 'Plombier dans le Morbihan : fuite d’eau, recherche de fuite, ballon d’eau chaude, robinetterie, vanne d’arrêt. Appelez Plombier Breizh au 02 20 06 01 96.',

  tag: 'Plomberie &amp; dépannage — Morbihan 56',
  h1: 'Plombier dans le Morbihan (56) — <em>fuite d’eau et dépannage</em>',
  sub: 'Une fuite à la remise en eau, un ballon qui ne chauffe plus, une vanne qui ne ferme plus ? Plombier Breizh répare vos installations dans le Morbihan.',
  heroImg: 'fuite-eau', heroPhotoCamion: false,
  heroAlt: 'Réparation d’une fuite sous un lavabo par Plombier Breizh, dans le Morbihan',
  atouts: [
    'Fuite d’eau',
    'Recherche de fuite',
    'Ballon d’eau chaude',
    'Vanne d’arrêt &amp; raccords',
    'Remise en eau d’un logement'
  ],

  introTitle: 'Votre plombier dans le Morbihan',
  introImg: 'chauffe-eau',
  introAlt: 'Intervention sur un ballon d’eau chaude dans le Morbihan',
  introText: [
    'Sur le littoral morbihannais, beaucoup de logements ne sont occupés qu’une partie de l’année. On ouvre la maison, on remet l’eau, et la surprise arrive tout de suite : un raccord qui a travaillé pendant l’hiver, un groupe de sécurité entartré, un ballon qui ne chauffe plus.',
    'À l’intérieur des terres, ce sont plutôt les installations anciennes qui appellent. Des réseaux en cuivre repris plusieurs fois, des vannes d’arrêt qui ne ferment plus vraiment — et le jour où il faut couper l’eau en urgence, on s’en rend compte au pire moment.',
    'Dites-nous ce que vous constatez. Souvent, un simple échange au téléphone suffit à distinguer un joint à remplacer d’une fuite qu’il faut d’abord localiser.'
  ],
  situationsTitre: 'Ce qui nous vaut le plus d’appels dans le 56',
  situations: [
    'Fuite au moment de remettre l’eau dans une maison rouverte',
    'Plus d’eau chaude, groupe de sécurité qui goutte sans arrêt',
    'Vanne d’arrêt qui ne ferme plus correctement',
    'Fuite sur un raccord d’alimentation',
    'Robinet ou mitigeur à remplacer',
    'Humidité inexpliquée au sol ou sur une cloison'
  ],
  moyensTitre: 'Notre façon de traiter une fuite',
  moyens: [
    'On situe la fuite au détecteur acoustique avant d’ouvrir quoi que ce soit',
    'On coupe proprement : reprise ou remplacement de la vanne d’arrêt si besoin',
    'On refait le raccord, le joint ou la robinetterie en cause',
    'On contrôle l’installation complète après une longue période sans usage',
    'On réintervient sur le chauffe-eau : groupe de sécurité, raccordement'
  ],

  servicesTitre: 'Nos interventions de plomberie dans le Morbihan',
  servicesIntro: 'Fuite d’eau, recherche de fuite, ballon d’eau chaude, robinetterie, sanitaires : ici, pas de débouchage — uniquement ce qui touche à l’installation elle-même.',
  services: pick('Dépannage plomberie', 'Chauffe-eau', 'Recherche de fuite',
                 'Fuite d’eau', 'Chasse d’eau et sanitaires', 'Urgence plomberie'),
  autresTitre: 'Également pris en charge dans le Morbihan',
  autres: [
    ['Remise en eau', 'Contrôle de l’installation à la réouverture d’un logement.'],
    ['Vanne d’arrêt', 'Vanne grippée qui ne coupe plus l’eau correctement.'],
    ['Groupe de sécurité', 'Pièce qui goutte en permanence sous le ballon d’eau chaude.'],
    ['Robinetterie et mitigeurs', 'Remplacement, reprise d’étanchéité, raccordement.']
  ],

  recherchesTitre: 'Les recherches qui mènent le plus souvent à nous dans le Morbihan',
  recherchesIntro: 'Ce sont les mots que l’on tape quand une installation lâche. Si l’un d’eux correspond à votre situation, appelez le 02 20 06 01 96 : on vous répond directement.',
  recherches: [
    'plombier Vannes',
    'plombier Lorient',
    'recherche de fuite Vannes',
    'fuite d’eau maison que faire',
    'ballon d’eau chaude en panne',
    'groupe de sécurité qui coule',
    'chauffe-eau qui fuit Lorient',
    'dépannage plomberie 56',
    'vanne d’arrêt bloquée',
    'plombier Auray',
    'plombier urgence Morbihan',
    'fuite après le compteur d’eau'
  ],

  telephoneTitre: 'Une fuite ou une panne de plomberie dans le Morbihan ?',
  telephoneTexte: 'Avant de chercher à couper l’eau ou à démonter, appelez-nous : on vous dit quoi faire tout de suite, et ce qu’il faut prévoir.',

  equipTitre: 'Le matériel qui évite de casser pour rien',
  equipIntro: 'Une fuite invisible se cherche avant de se réparer. Sur une dalle ou derrière une cloison, ouvrir au jugé coûte plus cher que l’intervention elle-même.',
  equipements: [
    ['equip-recherche-fuite', 'Détecteur de fuite', 'Pour situer une fuite non visible sans ouvrir un mur ou une dalle au hasard.'],
    ['equip-camion', 'Un camion équipé', 'Le matériel part avec le technicien, y compris pour les communes éloignées du littoral.'],
    ['equip-outillage', 'Outillage de plomberie', 'Pour réparer sur place : joint, raccord, vanne, robinetterie, alimentation.']
  ],

  whyTuiles: {
    materielTitre: 'On cherche avant d’ouvrir',
    materielTexte: 'Détecteur de fuite et outillage complet : une fuite invisible se situe avant de toucher à une cloison ou à une dalle.',
    metierTitre: 'Des techniciens expérimentés',
    metierTexte: 'Fuite, vanne d’arrêt, ballon d’eau chaude, robinetterie : des réparations faites tous les jours, sans improvisation.'
  },
  whyIntro: 'Ce sur quoi vous pouvez compter en appelant Plombier Breizh pour une fuite ou un dépannage de plomberie dans le Morbihan.',
  avis: avisParNoms('Sophie Le Gall', 'Kevin Le Roux', 'Marie Le Floch'),

  formTitre: 'Demander un dépannage de plomberie dans le Morbihan',
  formIntro: 'Indiquez votre commune et la panne rencontrée : nous vous rappelons pour organiser l’intervention.',
  ctaFinalTitre: 'Besoin d’un plombier dans le Morbihan ?',
  ctaFinalTexte: 'Fuite, ballon d’eau chaude, vanne d’arrêt ou robinetterie : appelez-nous, nous prenons le relais.'
});
