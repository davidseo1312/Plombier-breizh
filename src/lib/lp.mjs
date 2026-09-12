/* ==========================================================================
   Fabrique des LANDING PAGES GOOGLE ADS
   --------------------------------------------------------------------------
   Deux dimensions : le département (29 / 56) et, éventuellement, un service
   unique (plomberie ou dégorgement). Chaque page fournit ses propres textes :
   la structure est partagée, jamais le contenu.

   Header allégé, aucun menu : sur une page d'annonce, chaque lien sortant est
   une occasion de perdre l'appel.
   ========================================================================== */
import {
  SITE, callBtn, formBtn, pageHero, urgencyBand, phoneBlock,
  whySection, reviewsSection, formSection, tel
} from './layout.mjs';
import { servicesGrid, servicePhoto, pick } from './services.mjs';
import { avisDe } from './reviews.mjs';

/* Valeurs par défaut : celles des landing pages « tous services » 29 et 56. */
const SERVICES_DEFAUT = pick('Débouchage', 'WC bouché', 'Évier bouché',
  'Douche bouchée', 'Recherche de fuite', 'Dépannage plomberie');

const AUTRES_DEFAUT = [
  ['Dégorgement de réseau', 'Plusieurs évacuations bloquées en même temps.'],
  ['Canalisation obstruée', 'Bouchon profond, dépôts ou racines sur une conduite enterrée.'],
  ['Fuite d’eau', 'Raccord, joint ou évacuation percée.'],
  ['Urgence plomberie', 'Débordement, refoulement, fuite qui ne s’arrête pas.']
];

const MOYENS_DEFAUT = [
  'Débouchage mécanique',
  'Furet électrique professionnel',
  'Débouchage haute pression',
  'Caméra d’inspection de canalisation',
  'Matériel de recherche de fuite'
];

const EQUIPEMENTS_DEFAUT = [
  ['equip-furet-electrique', 'Furet électrique', 'Pour percer les bouchons compacts installés en profondeur dans la conduite.'],
  ['equip-haute-pression', 'Déboucheur haute pression', 'Pour décoller les dépôts accumulés sur les parois du réseau d’évacuation.'],
  ['equip-outillage', 'Outillage de plomberie', 'Pour réparer sur place : siphon, raccord, robinetterie, évacuation.']
];

