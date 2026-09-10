import {
  SITE, callBtn, formBtn, checklist, heroPhoto, urgencyBand, ctaBand,
  phoneBlock, processSection, whySection, reviewsSection, bretagneSection, formSection
} from '../lib/layout.mjs';
import { servicesGrid, servicePhoto } from '../lib/services.mjs';
import { avisDe } from '../lib/reviews.mjs';

export default {
  slug: 'index',
  nav: 'accueil',
  title: 'Plombier Breizh — plomberie, débouchage et dépannage en Bretagne',
  description: 'Une fuite, une canalisation bouchée ou un problème de plomberie en Bretagne ? Plombier Breizh assure dépannage, débouchage et dégorgement. Appelez le 02 20 06 01 96.',
  body: `
<section class="hero">
  <div class="container">
    <div class="hero__grid">
      <div>
        <span class="hero__tag">Plomberie • Débouchage • Dégorgement • Urgence</span>
        <h1>Plombier &amp; <em>dégorgement d’urgence</em> en Bretagne</h1>
        <p class="hero__sub">Une fuite, une canalisation bouchée ou un problème de plomberie ?
        Plombier Breizh vous accompagne pour vos besoins de dépannage, débouchage et dégorgement.</p>
        <div class="hero__cta">
          ${callBtn('hero', { text: `Appeler le ${SITE.phoneDisplay}` })}
          ${formBtn('hero')}
        </div>
        <p class="hero__note">Vous parlez directement à quelqu’un qui connaît le métier.</p>
        ${checklist(undefined, true)}
      </div>
      <div class="hero__media">
        ${heroPhoto()}
        <span class="hero__badge">Bretagne — Finistère 29 &amp; Morbihan 56</span>
      </div>
    </div>
  </div>
</section>

${urgencyBand('bandeau-urgence-accueil')}

<section class="section" id="services">
  <div class="container">
    <div class="section__head section__head--center">
      <span class="eyebrow">Nos interventions</span>
      <h2>Ce que nous faisons</h2>
      <p class="lead">Du robinet qui goutte à la canalisation complètement bouchée, nous traitons les problèmes
      de plomberie du quotidien comme les situations qui ne peuvent pas attendre.</p>
    </div>
    ${servicesGrid(undefined, 'services-accueil')}
    <div class="btn-row mt-32">
      ${callBtn('services-accueil-bas', { text: `Appeler le ${SITE.phoneDisplay}` })}
      ${formBtn('services-accueil-bas', { variant: 'outline' })}
    </div>
  </div>
</section>

${ctaBand({ title: 'Un problème de plomberie en ce moment ?', location: 'cta-apres-services' })}

<section class="section" id="debouchage">
  <div class="container">
    <div class="split">
      <div>
        <span class="eyebrow">Débouchage &amp; dégorgement</span>
        <h2>Une canalisation bouchée ne s’arrange jamais toute seule</h2>
        <p>Le bouchon se compacte, l’eau finit par refouler et les odeurs remontent. Plus on intervient tôt,
        plus la remise en service est simple — et moins il y a de dégâts à réparer derrière.</p>
        <p>Nous cherchons d’abord d’où vient l’obstruction, puis nous choisissons la méthode : furet,
        haute pression, ou inspection caméra quand la conduite n’est pas accessible.</p>
        <div class="btn-row mt-24">
          ${callBtn('section-debouchage', { text: 'Parler à un plombier' })}
          ${formBtn('section-debouchage', { variant: 'outline' })}
        </div>
      </div>
      <div class="split__media">
        ${servicePhoto('debouchage-canalisation', 'Débouchage de canalisation par Plombier Breizh')}
      </div>
    </div>

    <div class="grid grid--2 mt-32">
      <div>
        <h3>Ce que vous constatez</h3>
        <ul class="symptom-list">
          <li>L’eau ne s’écoule plus</li>
          <li>L’évier ou le lavabo met du temps à se vider</li>
          <li>Les WC remontent au lieu de s’évacuer</li>
          <li>La douche garde l’eau dans le bac</li>
          <li>Des odeurs reviennent régulièrement</li>
          <li>Plusieurs évacuations lâchent en même temps</li>
        </ul>
      </div>
      <div>
        <h3>Ce que nous faisons</h3>
        <ul class="symptom-list solution-list">
          <li>Débouchage mécanique</li>
          <li>Furet électrique professionnel</li>
          <li>Débouchage haute pression</li>
          <li>Inspection de canalisation à la caméra</li>
          <li>Dégorgement du réseau quand le bouchon est en aval</li>
        </ul>
        <p class="mt-24"><a href="debouchage.html">En savoir plus sur le débouchage</a> ·
        <a href="degorgement.html">Le dégorgement</a></p>
      </div>
    </div>
  </div>
</section>

<section class="section section--dark" id="equipements">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Matériel</span>
      <h2>Des équipements professionnels pour intervenir efficacement</h2>
      <p class="lead">On ne force pas au hasard : le bon outil dépend de ce qui bloque et de l’endroit
      où ça bloque. C’est pour cela que le camion part équipé.</p>
    </div>
    <div class="equip">
      <figure class="equip__item">${servicePhoto('equip-pompe', 'Camion de pompage Plombier Breizh')}<figcaption><h3>Camion de pompage</h3><p>Pour vider un regard ou une fosse et évacuer ce qui bloque le réseau.</p></figcaption></figure>
      <figure class="equip__item">${servicePhoto('equip-furet-electrique', 'Furet électrique professionnel')}<figcaption><h3>Furet électrique</h3><p>Pour percer les bouchons compacts installés en profondeur dans la conduite.</p></figcaption></figure>
      <figure class="equip__item">${servicePhoto('equip-haute-pression', 'Déboucheur haute pression')}<figcaption><h3>Déboucheur haute pression</h3><p>Pour décoller les dépôts accumulés sur les parois du réseau d’évacuation.</p></figcaption></figure>
      <figure class="equip__item">${servicePhoto('equip-recherche-fuite', 'Matériel de recherche de fuite')}<figcaption><h3>Recherche de fuite</h3><p>Pour localiser une fuite non visible avant d’ouvrir un mur ou une dalle.</p></figcaption></figure>
      <figure class="equip__item">${servicePhoto('equip-outillage', 'Outillage professionnel de plomberie')}<figcaption><h3>Outillage de plomberie</h3><p>Pour réparer sur place, sans repasser le lendemain.</p></figcaption></figure>
      <figure class="equip__item">${servicePhoto('equip-camion', 'Camion Plombier Breizh équipé pour l’intervention')}<figcaption><h3>Un camion équipé</h3><p>Le matériel adapté part avec le technicien, choisi d’après ce que vous décrivez au téléphone.</p></figcaption></figure>
    </div>
    <div class="btn-row mt-32">
      ${callBtn('equipements', { text: `Appeler le ${SITE.phoneDisplay}` })}
      ${formBtn('equipements', { variant: 'outline-light' })}
    </div>
  </div>
</section>

${processSection('process-accueil')}
${whySection('pourquoi-accueil')}
${reviewsSection(avisDe('accueil'))}
${bretagneSection('bretagne-accueil')}
${phoneBlock({ location: 'bloc-telephone-accueil' })}
${formSection({ location: 'formulaire-accueil' })}
`
};
