import { landingPage } from '../lib/lp.mjs';
import { pick } from '../lib/services.mjs';
import { avisParNoms } from '../lib/reviews.mjs';

export default landingPage({
  slug: 'plomberie-finistere-29',
  dept: 'Finistère', article: 'le', num: '29',
  cities: ['Brest', 'Quimper', 'Morlaix', 'Concarneau', 'Landerneau', 'Douarnenez', 'Quimperlé', 'Châteaulin'],
  title: 'Plombier Finistère (29) — dépannage et fuite d’eau | Plombier Breizh',
  description: 'Dépannage plomberie et recherche de fuite dans le Finistère : robinetterie, chauffe-eau, fuite, évacuation. Appelez Plombier Breizh au 02 20 06 01 96.',

  tag: 'Plomberie &amp; dépannage — Finistère 29',
  h1: 'Plombier dans le Finistère (29) — <em>dépannage et fuite d’eau</em>',
  sub: 'Un robinet qui lâche, plus d’eau chaude, une fuite qui s’étend ? Plombier Breizh intervient sur vos pannes de plomberie dans le Finistère.',
  heroImg: 'chauffe-eau', heroPhotoCamion: false,
  heroAlt: 'Technicien Plombier Breizh intervenant sur un chauffe-eau dans le Finistère',
  atouts: [
    'Intervention rapide',
    'Dépannage plomberie',
    'Recherche de fuite',
    'Équipements professionnels',
    'Intervention dans le Finistère'
  ],

  introTitle: 'Votre plombier dans le Finistère',
  introImg: 'cliente-attente',
  introAlt: 'Cliente attendant l’intervention devant son évier, dans le Finistère',
  introText: [
    'Une panne de plomberie n’attend jamais le bon moment. Un mitigeur qui goutte pendant des semaines finit par marquer la faïence, un ballon d’eau chaude qui lâche un samedi laisse toute la maison à l’eau froide, et une fuite sous évier repérée trop tard s’attaque au meuble avant qu’on s’en aperçoive.',
    'Le parc de logements du Finistère est varié : longères rénovées, appartements brestois, pavillons des années 80. Les installations n’ont rien à voir. Sur du cuivre ancien, on ne travaille pas comme sur du PER récent — et c’est justement ce qui fait la différence entre une réparation qui tient et une qui recommence.',
    'Décrivez-nous la panne au téléphone. On vous dit franchement si c’est un joint à changer, un raccord à reprendre, ou une fuite à localiser avant d’ouvrir quoi que ce soit.'
  ],
  situations: [
    'Robinet ou mitigeur qui goutte en continu',
    'Plus d’eau chaude, chauffe-eau en panne',
    'Fuite sous l’évier ou sous le lavabo',
    'Chasse d’eau qui fuit ou qui ne se remplit plus',
    'Trace d’humidité sur un mur sans origine visible',
    'Facture d’eau anormalement élevée'
  ],
  moyens: [
    'Recherche de fuite au détecteur acoustique',
    'Caméra d’inspection quand l’accès est difficile',
    'Remplacement de joint, raccord ou robinetterie',
    'Reprise d’alimentation et d’évacuation',
    'Réparation sur place, sans second passage inutile'
  ],

  servicesTitre: 'Nos interventions de plomberie dans le Finistère',
  servicesIntro: 'Du robinet qui goutte à la fuite qu’il faut d’abord localiser, voici ce que nous prenons en charge.',
  services: pick('Dépannage plomberie', 'Fuite d’eau', 'Recherche de fuite',
                 'WC bouché', 'Évier bouché', 'Urgence plomberie'),
  autres: [
    ['Robinetterie et mitigeurs', 'Remplacement, reprise d’étanchéité, raccordement.'],
    ['Chauffe-eau', 'Panne, groupe de sécurité, raccordement hydraulique.'],
    ['Chasse d’eau et sanitaires', 'Mécanisme, alimentation, joint de cuvette.'],
    ['Broyeur sanitaire', 'Raccordement et remise en service.']
  ],

  telephoneTitre: 'Une panne de plomberie dans le Finistère ?',
  telephoneTexte: 'Un appel suffit pour savoir ce qu’il faut prévoir, et organiser le passage.',

  equipTitre: 'Le matériel qui évite de casser pour rien',
  equipIntro: 'Sur une fuite, l’essentiel se joue avant l’intervention : trouver d’où elle vient. Ouvrir un mur au jugé coûte cher et tombe rarement juste.',
  equipements: [
    ['equip-recherche-fuite', 'Détecteur de fuite', 'Pour localiser une fuite non visible sans ouvrir un mur ou une dalle au hasard.'],
    ['equip-outillage', 'Outillage de plomberie', 'Pour réparer sur place : siphon, raccord, robinetterie, évacuation.'],
    ['equip-camion', 'Un camion équipé', 'Le matériel part avec le technicien, choisi d’après ce que vous décrivez au téléphone.']
  ],

  whyIntro: 'Ce sur quoi vous pouvez compter en appelant Plombier Breizh pour un dépannage de plomberie dans le Finistère.',
  avis: avisParNoms('Nicolas Le Gall', 'Camille Kerbrat', 'Thomas Le Goff'),

  formTitre: 'Demander un dépannage dans le Finistère',
  formIntro: 'Indiquez votre commune et la panne rencontrée : nous vous rappelons pour organiser l’intervention.',
  ctaFinalTitre: 'Besoin d’un plombier dans le Finistère ?',
  ctaFinalTexte: 'Fuite, robinetterie, chauffe-eau ou évacuation : appelez-nous, nous prenons le relais.'
});
