import { SITE, callBtn, formBtn, pageHero, urgencyBand, ctaBand, phoneBlock, processSection, whySection, reviewsSection, bretagneSection, formSection } from '../lib/layout.mjs';
import { servicePhoto } from '../lib/services.mjs';
import { avisDe } from '../lib/reviews.mjs';

export default {
  slug: 'degorgement',
  nav: 'degorgement',
  title: 'Dégorgement de canalisation en Bretagne | Plombier Breizh',
  description: 'Dégorgement de canalisation et d’évacuation en Bretagne. Matériel professionnel, intervention rapide : appelez Plombier Breizh au 02 20 06 01 96.',
  body: `
${pageHero({
    tag: 'Dégorgement',
    h1: 'Dégorgement de canalisation en Bretagne',
    sub: 'Quand l’eau stagne, refoule ou que plusieurs évacuations lâchent ensemble, c’est le réseau qu’il faut reprendre.',
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
        <h2>Déboucher ou dégorger : ce n’est pas la même intervention</h2>
        <p>Un seul point d’eau bouché, c’est un débouchage : le bouchon est proche, souvent dans le siphon
        ou juste après. Plusieurs évacuations lentes en même temps, c’est autre chose : l’obstruction se
        trouve en aval, sur la partie commune du réseau.</p>
        <p>Le dégorgement consiste à rétablir la circulation dans cette canalisation-là, qu’elle soit
        intérieure ou enterrée. Le diagnostic au téléphone permet déjà de savoir dans quel cas on se trouve.</p>
        <div class="btn-row mt-24">
          ${callBtn('section-degorgement', { text: 'Parler à un technicien' })}
          ${formBtn('section-degorgement', { variant: 'outline' })}
        </div>
      </div>
      <div class="split__media">
        ${servicePhoto('siphon-encrasse', 'Siphon d’évacuation entièrement encrassé par les graisses et les résidus')}
      </div>
    </div>

    <div class="grid grid--2 mt-32">
      <div>
        <h3>Les signes d’un réseau à dégorger</h3>
        <ul class="symptom-list">
          <li>Plusieurs évacuations lentes en même temps</li>
          <li>La douche ou la baignoire refoule</li>
          <li>De l’eau sale remonte</li>
          <li>Des odeurs persistantes malgré le nettoyage</li>
          <li>Des gargouillis quand on tire la chasse</li>
          <li>Plus rien ne s’évacue</li>
        </ul>
      </div>
      <div>
        <h3>Nos moyens d’intervention</h3>
        <ul class="symptom-list solution-list">
          <li>Débouchage mécanique</li>
          <li>Furet électrique professionnel</li>
          <li>Débouchage haute pression</li>
          <li>Caméra d’inspection</li>
          <li>Pompage en cas de refoulement</li>
        </ul>
      </div>
    </div>
  </div>
</section>

${ctaBand({ title: 'Un dégorgement à organiser ?', text: 'Décrivez ce qui se passe, nous prévoyons le matériel adapté.', location: 'cta-degorgement' })}

<section class="section section--dark">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Matériel</span>
      <h2>Le bon outil selon la canalisation</h2>
      <p class="lead">Une conduite ancienne ne se traite pas comme un réseau récent. On adapte, on ne force pas.</p>
    </div>
    <div class="equip">
      <figure class="equip__item">${servicePhoto('equip-haute-pression', 'Déboucheur haute pression')}<figcaption><h3>Haute pression</h3><p>Décolle les dépôts sur toute la paroi, pas seulement au centre.</p></figcaption></figure>
      <figure class="equip__item">${servicePhoto('equip-furet-electrique', 'Furet électrique professionnel')}<figcaption><h3>Furet électrique</h3><p>Perce les bouchons compacts installés en profondeur.</p></figcaption></figure>
      <figure class="equip__item">${servicePhoto('equip-pompe', 'Camion de pompage Plombier Breizh')}<figcaption><h3>Camion de pompage</h3><p>Vide le regard ou la fosse et évacue ce qui bloque le réseau.</p></figcaption></figure>
    </div>
    <div class="btn-row mt-32">
      ${callBtn('equip-degorgement', { text: `Appeler le ${SITE.phoneDisplay}` })}
      ${formBtn('equip-degorgement', { variant: 'outline-light' })}
    </div>
  </div>
</section>

${processSection('process-degorgement')}
${whySection('pourquoi-degorgement')}
${reviewsSection(avisDe('accueil'))}
${bretagneSection('bretagne-degorgement')}
${phoneBlock({ location: 'bloc-telephone-degorgement' })}
${formSection({ intro: 'Précisez les évacuations concernées : nous vous rappelons pour organiser le dégorgement.', location: 'formulaire-degorgement' })}
`
};
