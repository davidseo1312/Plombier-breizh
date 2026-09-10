import { SITE, callBtn, formBtn, pageHero, urgencyBand, ctaBand, phoneBlock, processSection, whySection, reviewsSection, bretagneSection, formSection } from '../lib/layout.mjs';
import { servicesGrid, servicePhoto, pick } from '../lib/services.mjs';

export default {
  slug: 'plomberie',
  nav: 'plomberie',
  title: 'Plombier en Bretagne — dépannage et fuite d’eau | Plombier Breizh',
  description: 'Dépannage plomberie, fuite d’eau et recherche de fuite en Bretagne. Plombier Breizh intervient rapidement — 02 20 06 01 96.',
  body: `
${pageHero({
    tag: 'Plomberie &amp; dépannage',
    h1: 'Votre plombier en Bretagne',
    sub: 'Une fuite, un robinet qui lâche, plus d’eau chaude ou une évacuation bloquée : on répare ce qui pose problème au quotidien.',
    img: 'depannage-plomberie',
    alt: 'Dépannage de plomberie par Plombier Breizh',
    location: 'hero-plomberie'
  })}

${urgencyBand('bandeau-plomberie')}

<section class="section">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Dépannage</span>
      <h2>Les pannes que nous traitons</h2>
      <p class="lead">Un problème de plomberie immobilise vite un logement : plus d’eau, une fuite qui s’étend,
      une évacuation bloquée. On rétablit la situation.</p>
    </div>
    ${servicesGrid(pick('Dépannage plomberie', 'Fuite d’eau', 'Recherche de fuite', 'Débouchage', 'WC bouché', 'Urgence plomberie'), 'services-plomberie')}
  </div>
</section>

${ctaBand({ title: 'Décrivez votre panne à un plombier', location: 'cta-plomberie' })}

<section class="section section--tint">
  <div class="container">
    <div class="split split--media-first">
      <div class="split__media">
        ${servicePhoto('fuite-eau', 'Intervention sur une fuite d’eau')}
      </div>
      <div>
        <span class="eyebrow">Fuite d’eau</span>
        <h2>Une fuite, même petite, coûte cher si on attend</h2>
        <p>L’eau abîme les matériaux en silence et la facture grimpe sans qu’on comprenne pourquoi.
        Dès que le doute existe, mieux vaut faire vérifier.</p>
        <ul class="symptom-list">
          <li>Une trace d’humidité ou une peinture qui cloque</li>
          <li>Une consommation d’eau anormalement élevée</li>
          <li>Un bruit d’écoulement alors que tout est fermé</li>
          <li>Un raccord ou un robinet qui suinte</li>
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
        <h2>Localiser avant de casser</h2>
        <p>Ouvrir un mur ou une dalle au jugé, c’est cher et rarement au bon endroit. Nous utilisons du
        matériel de recherche et une caméra d’inspection pour cibler la zone concernée, puis nous adaptons
        la réparation à ce qu’on trouve.</p>
        <ul class="symptom-list solution-list">
          <li>Contrôle des points d’eau et des évacuations</li>
          <li>Caméra d’inspection de canalisation</li>
          <li>Matériel de recherche de fuite</li>
          <li>Réparation adaptée à l’installation</li>
        </ul>
      </div>
      <div class="split__media">
        ${servicePhoto('recherche-fuite', 'Recherche de fuite avec caméra d’inspection')}
      </div>
    </div>
  </div>
</section>

${processSection('process-plomberie')}
${whySection('pourquoi-plomberie')}
${reviewsSection()}
${bretagneSection('bretagne-plomberie')}
${phoneBlock({ location: 'bloc-telephone-plomberie' })}
${formSection({ intro: 'Décrivez votre panne de plomberie : nous vous rappelons pour organiser l’intervention.', location: 'formulaire-plomberie' })}
`
};
