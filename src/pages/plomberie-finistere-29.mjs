import { landingPage } from '../lib/lp.mjs';
import { pick } from '../lib/services.mjs';
import { avisParNoms } from '../lib/reviews.mjs';

export default landingPage({
  slug: 'plomberie-finistere-29',
  dept: 'Finistère', article: 'le', num: '29',
  cities: ['Brest', 'Quimper', 'Morlaix', 'Concarneau', 'Landerneau', 'Douarnenez', 'Quimperlé', 'Châteaulin'],
  title: 'Plombier Finistère (29) — fuite d’eau et dépannage | Plombier Breizh',
  description: 'Plombier dans le Finistère : fuite d’eau, recherche de fuite, chauffe-eau, robinetterie, chasse d’eau. Appelez Plombier Breizh au 02 20 06 01 96.',

  tag: 'Plomberie &amp; dépannage — Finistère 29',
  h1: 'Plombier dans le Finistère (29) — <em>fuite d’eau et dépannage</em>',
  sub: 'Un robinet qui lâche, plus d’eau chaude, une fuite qui s’étend ? Plombier Breizh répare vos installations de plomberie dans le Finistère.',
  heroImg: 'recherche-fuite', heroPhotoCamion: false,
  heroAlt: 'Technicien Plombier Breizh recherchant une fuite sur une canalisation, dans le Finistère',
  atouts: [
    'Fuite d’eau',
    'Recherche de fuite',
    'Chauffe-eau &amp; eau chaude',
    'Robinetterie &amp; sanitaires',
    'Réparation sur place'
  ],

  introTitle: 'Votre plombier dans le Finistère',
  introImg: 'cliente-attente',
  introAlt: 'Cliente attendant l’intervention d’un plombier, dans le Finistère',
  introText: [
    'Une panne de plomberie n’attend jamais le bon moment. Un mitigeur qui goutte pendant des semaines finit par marquer la faïence, un ballon d’eau chaude qui lâche un samedi laisse toute la maison à l’eau froide, et une fuite sous évier repérée trop tard s’attaque au meuble avant qu’on s’en aperçoive.',
    'Le parc de logements du Finistère est varié : longères rénovées, appartements brestois, pavillons des années 80. Les installations n’ont rien à voir. Sur du cuivre ancien, on ne travaille pas comme sur du PER récent — et c’est justement ce qui fait la différence entre une réparation qui tient et une qui recommence.',
    'Décrivez-nous la panne au téléphone. On vous dit franchement si c’est un joint à changer, un raccord à reprendre, ou une fuite à localiser avant d’ouvrir quoi que ce soit.'
  ],
  situationsTitre: 'Les pannes de plomberie qu’on nous signale le plus',
  situations: [
    'Robinet ou mitigeur qui goutte en continu',
    'Plus d’eau chaude, chauffe-eau en panne',
    'Fuite sous l’évier ou sous le lavabo',
    'Chasse d’eau qui fuit ou qui ne se remplit plus',
    'Trace d’humidité sur un mur sans origine visible',
    'Facture d’eau anormalement élevée'
  ],
  moyensTitre: 'Ce que nous réparons sur place',
  moyens: [
    'Localisation de la fuite au détecteur acoustique, avant d’ouvrir',
    'Remplacement de joint, de raccord ou de robinetterie',
    'Reprise d’une alimentation en cuivre, en PER ou en multicouche',
    'Intervention sur chauffe-eau : groupe de sécurité, raccordement',
    'Mécanisme de chasse d’eau et raccordement de sanitaires'
  ],

  servicesTitre: 'Nos interventions de plomberie dans le Finistère',
  servicesIntro: 'Fuite d’eau, recherche de fuite, chauffe-eau, robinetterie, sanitaires : ici, pas de débouchage — uniquement ce qui touche à l’installation elle-même.',
  services: pick('Dépannage plomberie', 'Chauffe-eau', 'Fuite d’eau',
                 'Recherche de fuite', 'Chasse d’eau et sanitaires', 'Urgence plomberie'),
  autresTitre: 'Également pris en charge dans le Finistère',
  autres: [
    ['Robinetterie et mitigeurs', 'Remplacement, reprise d’étanchéité, raccordement.'],
    ['Groupe de sécurité', 'Pièce qui goutte en permanence sous le ballon d’eau chaude.'],
    ['Vanne d’arrêt', 'Vanne grippée qui ne coupe plus l’eau correctement.'],
    ['Broyeur sanitaire', 'Raccordement, remise en service, reprise d’étanchéité.']
  ],

  recherchesTitre: 'Les recherches qui mènent le plus souvent à nous dans le Finistère',
  recherchesIntro: 'Ce sont les mots que l’on tape quand une installation lâche. Si l’un d’eux correspond à votre situation, appelez le 02 20 06 01 96 : on vous répond directement.',
  recherches: [
    'plombier Brest',
    'plombier Quimper',
    'recherche de fuite Brest',
    'fuite d’eau que faire',
    'plus d’eau chaude chauffe-eau',
    'chauffe-eau en panne Quimper',
    'fuite sous évier réparation',
    'dépannage plomberie 29',
    'chasse d’eau qui fuit en permanence',
    'robinet qui goutte réparation',
    'plombier urgence Finistère',
    'trace d’humidité mur fuite'
  ],

  telephoneTitre: 'Une fuite ou une panne de plomberie dans le Finistère ?',
  telephoneTexte: 'Une fuite qui coule depuis des jours fait plus de dégâts que la réparation elle-même. Un appel suffit pour savoir quoi prévoir.',

  equipTitre: 'Le matériel qui évite de casser pour rien',
  equipIntro: 'Sur une fuite, l’essentiel se joue avant l’intervention : trouver d’où elle vient. Ouvrir un mur au jugé coûte cher et tombe rarement juste.',
  equipements: [
    ['equip-recherche-fuite', 'Détecteur de fuite', 'Pour localiser une fuite non visible sans ouvrir un mur ou une dalle au hasard.'],
    ['equip-outillage', 'Outillage de plomberie', 'Pour réparer sur place : joint, raccord, robinetterie, siphon, alimentation.'],
    ['equip-camion', 'Un camion équipé', 'Le matériel part avec le technicien, choisi d’après ce que vous décrivez au téléphone.']
  ],

  whyTuiles: {
    materielTitre: 'On cherche avant d’ouvrir',
    materielTexte: 'Détecteur de fuite et outillage complet : on localise d’abord, on casse seulement si c’est vraiment nécessaire.',
    metierTitre: 'Des techniciens expérimentés',
    metierTexte: 'Fuite, robinetterie, chauffe-eau, sanitaires : des réparations faites tous les jours, sans improvisation.'
  },
  whyIntro: 'Ce sur quoi vous pouvez compter en appelant Plombier Breizh pour une fuite ou un dépannage de plomberie dans le Finistère.',
  avis: avisParNoms('Nicolas Le Gall', 'Camille Kerbrat', 'Thomas Le Goff'),

  formTitre: 'Demander un dépannage de plomberie dans le Finistère',
  formIntro: 'Indiquez votre commune et la panne rencontrée : nous vous rappelons pour organiser l’intervention.',
  ctaFinalTitre: 'Besoin d’un plombier dans le Finistère ?',
  ctaFinalTexte: 'Fuite, robinetterie, chauffe-eau ou chasse d’eau : appelez-nous, nous prenons le relais.'
});
