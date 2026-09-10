import { SITE, callBtn, formBtn, checklist, heroPhoto, urgencyBand, ctaBand, processSection, reviewsSection, zonesSection, formSection, tel } from '../lib/layout.mjs';
import { servicesGrid } from '../lib/services.mjs';

export default {
  slug: 'index',
  nav: 'accueil',
  title: 'Plombier & dégorgement d’urgence Finistère 29 et Morbihan 56 | Plombier Breizh',
  description: 'Canalisation bouchée, fuite ou panne de plomberie ? Plombier Breizh intervient rapidement dans le Finistère (29) et le Morbihan (56). Appelez le 02 20 06 01 96.',
  body: `
<section class="hero">
  <div class="container">
    <div class="hero__grid">
      <div>
        <span class="hero__tag">🚨 Urgence plomberie · 29 &amp; 56</span>
        <h1>Plombier &amp; <em>dégorgement d’urgence</em> dans le 29 et le 56</h1>
        <p class="hero__sub">Une canalisation bouchée, une fuite ou un problème de plomberie ?
        Contactez Plombier Breizh pour une intervention rapide.</p>
        <div class="hero__cta">
          ${callBtn('hero', { text: `Appeler le ${SITE.phoneDisplay}` })}
          ${formBtn('hero')}
        </div>
        <p class="hero__phone-note">Appel direct — un interlocuteur évalue votre besoin immédiatement.</p>
        ${checklist(undefined, true)}
      </div>
      <div class="hero__media">
        ${heroPhoto()}
        <span class="hero__badge">Finistère 29 · Morbihan 56</span>
      </div>
    </div>
  </div>
</section>

${urgencyBand('bandeau-urgence-accueil')}

<section class="section" id="services">
  <div class="container">
    <div class="section__head section__head--center">
      <span class="eyebrow">Nos prestations</span>
      <h2>Nos interventions de plomberie</h2>
      <p class="lead" style="margin-inline:auto">Débouchage, dégorgement, fuite, dépannage : nous traitons les problèmes
      de plomberie du quotidien comme les situations urgentes, dans le Finistère et le Morbihan.</p>
    </div>
    ${servicesGrid(undefined, 'services-accueil')}
    <div class="btn-row mt-32">
      ${callBtn('services-accueil-bas', { text: `Appeler le ${SITE.phoneDisplay}` })}
      ${formBtn('services-accueil-bas', { variant: 'outline' })}
    </div>
  </div>
</section>

${ctaBand({ title: 'Un problème de plomberie maintenant ?', location: 'cta-apres-services' })}

<section class="section" id="debouchage">
  <div class="container">
    <div class="split">
      <div>
        <span class="eyebrow">Débouchage &amp; dégorgement</span>
        <h2>Canalisation bouchée ? Nous intervenons rapidement.</h2>
        <p class="lead">Une évacuation qui ne fonctionne plus ne s’arrange pas seule : le bouchon se compacte,
        l’eau refoule et les odeurs remontent. Plus l’intervention est rapide, plus la remise en service est simple.</p>
        <p>Nos techniciens identifient l’origine de l’obstruction avant d’agir, puis choisissent la méthode
        adaptée à votre installation.</p>
        <div class="btn-row mt-24">
          ${callBtn('section-debouchage', { text: 'Appeler un plombier' })}
          ${formBtn('section-debouchage', { variant: 'outline' })}
        </div>
      </div>
      <div class="split__media">
        <img src="assets/img/debouchage-canalisation.svg" alt="Débouchage de canalisation par Plombier Breizh"
             width="960" height="720" loading="lazy" decoding="async">
      </div>
    </div>

    <div class="grid grid--2 mt-32">
      <div>
        <h3>Les signes d’une canalisation obstruée</h3>
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
        <h3>Nos méthodes d’intervention</h3>
        <ul class="symptom-list solution-list">
          <li>Débouchage mécanique</li>
          <li>Furet professionnel</li>
          <li>Débouchage haute pression</li>
          <li>Inspection de canalisation</li>
          <li>Équipements professionnels adaptés</li>
        </ul>
        <p class="mt-24"><a href="debouchage.html">Tout savoir sur le débouchage</a> · <a href="degorgement.html">Le dégorgement</a></p>
      </div>
    </div>
  </div>
</section>

<section class="section section--dark" id="equipements">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Matériel</span>
      <h2>Des équipements professionnels pour intervenir efficacement</h2>
      <p class="lead">Nous utilisons des équipements professionnels permettant de diagnostiquer rapidement la situation
      et d’adapter la méthode d’intervention.</p>
    </div>
    <div class="equip">
      <figure class="equip__item"><img src="assets/img/equip-pompe.svg" alt="Pompe professionnelle" width="960" height="960" loading="lazy" decoding="async"><figcaption><h3>Pompe professionnelle</h3><p>Évacuation des eaux lors des refoulements et débordements.</p></figcaption></figure>
      <figure class="equip__item"><img src="assets/img/equip-furet-electrique.svg" alt="Furet électrique" width="960" height="960" loading="lazy" decoding="async"><figcaption><h3>Furet électrique</h3><p>Destruction des bouchons compacts dans les canalisations.</p></figcaption></figure>
      <figure class="equip__item"><img src="assets/img/equip-haute-pression.svg" alt="Déboucheur haute pression" width="960" height="960" loading="lazy" decoding="async"><figcaption><h3>Déboucheur haute pression</h3><p>Nettoyage des parois et des dépôts sur les réseaux d’évacuation.</p></figcaption></figure>
      <figure class="equip__item"><img src="assets/img/equip-camera-inspection.svg" alt="Caméra d’inspection de canalisation" width="960" height="960" loading="lazy" decoding="async"><figcaption><h3>Caméra d’inspection</h3><p>Visualisation de l’intérieur de la canalisation pour localiser l’obstruction.</p></figcaption></figure>
      <figure class="equip__item"><img src="assets/img/equip-recherche-fuite.svg" alt="Matériel de recherche de fuite" width="960" height="960" loading="lazy" decoding="async"><figcaption><h3>Recherche de fuite</h3><p>Matériel dédié à la localisation des fuites non visibles.</p></figcaption></figure>
      <figure class="equip__item"><img src="assets/img/equip-outillage.svg" alt="Outillage professionnel de plomberie" width="960" height="960" loading="lazy" decoding="async"><figcaption><h3>Outillage de plomberie</h3><p>Matériel complet pour le dépannage et la réparation sur place.</p></figcaption></figure>
    </div>
    <div class="btn-row mt-32">
      ${callBtn('equipements', { text: `Appeler le ${SITE.phoneDisplay}` })}
      ${formBtn('equipements', { variant: 'outline-light' })}
    </div>
  </div>
</section>

${processSection('process-accueil')}
${ctaBand({ title: 'Parler à un plombier', text: 'Décrivez votre situation, nous vous indiquons l’intervention adaptée.', location: 'cta-apres-process' })}
${reviewsSection()}
${zonesSection('zones-accueil')}
${formSection()}
`
};
