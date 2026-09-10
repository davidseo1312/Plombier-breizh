import { SITE, callBtn, formBtn, pageHero, urgencyBand, ctaBand, processSection, zonesSection, formSection, tel } from '../lib/layout.mjs';

export default {
  slug: 'urgence-plomberie',
  nav: 'urgence',
  title: 'Urgence plomberie 29 & 56 — plombier en urgence | Plombier Breizh',
  description: 'Fuite active, WC bouché, refoulement, canalisation obstruée dans le Finistère (29) ou le Morbihan (56) ? Appelez Plombier Breizh au 02 20 06 01 96.',
  body: `
${pageHero({
    tag: '🚨 Urgence plomberie · 29 & 56',
    h1: 'Urgence plomberie dans le Finistère et le Morbihan',
    sub: 'Fuite active, refoulement, canalisation totalement bouchée : appelez Plombier Breizh, nous organisons une intervention au plus vite.',
    img: 'urgence-plomberie',
    alt: 'Intervention de plomberie en urgence',
    location: 'hero-urgence'
  })}

${urgencyBand('bandeau-urgence-page')}

<section class="section">
  <div class="container">
    <div class="section__head section__head--center">
      <span class="eyebrow">Situations d’urgence</span>
      <h2>Dans ces situations, appelez immédiatement</h2>
      <p class="lead" style="margin-inline:auto">Certaines pannes de plomberie s’aggravent de minute en minute.
      L’appel reste le moyen le plus rapide de nous joindre : ${tel('urgence-texte', '', `<strong>${SITE.phoneDisplay}</strong>`)}.</p>
    </div>
    <div class="grid grid--3">
      <div class="tile"><h3>Fuite d’eau active</h3><p>De l’eau s’écoule en continu et vous ne parvenez pas à l’arrêter au robinet d’arrêt.</p></div>
      <div class="tile"><h3>Refoulement d’eaux usées</h3><p>L’eau remonte par une douche, un évier ou des WC : le réseau d’évacuation est bloqué en aval.</p></div>
      <div class="tile"><h3>WC bouché</h3><p>Les WC ne s’évacuent plus, avec un risque de débordement à la prochaine chasse.</p></div>
      <div class="tile"><h3>Canalisation totalement obstruée</h3><p>Plus aucune évacuation ne fonctionne dans le logement.</p></div>
      <div class="tile"><h3>Dégât des eaux en cours</h3><p>Sol, plafond ou cloison qui prennent l’eau à cause d’une fuite.</p></div>
      <div class="tile"><h3>Plus d’arrivée d’eau</h3><p>Coupure ou panne sur l’alimentation en eau du logement.</p></div>
    </div>
    <div class="btn-row mt-32">
      ${callBtn('urgence-situations', { text: `Appeler le ${SITE.phoneDisplay}` })}
      ${formBtn('urgence-situations', { variant: 'outline' })}
    </div>
  </div>
</section>

${ctaBand({ title: 'Une urgence en cours ?', text: 'N’attendez pas que la situation s’aggrave : un appel suffit pour lancer la prise en charge.', location: 'cta-urgence' })}

<section class="section section--tint">
  <div class="container">
    <div class="split split--media-first">
      <div class="split__media">
        <img src="assets/img/technicien-camion.svg" alt="Technicien Plombier Breizh en déplacement" width="960" height="720" loading="lazy" decoding="async">
      </div>
      <div>
        <span class="eyebrow">En attendant notre arrivée</span>
        <h2>Les bons réflexes avant l’intervention</h2>
        <ul class="symptom-list solution-list">
          <li>Fermez le robinet d’arrêt général en cas de fuite</li>
          <li>N’utilisez plus les points d’eau reliés à l’évacuation bloquée</li>
          <li>Ne tirez plus la chasse si les WC ne s’évacuent pas</li>
          <li>Coupez l’électricité de la zone si de l’eau s’en approche</li>
          <li>Dégagez l’accès au point d’intervention</li>
          <li>Évitez les produits déboucheurs chimiques avant notre passage</li>
        </ul>
        <div class="btn-row mt-24">
          ${callBtn('conseils-urgence', { text: 'Appeler maintenant' })}
        </div>
      </div>
    </div>
  </div>
</section>

${processSection('process-urgence')}
${zonesSection('zones-urgence')}
${formSection('Urgence en cours ? L’appel est plus rapide. Sinon, laissez vos coordonnées, nous vous rappelons.')}
`
};
