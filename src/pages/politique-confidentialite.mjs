import { SITE, tel } from '../lib/layout.mjs';

export default {
  slug: 'politique-confidentialite',
  nav: '',
  title: 'Politique de confidentialité | Plombier Breizh',
  description: 'Politique de confidentialité du site Plombier Breizh : données collectées via le formulaire, finalité, conservation et droits des utilisateurs.',
  body: `
<section class="section">
  <div class="container prose">
    <span class="eyebrow">Données personnelles</span>
    <h1>Politique de confidentialité</h1>

    <!-- ======================================================================
         À VÉRIFIER / COMPLÉTER avant mise en ligne : responsable de traitement,
         durées de conservation retenues et outils de mesure réellement activés.
         ====================================================================== -->

    <h2>Responsable du traitement</h2>
    <p>Plombier Breizh — [À COMPLÉTER : raison sociale et adresse].
    Contact : <a href="mailto:${SITE.email}">${SITE.email}</a> — ${tel('confidentialite', SITE.phoneDisplay)}.</p>

    <h2>Données collectées</h2>
    <p>Via le formulaire « Demander une intervention » : nom, numéro de téléphone, ville, type de problème
    et, le cas échéant, le message libre que vous rédigez. Aucune autre donnée n’est demandée.</p>

    <h2>Finalité</h2>
    <p>Ces données servent uniquement à traiter votre demande d’intervention : vous rappeler, évaluer le besoin
    et organiser le passage d’un technicien. Elles ne sont ni vendues ni cédées à des tiers à des fins commerciales.</p>

    <h2>Base légale</h2>
    <p>Le traitement repose sur votre démarche volontaire de prise de contact (mesures précontractuelles) et,
    le cas échéant, sur votre consentement.</p>

    <h2>Durée de conservation</h2>
    <p>Les demandes sont conservées le temps nécessaire au traitement de la demande et à la gestion de la relation
    client, puis supprimées ou archivées conformément aux obligations légales applicables.</p>

    <h2>Destinataires</h2>
    <p>Les données sont accessibles à Plombier Breizh et, le cas échéant, au prestataire technique assurant
    l’acheminement des messages (hébergeur, service de traitement de formulaire).</p>

    <h2>Mesure d’audience et publicité</h2>
    <p>Ce site peut utiliser des outils de mesure d’audience et de suivi des conversions publicitaires
    (Google Analytics 4, Google Ads, Google Tag Manager) afin d’évaluer l’efficacité des campagnes.
    Ces outils sont activés uniquement s’ils sont configurés par l’exploitant du site ; les identifiants
    correspondants sont alors renseignés dans le code du site. Les événements suivis concernent les clics
    sur le numéro de téléphone et les envois du formulaire de contact.</p>

    <h2>Vos droits</h2>
    <p>Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation
    et d’opposition sur vos données. Pour l’exercer, écrivez à
    <a href="mailto:${SITE.email}">${SITE.email}</a>. Vous pouvez également introduire une réclamation
    auprès de la CNIL (<a href="https://www.cnil.fr" rel="noopener">www.cnil.fr</a>).</p>

    <h2>Cookies</h2>
    <p>Le site ne dépose aucun cookie publicitaire tant qu’aucun outil de mesure n’est configuré.
    Si des outils de mesure sont activés, un dispositif de recueil du consentement doit être mis en place
    conformément aux recommandations de la CNIL.</p>
  </div>
</section>
`
};
