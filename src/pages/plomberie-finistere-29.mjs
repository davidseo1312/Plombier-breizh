import { landingService } from '../lib/lp-service.mjs';
import { PLOMBERIE } from '../lib/metiers.mjs';
import { avisParNoms } from '../lib/reviews.mjs';

export default landingService({
  metier: PLOMBERIE,
  tarifs: PLOMBERIE.tarifs,
  slug: 'plomberie-finistere-29',
  dept: 'Finistère', article: 'le', num: '29',
  cities: ['Brest', 'Quimper', 'Morlaix', 'Concarneau', 'Landerneau', 'Douarnenez', 'Quimperlé', 'Châteaulin'],
  title: 'Plombier Finistère (29) — fuite d’eau, déplacement 45 € | Plombier Breizh',
  description: 'Plombier à Brest, Quimper, Morlaix et dans le Finistère : fuite d’eau, chauffe-eau, robinetterie. Déplacement 45 € TTC, prix annoncé avant travaux. 02 20 06 01 96.',

  tag: 'Plomberie — Finistère 29',
  h1: 'Plombier dans le Finistère (29) — <em>fuite d’eau et dépannage</em>',
  subArguments: ['Déplacement 45 €', 'Prix annoncé avant travaux'],
  sub: 'Fuite d’eau, chauffe-eau en panne, robinetterie ou sanitaires : décrivez votre problème par téléphone pour organiser l’intervention.',
  heroImg: 'recherche-fuite',
  heroAlt: 'Technicien Plombier Breizh recherchant une fuite d’eau au détecteur, dans le Finistère',

  services: [
    ['fuite-eau', 'Fuite d’eau', 'Raccord, joint, flexible ou évacuation percée. On stoppe la fuite, puis on répare.'],
    ['wc-sanitaires', 'Sanitaires', 'Chasse d’eau, mécanisme, raccordement de broyeur : on reprend ce qui ne tient plus.'],
    ['chauffe-eau', 'Chauffe-eau', 'Plus d’eau chaude, groupe de sécurité qui goutte, ballon qui fuit.'],
    ['recherche-fuite', 'Recherche de fuite', 'Tache d’humidité, facture qui grimpe : on localise avant d’ouvrir un mur ou une dalle.'],
    ['urgence-plomberie', 'Robinetterie', 'Robinet ou mitigeur qui goutte, vanne d’arrêt grippée, raccord à refaire.'],
    ['depannage-plomberie', 'Réparation plomberie', 'Alimentation en cuivre, PER ou multicouche : reprise et remise en service.']
  ],

  materielIntro: 'Sur une fuite, tout se joue avant la réparation : il faut savoir d’où elle vient. Ouvrir au jugé coûte cher et tombe rarement juste.',
  materiel: [
    ['equip-recherche-fuite', 'Détecteur de fuite', 'Pour situer une fuite non visible sans ouvrir un mur ou une dalle au hasard.'],
    ['equip-outillage', 'Outillage de plomberie', 'Pour réparer sur place : joint, raccord, vanne, robinetterie, alimentation.'],
    ['equip-camion-plombier', 'Un camion équipé', 'Le matériel part avec le technicien, choisi d’après ce que vous décrivez au téléphone.']
  ],

  avis: avisParNoms('Nicolas Le Gall', 'plomberie-29-a', 'plomberie-29-b', 'plomberie-29-c'),

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

  zoneTexte: 'Nous intervenons sur ces communes du Finistère et leurs alentours.',

  faq: [
    ['Vous intervenez dans quels délais ?',
     'Nous sommes joignables 7j/7, 24h/24, soir et week-end compris. Le créneau dépend ensuite de votre commune et du planning : nous vous le disons dès l’appel.'],
    ['Combien coûte une intervention ?',
     'Les frais de déplacement sont de 45 € TTC, et l’intervention démarre à 89 € TTC. Le technicien constate la panne, puis vous annonce le montant avant de commencer. Un devis écrit vous est remis au-delà de 150 € TTC, et rien n’est engagé sans votre accord.'],
    ['Comment trouvez-vous une fuite qu’on ne voit pas ?',
     'Au détecteur acoustique, et à la caméra quand l’accès est difficile. L’objectif est de localiser la fuite avant d’ouvrir quoi que ce soit.'],
    ['Mon chauffe-eau ne chauffe plus, faut-il le remplacer ?',
     'Pas forcément. Résistance, thermostat, groupe de sécurité : nous regardons d’abord ce qui est en cause avant de parler de remplacement.'],
    ['Que faire en attendant votre arrivée ?',
     'Si vous le pouvez, fermez la vanne d’arrêt générale ou le robinet d’arrêt de l’appareil concerné, puis essuyez pour limiter les dégâts.']
  ],

  formIntro: 'Laissez votre numéro et votre commune : nous vous rappelons pour organiser l’intervention.',
  ctaFinalTexte: 'Fuite, chauffe-eau, robinetterie ou sanitaires : un appel suffit pour lancer la prise en charge.'
});
