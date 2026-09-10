import { SITE, callBtn, formBtn, pageHero, urgencyBand, ctaBand, processSection, zonesSection, formSection, tel } from '../lib/layout.mjs';

export default {
  slug: 'zones-intervention',
  nav: 'zones',
  title: 'Zones d’intervention — Finistère (29) et Morbihan (56) | Plombier Breizh',
  description: 'Plombier Breizh intervient dans le Finistère (29) et le Morbihan (56) pour la plomberie, le débouchage et le dégorgement. Appelez le 02 20 06 01 96.',
  body: `
${pageHero({
    tag: '📍 Zones · 29 & 56',
    h1: 'Plombier dans le Finistère (29) et le Morbihan (56)',
    sub: 'Plomberie, débouchage, dégorgement et interventions urgentes sur deux départements bretons.',
    img: 'technicien-camion',
    alt: 'Zone d’intervention de Plombier Breizh en Bretagne',
    location: 'hero-zones'
  })}

${urgencyBand('bandeau-zones')}

${zonesSection('zones-page')}

<section class="section">
  <div class="container">
    <div class="grid grid--2">
      <div class="tile">
        <h3>Vous êtes dans le Finistère (29) ?</h3>
        <p>Brest, Quimper, Morlaix, Concarneau, Douarnenez, Landerneau, Quimperlé, Châteaulin et leurs environs :
        indiquez-nous votre commune au téléphone, nous vous confirmons immédiatement la prise en charge.</p>
        <div class="btn-row mt-24">${callBtn('zone-29-bas', { size: '', text: 'Appeler pour le 29' })}</div>
      </div>
      <div class="tile">
        <h3>Vous êtes dans le Morbihan (56) ?</h3>
        <p>Vannes, Lorient, Lanester, Ploemeur, Pontivy, Auray, Hennebont, Guidel et leurs environs :
        un appel suffit pour savoir si nous pouvons intervenir chez vous.</p>
        <div class="btn-row mt-24">${callBtn('zone-56-bas', { size: '', text: 'Appeler pour le 56' })}</div>
      </div>
    </div>
    <div class="notice mt-32">
      <p class="mb-0">Votre commune n’est pas citée ? La liste ci-dessus n’est pas exhaustive.
      Appelez-nous au ${tel('zones-liste', '', `<strong>${SITE.phoneDisplay}</strong>`)} : nous vous répondons directement.</p>
    </div>
  </div>
</section>

${ctaBand({ title: 'Vérifier la disponibilité dans votre commune', text: 'Un appel, une réponse immédiate sur la prise en charge de votre intervention.', location: 'cta-zones' })}
${processSection('process-zones')}
${formSection('Précisez votre ville : nous vous rappelons pour organiser l’intervention.')}
`
};
