import { SITE, callBtn, formBtn, pageHero, urgencyBand, ctaBand, phoneBlock, processSection, whySection, reviewsSection, bretagneSection, formSection, tel } from '../lib/layout.mjs';
import { servicePhoto } from '../lib/services.mjs';

export default {
  slug: 'urgence-plomberie',
  nav: 'urgence',
  title: 'Urgence plomberie en Bretagne — plombier en urgence | Plombier Breizh',
  description: 'Fuite active, refoulement, WC bouché, canalisation obstruée en Bretagne ? Appelez Plombier Breizh au 02 20 06 01 96 pour une intervention en urgence.',
  body: `
${pageHero({
    tag: 'Urgence plomberie',
    h1: 'Urgence plomberie en Bretagne',
    sub: 'Une fuite qui ne s’arrête pas, un refoulement, une canalisation totalement bouchée : appelez-nous, nous organisons le passage au plus vite.',
    img: 'urgence-plomberie',
    alt: 'Intervention de plomberie en urgence',
    location: 'hero-urgence',
    photo: true,
    items: ['Intervention rapide', 'Débouchage &amp; dégorgement', 'Dépannage plomberie', 'Équipements professionnels', 'Intervention en Bretagne']
  })}

${urgencyBand('bandeau-urgence-page')}

<section class="section">
  <div class="container">
    <div class="section__head section__head--center">
      <span class="eyebrow">Ne pas attendre</span>
      <h2>Dans ces situations, appelez tout de suite</h2>
      <p class="lead">Certaines pannes s’aggravent d’heure en heure. Le téléphone reste le moyen le plus
      rapide de nous joindre : ${tel('urgence-texte', `<strong>${SITE.phoneDisplay}</strong>`)}.</p>
    </div>
    <div class="grid grid--3">
      <div class="tile"><h3>Une fuite qui continue</h3><p>L’eau coule sans s’arrêter et le robinet d’arrêt ne suffit pas à la stopper.</p></div>
      <div class="tile"><h3>Des eaux usées qui remontent</h3><p>L’eau ressort par la douche, l’évier ou les WC : le réseau est bloqué en aval.</p></div>
      <div class="tile"><h3>Des WC bouchés</h3><p>Plus rien ne s’évacue et le prochain usage risque de faire déborder la cuvette.</p></div>
      <div class="tile"><h3>Plus aucune évacuation</h3><p>Tout le logement est concerné, plus une seule évacuation ne fonctionne.</p></div>
      <div class="tile"><h3>Un dégât des eaux en cours</h3><p>Sol, plafond ou cloison prennent l’eau à cause d’une fuite.</p></div>
      <div class="tile"><h3>Plus d’arrivée d’eau</h3><p>Coupure ou panne sur l’alimentation du logement.</p></div>
    </div>
    <div class="btn-row mt-32">
      ${callBtn('urgence-situations', { text: `Appeler le ${SITE.phoneDisplay}` })}
      ${formBtn('urgence-situations', { variant: 'outline' })}
    </div>
  </div>
</section>

${phoneBlock({ title: 'Une urgence en cours ?', text: 'N’attendez pas que la situation s’aggrave : un appel suffit pour lancer la prise en charge.', location: 'bloc-telephone-urgence' })}

<section class="section section--tint">
  <div class="container">
    <div class="split split--media-first">
      <div class="split__media">
        ${servicePhoto('technicien-camion', 'Technicien Plombier Breizh en déplacement')}
      </div>
      <div>
        <span class="eyebrow">En attendant</span>
        <h2>Les bons réflexes avant notre arrivée</h2>
        <ul class="symptom-list solution-list">
          <li>Fermez le robinet d’arrêt général en cas de fuite</li>
          <li>N’utilisez plus les points d’eau reliés à l’évacuation bloquée</li>
          <li>Ne tirez plus la chasse si les WC ne s’évacuent pas</li>
          <li>Coupez l’électricité de la zone si l’eau s’en approche</li>
          <li>Dégagez l’accès au point d’intervention</li>
          <li>Évitez les déboucheurs chimiques avant notre passage</li>
        </ul>
        <div class="btn-row mt-24">
          ${callBtn('conseils-urgence', { text: 'Appeler maintenant' })}
        </div>
      </div>
    </div>
  </div>
</section>

${ctaBand({ title: 'Parler à un plombier maintenant', location: 'cta-urgence' })}
${processSection('process-urgence')}
${whySection('pourquoi-urgence')}
${reviewsSection()}
${bretagneSection('bretagne-urgence')}
${formSection({ intro: 'Urgence en cours ? L’appel est plus rapide. Sinon, laissez vos coordonnées, nous vous rappelons.', location: 'formulaire-urgence' })}
`
};
