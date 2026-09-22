import { landingService } from '../lib/lp-service.mjs';
import { DEGORGEMENT } from '../lib/metiers.mjs';
import { avisParNoms } from '../lib/reviews.mjs';

export default landingService({
  metier: DEGORGEMENT,
  tarifs: DEGORGEMENT.tarifs,
  slug: 'degorgement-morbihan-56',
  dept: 'Morbihan', article: 'le', num: '56',
  cities: ['Vannes', 'Lorient', 'Lanester', 'Auray', 'Pontivy', 'Hennebont', 'Ploemeur', 'Questembert'],
  title: 'Dégorgement Morbihan (56) | Plombier Breizh',
  description: 'Débouchage et dégorgement de canalisation dans le Morbihan : furet, haute pression, pompage de regard et de fosse. Appelez Plombier Breizh au 02 20 06 01 96.',

  tag: 'Dégorgement &amp; débouchage — Morbihan 56',
  h1: 'Dégorgement de canalisation dans <em>le Morbihan (56)</em>',
  sub: 'Une évacuation bloquée, de l’eau qui remonte, un regard plein : décrivez ce que vous constatez par téléphone pour organiser l’intervention.',
  heroCamion: true,
  heroAlt: 'Camion et matériel de dégorgement Plombier Breizh, dans le Morbihan',

  ancrageTitre: 'Ce qu’on voit vraiment dans le Morbihan',
  ancrage: [
    ['Des réseaux qui ne servent pas toute l’année',
     'Un réseau laissé sans usage pendant des semaines s’assèche, les dépôts durcissent et la remise en service se passe mal. La haute pression reprend généralement la conduite en une intervention.'],
    ['Des fosses et des regards',
     'Hors agglomération, beaucoup de maisons ont leur propre assainissement. Quand le regard ne se vide plus, il faut pomper avant de déboucher, sinon on travaille dans l’eau.'],
    ['Le déboucheur chimique',
     'Il donne l’illusion que ça repart une journée, puis le bouchon revient plus compact. Et le produit, lui, reste dans la canalisation pour celui qui interviendra ensuite.']
  ],

  servicesTitre: 'Ce que nous débouchons dans le Morbihan',
  services: [
    ['debouchage-wc', 'WC bouché', 'Les WC ne s’évacuent plus. On rétablit l’écoulement sans rien casser.'],
    ['debouchage-evier', 'Évier bouché', 'Graisses et résidus : on démonte, on nettoie le siphon, on contrôle l’évacuation.'],
    ['debouchage-douche', 'Douche bouchée', 'Cheveux, savon, calcaire : on dégage la bonde et la conduite.'],
    ['debouchage-canalisation', 'Débouchage', 'Une évacuation qui ralentit finit par se boucher. On retire le bouchon avant le refoulement.'],
    ['canalisation-bouchee', 'Canalisation obstruée', 'Bouchon profond, dépôts, racines : on cherche d’abord où ça bloque.'],
    ['degorgement', 'Dégorgement de réseau', 'Plusieurs évacuations lâchent en même temps : le bouchon est en aval, on dégorge.']
  ],

  appelTitre: 'Ce qui se passe quand vous appelez',
  appelIntro: 'Deux minutes au téléphone suffisent à savoir dans quel cas vous êtes : un débouchage sur un point d’eau, ou un dégorgement du réseau. Vous n’engagez rien en appelant.',
  etapes: [
    ['Vous décrivez — 1 minute', 'Quelles évacuations sont touchées, depuis quand, si l’eau remonte. Pas besoin de vocabulaire technique.'],
    ['On identifie — 30 secondes', 'On vous dit si le bouchon est proche ou sur le réseau commun, et quel matériel il faut prévoir.'],
    ['On fixe le passage — 30 secondes', 'Vous validez, on convient du créneau. Sans votre accord, rien n’est lancé.']
  ],
  nonFaits: [
    'Aucun déplacement sans que vous ayez validé le passage.',
    'On cherche l’origine du bouchon avant de forcer quoi que ce soit.',
    'Vous savez ce qu’on va faire avant qu’on commence.'
  ],
  infographie: true,

  materielTitre: 'Le matériel du dégorgement',
  materielIntro: 'Entre un siphon encrassé et une fosse qui ne se vide plus, ce n’est ni le même outil ni la même intervention. On prépare le camion d’après ce que vous décrivez au téléphone.',
  materiel: [
    ['equip-haute-pression', 'Déboucheur haute pression', 'Pour reprendre un réseau resté longtemps sans usage, dont les dépôts ont durci.'],
    ['equip-pompe', 'Camion de pompage', 'Pour vider un regard ou une fosse avant d’intervenir sur la canalisation.'],
    ['equip-furet-electrique', 'Furet électrique', 'Pour percer les bouchons compacts installés en profondeur dans la conduite.']
  ],

  avis: avisParNoms('Kevin Le Roux', 'Pierre Le Guen', 'Julien Le Roux', 'Camille Kerbrat'),

  zoneTexte: 'Nous intervenons sur ces communes du Morbihan et leurs alentours.',

  faq: [
    ['Vous intervenez dans quels délais ?',
     'Nous sommes joignables 7j/7, 24h/24, soir et week-end compris. Le créneau dépend ensuite de votre commune et du planning : nous vous le disons dès l’appel.'],
    ['Combien coûte un débouchage ?',
     'Le déplacement et le diagnostic sur place sont à 45 € TTC. Ensuite, toute intervention démarre à 99 € TTC, qu’il s’agisse d’un point d’eau bouché ou d’un dégorgement de réseau. Le montant exact dépend de l’accès et de la méthode : il vous est annoncé avant que le travail commence.'],
    ['Les déboucheurs chimiques, ça marche ?',
     'Rarement durablement. Le produit ouvre parfois un passage pour une journée, puis le bouchon revient plus compact — et il reste dans la canalisation pour celui qui interviendra ensuite.'],
    ['Je rouvre une maison restée fermée, l’évacuation ne passe plus',
     'C’est fréquent sur le littoral : un réseau qui ne sert plus pendant des semaines s’assèche et les dépôts durcissent. La haute pression reprend généralement la conduite.'],
    ['Que faire en attendant votre arrivée ?',
     'N’utilisez plus les évacuations concernées et évitez de tirer la chasse, pour ne pas provoquer de débordement.']
  ],

  formIntro: 'Laissez votre numéro et votre commune : nous vous rappelons pour organiser l’intervention.',
  ctaFinalTexte: 'Canalisation bouchée, refoulement, regard ou fosse plein : un appel suffit pour lancer la prise en charge.'
});
