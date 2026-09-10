import { SITE, callBtn, formBtn } from '../lib/layout.mjs';

export default {
  slug: '404',
  nav: '',
  title: 'Page introuvable | Plombier Breizh',
  description: 'La page demandée est introuvable. Contactez Plombier Breizh au 02 20 06 01 96 pour une intervention dans le Finistère (29) ou le Morbihan (56).',
  body: `
<section class="section section--dark">
  <div class="container">
    <span class="eyebrow">Erreur 404</span>
    <h1>Cette page est introuvable</h1>
    <p class="lead">Le lien est peut-être obsolète. Pour une intervention de plomberie, de débouchage ou de
    dégorgement dans le Finistère (29) et le Morbihan (56), contactez-nous directement.</p>
    <div class="btn-row mt-24">
      ${callBtn('page-404', { text: `Appeler le ${SITE.phoneDisplay}` })}
      ${formBtn('page-404', { variant: 'outline-light', href: 'index.html#demande-intervention' })}
    </div>
    <p class="mt-32"><a href="index.html" style="color:#00AEEF">← Retour à l’accueil</a></p>
  </div>
</section>
`
};
