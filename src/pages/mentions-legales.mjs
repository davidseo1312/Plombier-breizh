import { SITE, tel } from '../lib/layout.mjs';

export default {
  slug: 'mentions-legales',
  nav: '',
  title: 'Mentions légales | Plombier Breizh',
  description: 'Mentions légales du site Plombier Breizh — plomberie, débouchage et dégorgement en Bretagne.',
  body: `
<section class="section">
  <div class="container prose">
    <span class="eyebrow">Informations légales</span>
    <h1>Mentions légales</h1>

    <!-- ======================================================================
         À COMPLÉTER PAR L'EXPLOITANT DU SITE
         Les mentions ci-dessous sont obligatoires (art. 6 III LCEN).
         Aucune information n'a été inventée : remplacez chaque [À COMPLÉTER]
         par les données réelles de l'entreprise avant la mise en ligne.
         ====================================================================== -->

    <h2>Éditeur du site</h2>
    <p>
      Dénomination : <strong>Plombier Breizh</strong><br>
      Forme juridique : [À COMPLÉTER]<br>
      Adresse du siège social : [À COMPLÉTER]<br>
      Téléphone : ${tel('mentions-legales', SITE.phoneDisplay)}<br>
      Email : <a href="mailto:${SITE.email}">${SITE.email}</a><br>
      SIRET : [À COMPLÉTER]<br>
      Numéro de TVA intracommunautaire : [À COMPLÉTER]<br>
      Directeur de la publication : [À COMPLÉTER]
    </p>

    <h2>Hébergement</h2>
    <p>
      Hébergeur : [À COMPLÉTER]<br>
      Adresse : [À COMPLÉTER]<br>
      Téléphone : [À COMPLÉTER]
    </p>

    <h2>Assurance professionnelle</h2>
    <p>Assureur et couverture géographique : [À COMPLÉTER]</p>

    <h2>Propriété intellectuelle</h2>
    <p>L’ensemble des contenus présents sur ce site (textes, éléments graphiques, logo) est protégé par le droit
    de la propriété intellectuelle. Toute reproduction, représentation ou diffusion, totale ou partielle, sans
    autorisation préalable est interdite.</p>

    <h2>Responsabilité</h2>
    <p>Les informations diffusées sur ce site sont fournies à titre indicatif et ne constituent pas un engagement
    contractuel. Les conditions précises d’une intervention (nature des travaux, délais, tarifs) sont communiquées
    lors de la prise de contact.</p>

    <h2>Données personnelles</h2>
    <p>Le traitement des données transmises via le formulaire de contact est décrit dans la
    <a href="politique-confidentialite.html">politique de confidentialité</a>.</p>

    <h2>Contact</h2>
    <p>Pour toute question relative au site : <a href="mailto:${SITE.email}">${SITE.email}</a>
    ou ${tel('mentions-legales-bas', SITE.phoneDisplay)}.</p>
  </div>
</section>
`
};
