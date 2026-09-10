import { SITE, callBtn, urgencyBand, formSection, zonesSection, tel } from '../lib/layout.mjs';

export default {
  slug: 'contact',
  nav: '',
  title: 'Contact — Plombier Breizh | 02 20 06 01 96',
  description: 'Contactez Plombier Breizh pour une intervention de plomberie, un débouchage ou un dégorgement dans le Finistère (29) et le Morbihan (56).',
  body: `
<section class="section section--dark">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Contact</span>
      <h1>Contacter Plombier Breizh</h1>
      <p class="lead">Plomberie, débouchage, dégorgement et interventions urgentes dans le Finistère (29)
      et le Morbihan (56). Pour une urgence, l’appel reste le moyen le plus rapide.</p>
    </div>
    <div class="grid grid--3">
      <div class="tile tile--dark">
        <h3 style="color:#fff">Téléphone</h3>
        <p><a href="${SITE.phoneHref}" data-location="contact-page" data-cta="appel-contact" style="color:#00AEEF;font-size:24px;font-weight:800">${SITE.phoneDisplay}</a></p>
      </div>
      <div class="tile tile--dark">
        <h3 style="color:#fff">Email</h3>
        <p><a href="mailto:${SITE.email}" style="color:#00AEEF">${SITE.email}</a></p>
      </div>
      <div class="tile tile--dark">
        <h3 style="color:#fff">Zone d’intervention</h3>
        <p>Finistère (29) et Morbihan (56)</p>
      </div>
    </div>
    <div class="btn-row mt-32">${callBtn('contact-page-bas', { text: `Appeler le ${SITE.phoneDisplay}` })}</div>
  </div>
</section>

${urgencyBand('bandeau-contact')}
${formSection('Remplissez ce formulaire court : nous vous rappelons pour organiser l’intervention.')}
${zonesSection('zones-contact')}
`
};
