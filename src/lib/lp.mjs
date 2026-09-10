/* ==========================================================================
   Fabrique des LANDING PAGES GOOGLE ADS (/finistere-29 et /morbihan-56)
   Structure fixe et orientée conversion ; TOUS les textes propres au
   département sont fournis par la page appelante (aucun copier-coller).
   Header allégé : moins de distractions que sur le site principal.
   ========================================================================== */
import {
  SITE, callBtn, formBtn, pageHero, urgencyBand, phoneBlock,
  whySection, reviewsSection, formSection, tel
} from './layout.mjs';
import { servicesGrid, servicePhoto, pick } from './services.mjs';

const LP_SERVICES = (dept) => pick(
  'Débouchage', 'Dégorgement', 'WC bouché', 'Évier bouché', 'Douche bouchée',
  'Canalisation obstruée', 'Fuite d’eau', 'Dépannage plomberie', 'Urgence plomberie'
);

export const landingPage = ({
  slug, dept, article, num, cities,
  title, description,
  introTitle, introText,          // « Votre plombier dans le … »
  situations,                     // 5-6 situations concrètes, propres au département
  servicesIntro,
  equipIntro,
  whyIntro,
  formIntro
}) => ({
  slug,
  nav: '',
  minimalNav: true,
  title,
  description,
  body: `
${pageHero({
    tag: `Plomberie &amp; urgence — ${dept} ${num}`,
    h1: `Plombier &amp; <em>dégorgement d’urgence</em> dans ${article} ${dept} (${num})`,
    sub: `Une fuite, une canalisation bouchée ou un problème de plomberie ? Contactez Plombier Breizh pour votre intervention dans ${article} ${dept}.`,
    img: 'hero-plombier-intervention',
    alt: `Plombier Breizh en intervention dans ${article} ${dept}`,
    location: `hero-lp-${num}`,
    photo: true,
    badge: `${dept} — ${num}`,
    items: [
      'Intervention rapide',
      'Débouchage &amp; dégorgement',
      'Dépannage plomberie',
      'Équipements professionnels',
      `Intervention dans ${article} ${dept}`
    ]
  })}

${urgencyBand(`bandeau-lp-${num}`)}

<section class="section">
  <div class="container">
    <div class="split">
      <div>
        <span class="eyebrow">${dept} — ${num}</span>
        <h2>${introTitle}</h2>
        ${introText.map(p => `<p>${p}</p>`).join('\n        ')}
        <div class="btn-row mt-24">
          ${callBtn(`intro-lp-${num}`, { text: `Appeler le ${SITE.phoneDisplay}` })}
          ${formBtn(`intro-lp-${num}`, { variant: 'outline' })}
        </div>
      </div>
      <div class="split__media">
        ${servicePhoto('technicien-camion', `Technicien Plombier Breizh dans ${article} ${dept}`)}
      </div>
    </div>

    <div class="grid grid--2 mt-32">
      <div>
        <h3>Ce qui nous est demandé le plus souvent</h3>
        <ul class="symptom-list">
          ${situations.map(x => `<li>${x}</li>`).join('\n          ')}
        </ul>
      </div>
      <div>
        <h3>Ce que nous mettons en œuvre</h3>
        <ul class="symptom-list solution-list">
          <li>Débouchage mécanique</li>
          <li>Furet électrique professionnel</li>
          <li>Débouchage haute pression</li>
          <li>Caméra d’inspection de canalisation</li>
          <li>Matériel de recherche de fuite</li>
        </ul>
        <p class="mt-24">Un doute sur votre situation ? Appelez le
        ${tel(`lp-${num}-texte`, `<strong>${SITE.phoneDisplay}</strong>`)}, nous vous répondons directement.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--tint">
  <div class="container">
    <div class="section__head section__head--center">
      <span class="eyebrow">Nos interventions</span>
      <h2>Nos interventions dans ${article} ${dept}</h2>
      <p class="lead">${servicesIntro}</p>
    </div>
    ${servicesGrid(LP_SERVICES(dept), `services-lp-${num}`)}
    <div class="btn-row mt-32">
      ${callBtn(`services-lp-${num}`, { text: `Appeler le ${SITE.phoneDisplay}` })}
      ${formBtn(`services-lp-${num}`, { variant: 'primary' })}
    </div>
  </div>
</section>

${phoneBlock({
    title: 'Besoin d’une intervention rapidement ?',
    text: `Un appel suffit pour lancer la prise en charge de votre intervention dans ${article} ${dept}.`,
    location: `bloc-telephone-lp-${num}`
  })}

<section class="section section--dark">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Matériel</span>
      <h2>Des équipements professionnels</h2>
      <p class="lead">${equipIntro}</p>
    </div>
    <div class="equip">
      <figure class="equip__item">${servicePhoto('equip-furet-electrique', 'Furet électrique professionnel')}<figcaption><h3>Furet électrique</h3><p>Pour percer les bouchons compacts installés en profondeur.</p></figcaption></figure>
      <figure class="equip__item">${servicePhoto('equip-haute-pression', 'Déboucheur haute pression')}<figcaption><h3>Haute pression</h3><p>Pour décoller les dépôts accumulés sur les parois de la canalisation.</p></figcaption></figure>
      <figure class="equip__item">${servicePhoto('equip-camera-inspection', 'Caméra d’inspection de canalisation')}<figcaption><h3>Caméra d’inspection</h3><p>Pour voir l’intérieur de la conduite et localiser précisément l’obstruction.</p></figcaption></figure>
    </div>
    <div class="btn-row mt-32">
      ${callBtn(`equip-lp-${num}`, { text: 'Parler à un plombier' })}
      ${formBtn(`equip-lp-${num}`, { variant: 'outline-light' })}
    </div>
  </div>
</section>

${whySection(`pourquoi-lp-${num}`, whyIntro)}

${reviewsSection()}

${formSection({
    title: `Demander une intervention dans ${article} ${dept}`,
    intro: formIntro,
    location: `formulaire-lp-${num}`,
    tint: true
  })}

<section class="phone-block">
  <div class="container">
    <h2>Besoin d’un plombier dans ${article} ${dept} ?</h2>
    <p>Débouchage, dégorgement, fuite ou dépannage : appelez-nous, nous prenons le relais.</p>
    <div>
      <a class="phone-block__number" href="${SITE.phoneHref}" data-location="cta-final-lp-${num}" data-cta="numero-final">${SITE.phoneDisplay}</a>
    </div>
    <div class="btn-row">
      ${callBtn(`cta-final-lp-${num}`, { variant: 'dark', text: 'Appeler maintenant' })}
    </div>
    <p class="mt-24" style="font-size:15.5px">Communes couvertes notamment : ${cities.join(' · ')} — et alentours.</p>
  </div>
</section>
`
});
