import { SITE, callBtn, formBtn, pageHero, urgencyBand, ctaBand, processSection, zonesSection, formSection, reviewsSection } from '../lib/layout.mjs';
import { SERVICES, servicesGrid } from '../lib/services.mjs';

const list = SERVICES.filter(s => ['Dépannage plomberie', 'Fuite d’eau', 'Recherche de fuite', 'Débouchage canalisation', 'Débouchage WC', 'Intervention plomberie urgente'].includes(s.title));

export default {
  slug: 'plomberie',
  nav: 'plomberie',
  title: 'Plombier Finistère 29 & Morbihan 56 — dépannage plomberie | Plombier Breizh',
  description: 'Dépannage plomberie, fuite d’eau, recherche de fuite dans le Finistère (29) et le Morbihan (56). Intervention rapide — appelez Plombier Breizh au 02 20 06 01 96.',
  body: `
${pageHero({
    tag: '🔧 Plomberie · 29 & 56',
    h1: 'Plombier dans le Finistère et le Morbihan',
    sub: 'Fuite, robinetterie, évacuation, panne d’eau : Plombier Breizh intervient sur vos problèmes de plomberie, en dépannage comme en urgence.',
    img: 'depannage-plomberie',
    alt: 'Dépannage de plomberie par Plombier Breizh',
    location: 'hero-plomberie'
  })}

${urgencyBand('bandeau-plomberie')}

<section class="section">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Dépannage</span>
      <h2>Les problèmes de plomberie que nous traitons</h2>
      <p class="lead">Un problème de plomberie immobilise vite un logement : plus d’eau, une fuite qui s’étend,
      une évacuation bloquée. Nous intervenons pour rétablir la situation.</p>
    </div>
    ${servicesGrid(list, 'services-plomberie')}
  </div>
</section>

${ctaBand({ title: 'Décrire votre problème à un plombier', location: 'cta-plomberie' })}

<section class="section section--tint">
  <div class="container">
    <div class="split split--media-first">
      <div class="split__media">
        <img src="assets/img/fuite-eau.svg" alt="Intervention sur une fuite d’eau" width="960" height="720" loading="lazy" decoding="async">
      </div>
      <div>
        <span class="eyebrow">Fuite d’eau</span>
        <h2>Fuite visible ou fuite cachée : agir vite limite les dégâts</h2>
        <p>Une fuite d’eau, même faible, dégrade les matériaux et fait grimper la consommation.
        Lorsque la fuite n’est pas visible, nous utilisons du matériel de recherche pour la localiser
        avant d’ouvrir quoi que ce soit.</p>
        <ul class="symptom-list">
          <li>Trace d’humidité ou peinture qui cloque</li>
          <li>Consommation d’eau anormalement élevée</li>
          <li>Bruit d’écoulement sans point d’eau ouvert</li>
          <li>Fuite au niveau d’un raccord ou d’un robinet</li>
        </ul>
        <div class="btn-row mt-24">
          ${callBtn('section-fuite', { text: 'Parler à un plombier' })}
          ${formBtn('section-fuite', { variant: 'outline' })}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div>
        <span class="eyebrow">Recherche de fuite</span>
        <h2>Localiser la fuite avant de réparer</h2>
        <p>Ouvrir un mur ou une dalle au hasard coûte cher. Nos techniciens disposent de matériel de
        recherche de fuite et d’une caméra d’inspection pour cibler la zone concernée et adapter la réparation.</p>
        <ul class="symptom-list solution-list">
          <li>Inspection des points d’eau et des évacuations</li>
          <li>Caméra d’inspection de canalisation</li>
          <li>Matériel de recherche de fuite</li>
          <li>Réparation adaptée à l’installation</li>
        </ul>
      </div>
      <div class="split__media">
        <img src="assets/img/recherche-fuite.svg" alt="Recherche de fuite par caméra d’inspection" width="960" height="720" loading="lazy" decoding="async">
      </div>
    </div>
  </div>
</section>

${processSection('process-plomberie')}
${reviewsSection()}
${zonesSection('zones-plomberie')}
${formSection('Décrivez votre panne de plomberie : nous vous rappelons pour organiser l’intervention.')}
`
};
