/* Fabrique de landing pages SEA géolocalisées (une par département ciblé).
   Objectif : coller à l'intention publicitaire « plombier + ville/département »
   sans dupliquer du contenu SEO inutile. */
import { SITE, callBtn, formBtn, pageHero, urgencyBand, ctaBand, processSection, formSection, tel } from './layout.mjs';
import { SERVICES, servicesGrid } from './services.mjs';

const list = SERVICES.filter(s => ['Débouchage canalisation', 'Débouchage WC', 'Dégorgement', 'Fuite d’eau', 'Dépannage plomberie', 'Intervention plomberie urgente'].includes(s.title));

export const geoPage = ({ slug, dept, num, cities, img }) => ({
  slug,
  nav: 'zones',
  title: `Plombier ${dept} (${num}) — débouchage, dégorgement, urgence | Plombier Breizh`,
  description: `Plombier dans le ${dept} (${num}) : débouchage de canalisation, dégorgement, fuite d’eau et dépannage. Intervention rapide — appelez le ${SITE.phoneDisplay}.`,
  body: `
${pageHero({
    tag: `📍 ${dept} · ${num}`,
    h1: `Plombier dans le ${dept} (${num})`,
    sub: `Canalisation bouchée, dégorgement, fuite ou panne de plomberie dans le ${dept} ? Contactez Plombier Breizh pour une intervention rapide.`,
    img,
    alt: `Plombier Breizh en intervention dans le ${dept}`,
    location: `hero-lp-${num}`
  })}

${urgencyBand(`bandeau-lp-${num}`)}

<section class="section">
  <div class="container">
    <div class="section__head section__head--center">
      <span class="eyebrow">${dept} — ${num}</span>
      <h2>Nos interventions dans le ${dept}</h2>
      <p class="lead" style="margin-inline:auto">Débouchage, dégorgement, fuite d’eau et dépannage :
      décrivez votre situation au téléphone, nous vous indiquons l’intervention adaptée.</p>
    </div>
    ${servicesGrid(list, `services-lp-${num}`)}
  </div>
</section>

${ctaBand({ title: `Un plombier pour le ${dept} (${num})`, text: 'Un appel suffit pour lancer la prise en charge de votre intervention.', location: `cta-lp-${num}` })}

<section class="section section--tint">
  <div class="container">
    <div class="grid grid--2">
      <div>
        <span class="eyebrow">Secteurs</span>
        <h2>Nous intervenons notamment à</h2>
        <ul class="zone__cities">
          ${cities.map(c => `<li>${c}</li>`).join('\n          ')}
        </ul>
        <p>Cette liste n’est pas exhaustive. Appelez-nous au
        ${tel(`lp-${num}-communes`, '', `<strong>${SITE.phoneDisplay}</strong>`)} pour vérifier la prise en charge de votre commune.</p>
        <div class="btn-row mt-24">
          ${callBtn(`lp-${num}-communes`, { text: `Appeler le ${SITE.phoneDisplay}` })}
          ${formBtn(`lp-${num}-communes`, { variant: 'outline' })}
        </div>
      </div>
      <div>
        <h3>Les situations les plus fréquentes</h3>
        <ul class="symptom-list">
          <li>Eau qui ne s’écoule plus</li>
          <li>Évier ou lavabo bouché</li>
          <li>WC bouché</li>
          <li>Douche qui refoule</li>
          <li>Mauvaises odeurs d’évacuation</li>
          <li>Fuite d’eau visible ou suspectée</li>
        </ul>
      </div>
    </div>
  </div>
</section>

${processSection(`process-lp-${num}`)}
${formSection(`Vous êtes dans le ${dept} (${num}) ? Laissez vos coordonnées, nous vous rappelons.`)}
`
});
