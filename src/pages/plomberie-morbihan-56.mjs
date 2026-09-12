import { landingPage } from '../lib/lp.mjs';
import { pick } from '../lib/services.mjs';
import { avisParNoms } from '../lib/reviews.mjs';

export default landingPage({
  slug: 'plomberie-morbihan-56',
  dept: 'Morbihan', article: 'le', num: '56',
  cities: ['Vannes', 'Lorient', 'Lanester', 'Auray', 'Pontivy', 'Hennebont', 'Ploemeur', 'Questembert'],
  title: 'Plombier Morbihan (56) — dépannage et fuite d’eau | Plombier Breizh',
  description: 'Dépannage plomberie et recherche de fuite dans le Morbihan : robinetterie, chauffe-eau, fuite, évacuation. Appelez Plombier Breizh au 02 20 06 01 96.',

  tag: 'Plomberie &amp; dépannage — Morbihan 56',
  h1: 'Plombier dans le Morbihan (56) — <em>dépannage et fuite d’eau</em>',
  sub: 'Une fuite, un robinet qui lâche, plus d’eau chaude ? Plombier Breizh intervient sur vos pannes de plomberie dans le Morbihan.',
  heroPhotoCamion: true,
  heroAlt: 'Technicien Plombier Breizh devant son camion, prêt à intervenir dans le Morbihan',
  atouts: [
    'Intervention rapide',
    'Dépannage plomberie',
    'Recherche de fuite',
    'Équipements professionnels',
    'Intervention dans le Morbihan'
  ],

  introTitle: 'Votre plombier dans le Morbihan',
  introImg: 'chauffe-eau',
  introAlt: 'Intervention sur un chauffe-eau dans le Morbihan',
  introText: [
    'Sur le littoral morbihannais, beaucoup de logements ne sont occupés qu’une partie de l’année. On ouvre la maison, on remet l’eau, et la surprise arrive tout de suite : un raccord qui a travaillé pendant l’hiver, un groupe de sécurité entartré, un ballon qui ne chauffe plus.',
    'À l’intérieur des terres, ce sont plutôt les installations anciennes qui appellent. Des réseaux en cuivre repris plusieurs fois, des vannes d’arrêt qui ne ferment plus vraiment — et le jour où il faut couper l’eau en urgence, on s’en rend compte au pire moment.',
    'Dites-nous ce que vous constatez. Souvent, un simple échange au téléphone suffit à distinguer un joint à remplacer d’une fuite qu’il faut d’abord localiser.'
  ],
  situations: [
    'Maison rouverte après plusieurs semaines : fuite au remise en eau',
    'Plus d’eau chaude, groupe de sécurité qui goutte',
    'Vanne d’arrêt qui ne ferme plus correctement',
    'Fuite sur un raccord d’alimentation',
    'Robinet ou mitigeur à remplacer',
    'Humidité inexpliquée au sol ou sur une cloison'
  ],
  moyens: [
    'Recherche de fuite au détecteur acoustique',
    'Caméra d’inspection quand l’accès est difficile',
    'Remplacement de joint, raccord ou robinetterie',
    'Reprise d’alimentation et d’évacuation',
    'Réparation sur place, sans second passage inutile'
  ],

  servicesTitre: 'Nos interventions de plomberie dans le Morbihan',
  servicesIntro: 'Du dépannage courant à la fuite qu’il faut localiser avant de réparer, voici ce que nous prenons en charge.',
  services: pick('Dépannage plomberie', 'Fuite d’eau', 'Recherche de fuite',
                 'WC bouché', 'Évier bouché', 'Urgence plomberie'),
  autres: [
    ['Robinetterie et mitigeurs', 'Remplacement, reprise d’étanchéité, raccordement.'],
    ['Chauffe-eau', 'Panne, groupe de sécurité, raccordement hydraulique.'],
    ['Chasse d’eau et sanitaires', 'Mécanisme, alimentation, joint de cuvette.'],
    ['Broyeur sanitaire', 'Raccordement et remise en service.']
  ],

  telephoneTitre: 'Une panne de plomberie dans le Morbihan ?',
  telephoneTexte: 'Un appel suffit pour savoir ce qu’il faut prévoir, et organiser le passage.',

  equipTitre: 'Le matériel qui évite de casser pour rien',
  equipIntro: 'Sur une fuite, l’essentiel se joue avant l’intervention : trouver d’où elle vient. Ouvrir un mur au jugé coûte cher et tombe rarement juste.',
  equipements: [
    ['equip-recherche-fuite', 'Détecteur de fuite', 'Pour localiser une fuite non visible sans ouvrir un mur ou une dalle au hasard.'],
    ['equip-outillage', 'Outillage de plomberie', 'Pour réparer sur place : siphon, raccord, robinetterie, évacuation.'],
    ['equip-camion', 'Un camion équipé', 'Le matériel part avec le technicien, choisi d’après ce que vous décrivez au téléphone.']
  ],

  whyIntro: 'Ce sur quoi vous pouvez compter en appelant Plombier Breizh pour un dépannage de plomberie dans le Morbihan.',
  avis: avisParNoms('Sophie Le Gall', 'Kevin Le Roux', 'Marie Le Floch'),

  formTitre: 'Demander un dépannage dans le Morbihan',
  formIntro: 'Indiquez votre commune et la panne rencontrée : nous vous rappelons pour organiser l’intervention.',
  ctaFinalTitre: 'Besoin d’un plombier dans le Morbihan ?',
  ctaFinalTexte: 'Fuite, robinetterie, chauffe-eau ou évacuation : appelez-nous, nous prenons le relais.'
});
