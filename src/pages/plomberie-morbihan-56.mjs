import { landingPlomberie } from '../lib/lp-plomberie.mjs';
import { avisParNoms } from '../lib/reviews.mjs';

export default landingPlomberie({
  slug: 'plomberie-morbihan-56',
  dept: 'Morbihan', article: 'le', num: '56',
  cities: ['Vannes', 'Lorient', 'Lanester', 'Auray', 'Pontivy', 'Hennebont', 'Ploemeur', 'Questembert'],
  title: 'Plombier Morbihan (56) — fuite d’eau et dépannage | Plombier Breizh',
  description: 'Plombier dans le Morbihan : fuite d’eau, recherche de fuite, ballon d’eau chaude, robinetterie, sanitaires. Appelez Plombier Breizh au 02 20 06 01 96.',

  tag: 'Plomberie — Morbihan 56',
  h1: 'Plombier dans le Morbihan (56) — <em>fuite d’eau et dépannage</em>',
  sub: 'Fuite d’eau, chauffe-eau en panne, robinetterie ou sanitaires : décrivez votre problème par téléphone pour organiser l’intervention.',
  heroImg: 'chauffe-eau',
  heroAlt: 'Technicien Plombier Breizh intervenant sur un ballon d’eau chaude, dans le Morbihan',

  services: [
    ['fuite-eau', 'Fuite d’eau', 'Raccord, joint, flexible ou évacuation percée. On stoppe la fuite, puis on répare.'],
    ['urgence-plomberie', 'Robinetterie', 'Robinet ou mitigeur qui goutte, vanne d’arrêt grippée, raccord à refaire.'],
    ['wc-sanitaires', 'Sanitaires', 'Chasse d’eau, mécanisme, raccordement de broyeur : on reprend ce qui ne tient plus.'],
    ['recherche-fuite', 'Recherche de fuite', 'Tache d’humidité, facture qui grimpe : on localise avant d’ouvrir un mur ou une dalle.'],
    ['depannage-plomberie', 'Réparation plomberie', 'Alimentation en cuivre, PER ou multicouche : reprise et remise en service.'],
    ['chauffe-eau', 'Chauffe-eau', 'Plus d’eau chaude, groupe de sécurité qui goutte, ballon qui fuit.']
  ],

  materielIntro: 'Une fuite invisible se cherche avant de se réparer. Sur une dalle ou derrière une cloison, ouvrir au jugé coûte plus cher que l’intervention elle-même.',
  materiel: [
    ['equip-recherche-fuite', 'Détecteur de fuite', 'Pour situer une fuite non visible sans ouvrir un mur ou une dalle au hasard.'],
    ['equip-outillage', 'Outillage de plomberie', 'Pour réparer sur place : joint, raccord, vanne, robinetterie, alimentation.'],
    ['equip-camion-plombier', 'Un camion équipé', 'Le matériel part avec le technicien, y compris pour les communes éloignées du littoral.']
  ],

  avis: avisParNoms('Sophie Le Gall', 'Nicolas Le Gall'),

  etapes: [
    ['Étape 1', 'Vous appelez', 'Vous décrivez la panne au 02 20 06 01 96. Nous notons l’adresse, ce que vous constatez et le degré d’urgence.'],
    ['Étape 2', 'On prépare le matériel', 'Détecteur de fuite, outillage, pièces courantes : le camion part avec ce que votre description demande.'],
    ['Étape 3', 'Le technicien répare', 'Il constate sur place, répare ce qui peut l’être dans la foulée, et vous explique ce qui a causé la panne.']
  ],

  zoneTexte: 'Nous intervenons sur ces communes du Morbihan et leurs alentours.',

  faq: [
    ['Vous intervenez dans quels délais ?',
     'Cela dépend de votre commune et du planning du jour. Appelez-nous : nous vous disons tout de suite ce que nous pouvons organiser.'],
    ['Combien coûte une intervention ?',
     'Cela dépend de la panne et du temps passé. Nous en parlons au téléphone avant tout déplacement, pour que vous sachiez à quoi vous attendre.'],
    ['Comment trouvez-vous une fuite qu’on ne voit pas ?',
     'Au détecteur acoustique, et à la caméra quand l’accès est difficile. L’objectif est de localiser la fuite avant d’ouvrir quoi que ce soit.'],
    ['J’ouvre une maison restée fermée, que faut-il vérifier ?',
     'Les raccords, la vanne d’arrêt et le groupe de sécurité du ballon. C’est souvent là que la remise en eau révèle une fuite.'],
    ['Que faire en attendant votre arrivée ?',
     'Si vous le pouvez, fermez la vanne d’arrêt générale ou le robinet d’arrêt de l’appareil concerné, puis essuyez pour limiter les dégâts.']
  ],

  formIntro: 'Laissez votre numéro et votre commune : nous vous rappelons pour organiser l’intervention.',
  ctaFinalTexte: 'Fuite, ballon d’eau chaude, robinetterie ou sanitaires : un appel suffit pour lancer la prise en charge.'
});
