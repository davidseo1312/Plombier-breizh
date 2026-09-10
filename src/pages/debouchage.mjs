import { SITE, callBtn, formBtn, pageHero, urgencyBand, ctaBand, phoneBlock, processSection, whySection, reviewsSection, bretagneSection, formSection, tel } from '../lib/layout.mjs';
import { servicesGrid, servicePhoto, pick } from '../lib/services.mjs';

export default {
  slug: 'debouchage',
  nav: 'debouchage',
  title: 'Débouchage de canalisation en Bretagne | Plombier Breizh',
  description: 'WC, évier, douche ou canalisation bouchée en Bretagne ? Débouchage professionnel par Plombier Breizh. Appelez le 02 20 06 01 96.',
  body: `
${pageHero({
    tag: 'Débouchage',
    h1: 'Débouchage de canalisation en Bretagne',
    sub: 'WC, évier, douche ou canalisation principale : on trouve où ça bloque et on rétablit l’évacuation.',
    img: 'debouchage-canalisation',
    alt: 'Plombier Breizh en intervention de débouchage',
    location: 'hero-debouchage',
    photo: true
  })}

${urgencyBand('bandeau-debouchage')}

<section class="section">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Symptômes</span>
      <h2>Une évacuation qui ralentit annonce toujours un bouchon</h2>
      <p class="lead">Au début, l’eau met simplement du temps à partir. Puis elle stagne. Puis elle remonte.
      Entre les deux, l’intervention est bien plus simple.</p>
    </div>
    <div class="grid grid--2">
      <div>
        <h3>Ce que vous constatez</h3>
        <ul class="symptom-list">
          <li>L’eau ne s’écoule plus</li>
          <li>L’évier se vide au ralenti</li>
          <li>Les WC ne s’évacuent plus</li>
          <li>La douche garde l’eau</li>
          <li>Des odeurs remontent</li>
          <li>Un gargouillis dans les canalisations</li>
        </ul>
      </div>
      <div>
        <h3>Ce que nous mettons en œuvre</h3>
        <ul class="symptom-list solution-list">
          <li>Débouchage mécanique</li>
          <li>Furet électrique professionnel</li>
          <li>Débouchage haute pression</li>
          <li>Inspection de canalisation</li>
          <li>Dégorgement si le bouchon est en aval</li>
        </ul>
        <div class="btn-row mt-24">
          ${callBtn('symptomes-debouchage', { text: 'Appeler maintenant' })}
          ${formBtn('symptomes-debouchage', { variant: 'outline' })}
        </div>
      </div>
    </div>
  </div>
</section>

${ctaBand({ title: 'Une évacuation bloquée n’attend pas', text: 'Un appel, et nous évaluons ce qu’il faut prévoir.', location: 'cta-debouchage' })}

<section class="section section--tint">
  <div class="container">
    <div class="section__head section__head--center">
      <span class="eyebrow">Selon le point d’eau</span>
      <h2>Chaque évacuation a sa méthode</h2>
      <p class="lead">Un siphon d’évier et une chute d’immeuble ne se traitent pas de la même façon.</p>
    </div>
    ${servicesGrid(pick('WC bouché', 'Évier bouché', 'Douche bouchée', 'Canalisation obstruée', 'Débouchage', 'Dégorgement'), 'services-debouchage')}
  </div>
</section>

<section class="section" id="diagnostic">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Diagnostic</span>
      <h2>On regarde avant de forcer</h2>
      <p class="lead">Graisses en cuisine, cheveux et savon en salle de bain, lingettes dans les WC, dépôts ou
      racines sur les réseaux enterrés : l’origine du bouchon détermine l’outil à utiliser. Forcer avec le
      mauvais matériel, c’est risquer d’abîmer la conduite sans rien débloquer.</p>
    </div>

    <figure class="figure-wide">
      <img src="assets/img/infographie-origine-bouchon.jpg"
           alt="L’origine du bouchon détermine l’outil à utiliser. Graisses en cuisine : les graisses et les résidus alimentaires se solidifient dans les canalisations et forment des bouchons. Cheveux et savon en salle de bain : les cheveux s’accumulent avec le savon et les résidus de produits d’hygiène, ce qui obstrue les tuyaux. Lingettes dans les WC : même dites biodégradables, elles ne se décomposent pas assez vite et peuvent créer des bouchons importants. Dépôts ou racines sur les réseaux enterrés : avec le temps, des dépôts, du tartre ou des racines d’arbres peuvent s’infiltrer dans les canalisations et provoquer des bouchons durables. Un bon diagnostic égale le bon outil, égale une intervention efficace."
           width="1536" height="1024" loading="lazy" decoding="async">
      <figcaption>Les quatre origines les plus fréquentes d’un bouchon — et pourquoi le diagnostic conditionne
      la méthode. <a href="assets/img/infographie-origine-bouchon.jpg" target="_blank" rel="noopener">Voir en grand</a></figcaption>
    </figure>

    <p class="mt-32" style="max-width:74ch">Quand l’accès est difficile, la caméra d’inspection tranche la
    question en quelques minutes : on voit ce qui bloque, et on part avec le bon matériel.</p>
    <div class="btn-row mt-24">
      ${callBtn('diagnostic-debouchage', { text: `Appeler le ${SITE.phoneDisplay}` })}
      ${formBtn('diagnostic-debouchage', { variant: 'outline' })}
    </div>
  </div>
</section>

${processSection('process-debouchage')}
${whySection('pourquoi-debouchage')}
${reviewsSection()}
${bretagneSection('bretagne-debouchage')}
${phoneBlock({ location: 'bloc-telephone-debouchage' })}
${formSection({ intro: 'Indiquez le point d’eau concerné : nous vous rappelons pour organiser le débouchage.', location: 'formulaire-debouchage' })}
`
};
