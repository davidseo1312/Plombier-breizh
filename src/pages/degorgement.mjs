import { SITE, callBtn, formBtn, pageHero, urgencyBand, ctaBand, processSection, zonesSection, formSection, reviewsSection } from '../lib/layout.mjs';

export default {
  slug: 'degorgement',
  nav: 'degorgement',
  title: 'Dégorgement de canalisation Finistère 29 & Morbihan 56 | Plombier Breizh',
  description: 'Dégorgement de canalisation et d’évacuation dans le Finistère (29) et le Morbihan (56). Matériel professionnel, intervention rapide : 02 20 06 01 96.',
  body: `
${pageHero({
    tag: '💧 Dégorgement · 29 & 56',
    h1: 'Dégorgement de canalisation dans le 29 et le 56',
    sub: 'Réseau d’évacuation encombré, eau qui stagne ou qui refoule : nous dégorgeons vos canalisations avec du matériel professionnel.',
    img: 'degorgement',
    alt: 'Dégorgement de canalisation par Plombier Breizh',
    location: 'hero-degorgement'
  })}

${urgencyBand('bandeau-degorgement')}

<section class="section">
  <div class="container">
    <div class="split">
      <div>
        <span class="eyebrow">Dégorgement</span>
        <h2>Quand le réseau d’évacuation ne suit plus</h2>
        <p class="lead">Le dégorgement consiste à rétablir la circulation dans une canalisation encombrée
        par des dépôts accumulés sur les parois ou par un bouchon installé en profondeur.</p>
        <p>Il concerne aussi bien un réseau d’évacuation intérieur qu’une canalisation enterrée qui dessert
        plusieurs points d’eau. Lorsque plusieurs évacuations sont touchées en même temps, l’obstruction
        se situe généralement en aval, sur la partie commune du réseau.</p>
        <div class="btn-row mt-24">
          ${callBtn('section-degorgement', { text: 'Parler à un technicien' })}
          ${formBtn('section-degorgement', { variant: 'outline' })}
        </div>
      </div>
      <div class="split__media">
        <img src="assets/img/reseau-evacuation.svg" alt="Réseau d’évacuation à dégorger" width="960" height="720" loading="lazy" decoding="async">
      </div>
    </div>

    <div class="grid grid--2 mt-32">
      <div>
        <h3>Les signes d’un réseau à dégorger</h3>
        <ul class="symptom-list">
          <li>Plusieurs évacuations lentes en même temps</li>
          <li>Douche ou baignoire qui refoule</li>
          <li>Remontées d’eau sale</li>
          <li>Mauvaises odeurs persistantes</li>
          <li>Gargouillis dans les canalisations</li>
          <li>Canalisation complètement obstruée</li>
        </ul>
      </div>
      <div>
        <h3>Nos moyens d’intervention</h3>
        <ul class="symptom-list solution-list">
          <li>Débouchage mécanique</li>
          <li>Furet professionnel</li>
          <li>Débouchage haute pression</li>
          <li>Inspection de canalisation</li>
          <li>Pompage lors des refoulements</li>
        </ul>
      </div>
    </div>
  </div>
</section>

${ctaBand({ title: 'Un dégorgement à organiser ?', text: 'Décrivez la situation au téléphone, nous prévoyons le matériel adapté.', location: 'cta-degorgement' })}

<section class="section section--dark">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Matériel</span>
      <h2>Un équipement adapté à chaque type de canalisation</h2>
      <p class="lead">Nous utilisons des équipements professionnels permettant de diagnostiquer rapidement
      la situation et d’adapter la méthode d’intervention.</p>
    </div>
    <div class="equip">
      <figure class="equip__item"><img src="assets/img/equip-haute-pression.svg" alt="Déboucheur haute pression" width="960" height="960" loading="lazy" decoding="async"><figcaption><h3>Déboucheur haute pression</h3><p>Décollement des dépôts sur les parois de la canalisation.</p></figcaption></figure>
      <figure class="equip__item"><img src="assets/img/equip-furet-electrique.svg" alt="Furet électrique" width="960" height="960" loading="lazy" decoding="async"><figcaption><h3>Furet électrique</h3><p>Perforation des bouchons compacts en profondeur.</p></figcaption></figure>
      <figure class="equip__item"><img src="assets/img/equip-camera-inspection.svg" alt="Caméra d’inspection" width="960" height="960" loading="lazy" decoding="async"><figcaption><h3>Caméra d’inspection</h3><p>Contrôle visuel de l’intérieur du réseau avant et après intervention.</p></figcaption></figure>
    </div>
    <div class="btn-row mt-32">
      ${callBtn('equip-degorgement', { text: `Appeler le ${SITE.phoneDisplay}` })}
      ${formBtn('equip-degorgement', { variant: 'outline-light' })}
    </div>
  </div>
</section>

${processSection('process-degorgement')}
${reviewsSection()}
${zonesSection('zones-degorgement')}
${formSection('Précisez les évacuations concernées : nous vous rappelons pour organiser le dégorgement.')}
`
};