export const landingPage = ({
  /* -- département -- */
  slug, dept, article, num, cities,
  title, description,
  /* -- hero -- */
  tag, h1, sub, heroImg = 'hero-plombier-intervention', heroPhotoCamion = true, heroAlt, atouts,
  /* -- corps -- */
  introTitle, introText, introImg = 'degorgement', introAlt,
  situations, situationsTitre = 'Ce qui nous est demandé le plus souvent',
  moyens = MOYENS_DEFAUT, moyensTitre = 'Ce que nous mettons en œuvre',
  infographie = false,
  servicesTitre, servicesIntro, services = SERVICES_DEFAUT,
  autres = AUTRES_DEFAUT, autresTitre,
  recherches = [], recherchesTitre, recherchesIntro,
  telephoneTitre = 'Besoin d’une intervention rapidement ?',
  telephoneTexte,
  equipTitre = 'Des équipements professionnels', equipIntro, equipements = EQUIPEMENTS_DEFAUT,
  whyIntro, whyTuiles = {},
  avis,
  formTitre, formIntro,
  ctaFinalTitre, ctaFinalTexte
}) => ({
  slug,
  nav: '',
  minimalNav: true,
  title,
  description,
  body: `
${pageHero({
    tag: tag || `Plomberie &amp; urgence — ${dept} ${num}`,
    h1: h1 || `Plombier &amp; <em>dégorgement d’urgence</em> dans ${article} ${dept} (${num})`,
    sub: sub || `Une fuite, une canalisation bouchée ou un problème de plomberie ? Contactez Plombier Breizh pour votre intervention dans ${article} ${dept}.`,
    img: heroImg,
    alt: heroAlt || `Plombier Breizh en intervention dans ${article} ${dept}`,
    location: `hero-lp-${slug}`,
    photo: heroPhotoCamion,
    badge: `${dept} — ${num}`,
    items: atouts || [
      'Intervention rapide',
      'Débouchage &amp; dégorgement',
      'Dépannage plomberie',
      'Équipements professionnels',
      `Intervention dans ${article} ${dept}`
    ]
  })}

${urgencyBand(`bandeau-lp-${slug}`)}

<section class="section">
  <div class="container">
    <div class="split">
      <div>
        <span class="eyebrow">${dept} — ${num}</span>
        <h2>${introTitle}</h2>
        ${introText.map(p => `<p>${p}</p>`).join('\n        ')}
        <div class="btn-row mt-24">
          ${callBtn(`intro-lp-${slug}`, { text: `Appeler le ${SITE.phoneDisplay}` })}
          ${formBtn(`intro-lp-${slug}`, { variant: 'outline' })}
        </div>
      </div>
      <div class="split__media">
        ${servicePhoto(introImg, introAlt || `Plombier Breizh en intervention dans ${article} ${dept}`)}
      </div>
    </div>

    <div class="grid grid--2 mt-32">
      <div>
        <h3>${situationsTitre}</h3>
        <ul class="symptom-list">
          ${situations.map(x => `<li>${x}</li>`).join('\n          ')}
        </ul>
      </div>
      <div>
        <h3>${moyensTitre}</h3>
        <ul class="symptom-list solution-list">
          ${moyens.map(x => `<li>${x}</li>`).join('\n          ')}
        </ul>
        <p class="mt-24">Un doute sur votre situation ? Appelez le
        ${tel(`lp-${slug}-texte`, `<strong>${SITE.phoneDisplay}</strong>`)}, nous vous répondons directement.</p>
      </div>
    </div>
${infographie ? `
    <figure class="figure-wide mt-32">
      <img src="/assets/img/infographie-origine-bouchon.jpg"
           alt="Origine du bouchon et outil adapté : graisses, cheveux et savon, lingettes, racines"
           width="1020" height="776" loading="lazy" decoding="async">
      <figcaption>Graisses de cuisine, cheveux et savon, lingettes, racines : l’origine du bouchon
      détermine l’outil à utiliser. C’est ce que nous cherchons à établir dès votre appel.</figcaption>
    </figure>` : ''}
  </div>
</section>

<section class="section section--tint">
  <div class="container">
    <div class="section__head section__head--center">
      <span class="eyebrow">Nos interventions</span>
      <h2>${servicesTitre || `Nos interventions dans ${article} ${dept}`}</h2>
      <p class="lead">${servicesIntro}</p>
    </div>
    ${servicesGrid(services, `services-lp-${slug}`)}
${autres.length ? `
    <div class="tile mt-32">
      <h3>${autresTitre || `Également pris en charge dans ${article} ${dept}`}</h3>
      <div class="grid grid--2" style="gap:14px 26px;margin-top:16px">
        ${autres.map(([t, d]) => `<div><strong>${t}</strong><br><span style="color:var(--ink-soft);font-size:15.5px">${d}</span></div>`).join('\n        ')}
      </div>
    </div>` : ''}

    <div class="btn-row mt-32">
      ${callBtn(`services-lp-${slug}`, { text: `Appeler le ${SITE.phoneDisplay}` })}
      ${formBtn(`services-lp-${slug}`, { variant: 'primary' })}
    </div>
  </div>
</section>

${recherches.length ? `
<section class="section" aria-labelledby="recherches-${slug}">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Recherches fréquentes</span>
      <h2 id="recherches-${slug}">${recherchesTitre || `Ce que l’on cherche avant de nous appeler dans ${article} ${dept}`}</h2>
      <p class="lead">${recherchesIntro || `Si vous êtes arrivé ici après l’une de ces recherches, vous êtes au bon endroit : appelez le ${SITE.phoneDisplay}, nous vous répondons directement.`}</p>
    </div>
    <ul class="kw">
      ${recherches.map(m => `<li class="kw__item">${m}</li>`).join('\n      ')}
    </ul>
    <div class="btn-row mt-32">
      ${callBtn(`recherches-lp-${slug}`, { text: `Appeler le ${SITE.phoneDisplay}` })}
      ${formBtn(`recherches-lp-${slug}`, { variant: 'outline' })}
    </div>
  </div>
</section>` : ''}

${phoneBlock({
    title: telephoneTitre,
    text: telephoneTexte || `Un appel suffit pour lancer la prise en charge de votre intervention dans ${article} ${dept}.`,
    location: `bloc-telephone-lp-${slug}`
  })}

<section class="section section--dark">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Matériel</span>
      <h2>${equipTitre}</h2>
      <p class="lead">${equipIntro}</p>
    </div>
    <div class="equip">
      ${equipements.map(([img, titre, texte]) =>
        `<figure class="equip__item">${servicePhoto(img, titre)}<figcaption><h3>${titre}</h3><p>${texte}</p></figcaption></figure>`
      ).join('\n      ')}
    </div>
    <div class="btn-row mt-32">
      ${callBtn(`equip-lp-${slug}`, { text: 'Parler à un plombier' })}
      ${formBtn(`equip-lp-${slug}`, { variant: 'outline-light' })}
    </div>
  </div>
</section>

${whySection(`pourquoi-lp-${slug}`, whyIntro, whyTuiles)}

${reviewsSection(avis || avisDe(`lp${num}`))}

${formSection({
    title: formTitre || `Demander une intervention dans ${article} ${dept}`,
    intro: formIntro,
    location: `formulaire-lp-${slug}`,
    tint: true
  })}

<section class="phone-block">
  <div class="container">
    <h2>${ctaFinalTitre || `Besoin d’un plombier dans ${article} ${dept} ?`}</h2>
    <p>${ctaFinalTexte || 'Débouchage, dégorgement, fuite ou dépannage : appelez-nous, nous prenons le relais.'}</p>
    <div>
      <a class="phone-block__number" href="${SITE.phoneHref}" data-location="cta-final-lp-${slug}" data-cta="numero-final">${SITE.phoneDisplay}</a>
    </div>
    <div class="btn-row">
      ${callBtn(`cta-final-lp-${slug}`, { variant: 'dark', text: 'Appeler maintenant' })}
    </div>
    <p class="mt-24" style="font-size:15.5px">Communes couvertes notamment : ${cities.join(' · ')} — et alentours.</p>
  </div>
</section>
`
});
