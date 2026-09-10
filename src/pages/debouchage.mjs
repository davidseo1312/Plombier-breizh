import { SITE, callBtn, formBtn, pageHero, urgencyBand, ctaBand, processSection, zonesSection, formSection, reviewsSection } from '../lib/layout.mjs';
import { SERVICES, servicesGrid } from '../lib/services.mjs';

const list = SERVICES.filter(s => ['Débouchage canalisation', 'Débouchage WC', 'Débouchage évier', 'Débouchage lavabo', 'Débouchage douche', 'Canalisation bouchée'].includes(s.title));

export default {
  slug: 'debouchage',
  nav: 'debouchage',
  title: 'Débouchage canalisation Finistère 29 & Morbihan 56 | Plombier Breizh',
  description: 'WC, évier, lavabo, douche ou canalisation bouchée dans le 29 et le 56 ? Débouchage professionnel par Plombier Breizh. Appelez le 02 20 06 01 96.',
  body: `
${pageHero({
    tag: '🚿 Débouchage · 29 & 56',
    h1: 'Débouchage de canalisation dans le 29 et le 56',
    sub: 'WC, évier, lavabo, douche ou canalisation principale : nous localisons le bouchon et rétablissons l’évacuation.',
    img: 'debouchage-canalisation',
    alt: 'Débouchage de canalisation par Plombier Breizh',
    location: 'hero-debouchage'
  })}

${urgencyBand('bandeau-debouchage')}

<section class="section">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Symptômes</span>
      <h2>Canalisation bouchée ? Nous intervenons rapidement.</h2>
      <p class="lead">Une évacuation qui ralentit annonce presque toujours un bouchon en formation.
      Traité tôt, il se retire simplement ; ignoré, il finit par bloquer complètement le réseau et provoquer un refoulement.</p>
    </div>
    <div class="grid grid--2">
      <div>
        <h3>Ce que vous constatez</h3>
        <ul class="symptom-list">
          <li>Eau qui ne s’écoule plus</li>
          <li>Évier bouché</li>
          <li>WC bouché</li>
          <li>Douche qui refoule</li>
          <li>Mauvaises odeurs</li>
          <li>Canalisation complètement obstruée</li>
          <li>Évacuation très lente</li>
        </ul>
      </div>
      <div>
        <h3>Ce que nous mettons en œuvre</h3>
        <ul class="symptom-list solution-list">
          <li>Débouchage mécanique</li>
          <li>Furet professionnel</li>
          <li>Débouchage haute pression</li>
          <li>Inspection de canalisation</li>
          <li>Équipements professionnels adaptés</li>
        </ul>
        <div class="btn-row mt-24">
          ${callBtn('symptomes-debouchage', { text: 'Appeler maintenant' })}
          ${formBtn('symptomes-debouchage', { variant: 'outline' })}
        </div>
      </div>
    </div>
  </div>
</section>

${ctaBand({ title: 'Une évacuation bloquée ne peut pas attendre', text: 'Appelez Plombier Breizh : nous évaluons la situation et organisons le débouchage.', location: 'cta-debouchage' })}

<section class="section">
  <div class="container">
    <div class="section__head section__head--center">
      <span class="eyebrow">Nos débouchages</span>
      <h2>Chaque point d’eau, une méthode adaptée</h2>
    </div>
    ${servicesGrid(list, 'services-debouchage')}
  </div>
</section>

<section class="section section--tint">
  <div class="container">
    <div class="split split--media-first">
      <div class="split__media">
        <img src="assets/img/inspection-canalisation.svg" alt="Inspection de canalisation par caméra" width="960" height="720" loading="lazy" decoding="async">
      </div>
      <div>
        <span class="eyebrow">Diagnostic</span>
        <h2>Identifier l’origine du bouchon avant d’intervenir</h2>
        <p>Graisses en cuisine, cheveux et savon en salle de bain, lingettes dans les WC, dépôts ou racines
        sur les réseaux enterrés : l’origine du bouchon détermine la méthode.</p>
        <p>Selon la situation, nous utilisons un furet électrique, un déboucheur haute pression, ou nous
        inspectons la canalisation à la caméra pour visualiser l’obstruction.</p>
        <div class="btn-row mt-24">
          ${callBtn('diagnostic-debouchage', { text: `Appeler le ${SITE.phoneDisplay}` })}
        </div>
      </div>
    </div>
  </div>
</section>

${processSection('process-debouchage')}
${reviewsSection()}
${zonesSection('zones-debouchage')}
${formSection('Indiquez le point d’eau concerné : nous vous rappelons pour organiser le débouchage.')}
`
};
