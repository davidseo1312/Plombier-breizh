import { SITE, callBtn, formBtn, pageHero, urgencyBand, ctaBand, phoneBlock, processSection, whySection, bretagneSection, formSection, tel } from '../lib/layout.mjs';

export default {
  slug: 'bretagne',
  nav: 'bretagne',
  title: 'Plombier Breizh en Bretagne — Finistère 29 & Morbihan 56',
  description: 'Plombier Breizh intervient en Bretagne pour la plomberie, le débouchage et le dégorgement, avec une présence forte dans le Finistère (29) et le Morbihan (56).',
  body: `
${pageHero({
    tag: 'Zone d’intervention',
    h1: 'Plombier Breizh intervient en Bretagne',
    sub: 'Plomberie, débouchage, dégorgement et urgences : nous travaillons en Bretagne, avec une présence particulièrement forte dans le Finistère et le Morbihan.',
    img: 'technicien-camion',
    alt: 'Plombier Breizh, entreprise de plomberie en Bretagne',
    location: 'hero-bretagne',
    photo: true
  })}

${urgencyBand('bandeau-bretagne')}

<section class="section">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Notre territoire</span>
      <h2>Une entreprise bretonne, des interventions de terrain</h2>
      <p class="lead">La Bretagne, ce sont des logements très différents : maisons de bourg anciennes,
      pavillons récents, appartements en centre-ville. Les réseaux d’évacuation ne se ressemblent pas,
      et les bouchons non plus.</p>
    </div>
    <p style="max-width:74ch">Nous intervenons sur l’ensemble de ces situations : débouchage d’un point d’eau,
    dégorgement d’un réseau complet, recherche de fuite ou dépannage courant. Deux départements
    concentrent l’essentiel de nos déplacements, le Finistère et le Morbihan, pour lesquels nous avons
    prévu une page dédiée.</p>
    <div class="btn-row mt-24">
      ${callBtn('bretagne-intro', { text: `Appeler le ${SITE.phoneDisplay}` })}
      ${formBtn('bretagne-intro', { variant: 'outline' })}
    </div>
  </div>
</section>

${bretagneSection('bretagne-page')}

<section class="section section--tint">
  <div class="container">
    <div class="grid grid--2">
      <div class="tile">
        <h3>Vous êtes dans le Finistère ?</h3>
        <p>Brest, Quimper, Morlaix, Concarneau, Landerneau et les communes alentour : dites-nous où vous
        êtes, nous vous confirmons la prise en charge dès l’appel.</p>
        <div class="btn-row mt-24"><a class="btn btn--accent btn--sm" href="finistere-29.html" data-cta="lp-29" data-location="bretagne-bas">Voir la page Finistère (29)</a></div>
      </div>
      <div class="tile">
        <h3>Vous êtes dans le Morbihan ?</h3>
        <p>Vannes, Lorient, Lanester, Auray, Pontivy et les communes alentour : un appel suffit pour savoir
        si nous pouvons intervenir chez vous.</p>
        <div class="btn-row mt-24"><a class="btn btn--accent btn--sm" href="morbihan-56.html" data-cta="lp-56" data-location="bretagne-bas">Voir la page Morbihan (56)</a></div>
      </div>
    </div>
    <div class="notice mt-32">
      <p class="mb-0">Votre commune n’est pas citée ? Ces listes ne sont pas exhaustives.
      Appelez-nous au ${tel('bretagne-liste', `<strong>${SITE.phoneDisplay}</strong>`)} : nous vous répondons directement.</p>
    </div>
  </div>
</section>

${ctaBand({ title: 'Vérifier que nous intervenons chez vous', text: 'Un appel, une réponse immédiate.', location: 'cta-bretagne' })}
${processSection('process-bretagne')}
${whySection('pourquoi-bretagne')}
${phoneBlock({ location: 'bloc-telephone-bretagne' })}
${formSection({ intro: 'Précisez votre commune : nous vous rappelons pour organiser l’intervention.', location: 'formulaire-bretagne' })}
`
};
