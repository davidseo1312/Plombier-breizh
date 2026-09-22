import { landingService } from '../lib/lp-service.mjs';
import { PLOMBERIE } from '../lib/metiers.mjs';
import { avisParNoms } from '../lib/reviews.mjs';

export default landingService({
  metier: PLOMBERIE,
  tarifs: PLOMBERIE.tarifs,
  slug: 'plomberie-morbihan-56',
  dept: 'Morbihan', article: 'le', num: '56',
  cities: ['Vannes', 'Lorient', 'Lanester', 'Auray', 'Pontivy', 'Hennebont', 'Ploemeur', 'Questembert'],
  title: 'Plombier Morbihan (56) — fuite d’eau | Plombier Breizh',
  description: 'Plombier dans le Morbihan : fuite d’eau, recherche de fuite, ballon d’eau chaude, robinetterie, sanitaires. Appelez Plombier Breizh au 02 20 06 01 96.',

  tag: 'Plomberie — Morbihan 56',
  h1: 'Plombier dans le Morbihan (56) — <em>fuite d’eau et dépannage</em>',
  sub: 'Fuite d’eau, chauffe-eau en panne, robinetterie ou sanitaires : décrivez votre problème par téléphone pour organiser l’intervention.',
  heroImg: 'chauffe-eau',
  heroAlt: 'Technicien Plombier Breizh intervenant sur un ballon d’eau chaude, dans le Morbihan',

  ancrageTitre: 'Ce qu’on voit vraiment dans le Morbihan',
  ancrage: [
    ['Des maisons qu’on rouvre',
     'Sur le littoral, beaucoup de logements ne servent qu’une partie de l’année. La remise en eau révèle d’un coup le raccord qui a travaillé pendant l’hiver — c’est notre motif d’appel le plus fréquent au printemps.'],
    ['Des vannes qu’on n’a pas touchées depuis dix ans',
     'À l’intérieur des terres, les vannes d’arrêt ne ferment plus vraiment. On s’en aperçoit le jour où il faut couper l’eau en urgence, au pire moment.'],
    ['Des ballons entartrés',
     'Groupe de sécurité qui goutte en permanence, résistance couverte de calcaire : sur l’eau du secteur, un chauffe-eau se fatigue vite. Souvent réparable, pas toujours à remplacer.']
  ],

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

  avis: avisParNoms('Sophie Le Gall'),

  etapes: [
    ['Vous décrivez — 1 minute', 'Ce que vous voyez, ce que vous entendez, depuis quand. Pas besoin de vocabulaire technique.'],
    ['On identifie — 30 secondes', 'On vous dit de quoi il s’agit, si c’est réparable sur place, et ce qu’il faut prévoir.'],
    ['On fixe le passage — 30 secondes', 'Vous validez, on convient du créneau. Sans votre accord, rien n’est lancé.']
  ],

  nonFaits: [
    'Aucun déplacement sans que vous ayez validé le passage.',
    'On localise avant d’ouvrir : jamais un mur ni une dalle « pour voir ».',
    'Vous savez ce qu’on va faire avant qu’on commence.'
  ],

  zoneTexte: 'Nous intervenons sur ces communes du Morbihan et leurs alentours.',

  faq: [
    ['Vous intervenez dans quels délais ?',
     'Nous sommes joignables 7j/7, 24h/24, soir et week-end compris. Le créneau dépend ensuite de votre commune et du planning : nous vous le disons dès l’appel.'],
    ['Combien coûte une intervention ?',
     'Le déplacement et le diagnostic sur place sont à 45 € TTC. Ensuite, toute intervention démarre à 99 € TTC, du dépannage courant à l’intervention technique. Le montant exact dépend de la panne et du temps passé : il vous est annoncé avant que le travail commence.'],
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
