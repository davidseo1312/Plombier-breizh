import { SITE, tel } from '../lib/layout.mjs';
import { ENTREPRISE as E, ligne, adressePostale } from '../lib/entreprise.mjs';

export default {
  slug: 'politique-confidentialite',
  nav: '',
  title: 'Politique de confidentialité | Plombier Breizh',
  description: 'Politique de confidentialité du site Plombier Breizh : données collectées via les formulaires, finalité, conservation et droits des utilisateurs.',
  body: `
<section class="section">
  <div class="container prose">
    <span class="eyebrow">Données personnelles</span>
    <h1>Politique de confidentialité</h1>

    <!-- ======================================================================
         Le responsable de traitement est repris de src/lib/entreprise.mjs.
         Vérifiez également les durées de conservation retenues et les outils
         de mesure réellement activés avant la mise en ligne.
         ====================================================================== -->

    <h2>Responsable du traitement</h2>
    <p>
      ${ligne('Responsable', [E.enseigne, E.denomination].filter(Boolean).join(' — '))}
      ${ligne('Forme juridique', E.formeJuridique)}
      ${ligne('Adresse', adressePostale())}
      ${ligne('SIREN', E.siren)}
      Contact : <a href="mailto:${SITE.email}">${SITE.email}</a> — ${tel('confidentialite', SITE.phoneDisplay)}
    </p>
    <p>Aucun délégué à la protection des données (DPO) n’a été désigné : la taille de la structure et la
    nature des traitements ne l’imposent pas. Les demandes sont traitées directement à l’adresse ci-dessus.</p>

    <h2>Données collectées</h2>
    <p>Via les formulaires « Demander une intervention » et « Être rappelé » : numéro de téléphone, commune,
    type de problème, le message libre que vous rédigez, et le nom lorsque le formulaire le demande.
    Aucune autre donnée n’est collectée, et aucun champ n’est renseigné à votre insu.</p>
    <p>Un champ masqué sert uniquement à écarter les envois automatisés ; son contenu n’est jamais transmis
    ni conservé.</p>

    <h2>Finalité</h2>
    <p>Ces données servent uniquement à traiter votre demande d’intervention : vous rappeler, évaluer le besoin
    et organiser le passage d’un technicien. Elles ne sont ni vendues ni cédées à des tiers à des fins commerciales.</p>

    <h2>Base légale</h2>
    <p>Le traitement repose sur l’exécution de mesures précontractuelles prises à votre demande
    (article 6.1.b du RGPD) et, le cas échéant, sur votre consentement.</p>

    <h2>Durée de conservation</h2>
    <p>Les demandes sans suite sont conservées au maximum trois ans à compter du dernier contact.
    Lorsqu’une intervention a lieu, les données nécessaires à la facturation et aux obligations comptables
    sont conservées dix ans, conformément à l’article L.123-22 du Code de commerce.</p>

    <h2>Destinataires</h2>
    <p>Les données sont accessibles à ${E.enseigne} et, le cas échéant, aux prestataires techniques qui
    assurent l’acheminement et l’hébergement des messages${E.hebergeur.nom ? ` (hébergeur : ${E.hebergeur.nom})` : ''}.
    Ces prestataires agissent en qualité de sous-traitants et n’utilisent pas vos données pour leur
    propre compte. Aucune donnée n’est transférée en dehors de l’Union européenne sans garantie appropriée.</p>

    <h2>Mesure d’audience et publicité</h2>
    <p>Ce site peut utiliser des outils de mesure d’audience et de suivi des conversions publicitaires
    (Google Analytics 4, Google Ads, Google Tag Manager) afin d’évaluer l’efficacité des campagnes.
    Ces outils ne sont actifs que s’ils ont été configurés par l’exploitant du site : tant qu’aucun
    identifiant n’est renseigné dans le code, aucune donnée n’est transmise à Google. Les événements
    suivis concernent les clics sur le numéro de téléphone et les envois de formulaire.</p>

    <h2>Cookies</h2>
    <p>En l’état, le site ne dépose aucun cookie publicitaire ni traceur de mesure d’audience.
    Si de tels outils sont activés, un dispositif de recueil du consentement conforme aux recommandations
    de la CNIL devra être mis en place au préalable.</p>

    <h2>Vos droits</h2>
    <p>Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation,
    d’opposition et de portabilité sur vos données, ainsi que du droit de définir des directives relatives à
    leur sort après votre décès. Pour l’exercer, écrivez à
    <a href="mailto:${SITE.email}">${SITE.email}</a>${adressePostale() ? ` ou à l’adresse postale ${adressePostale()}` : ''}.
    Une réponse vous est apportée dans un délai d’un mois.</p>
    <p>Vous pouvez également introduire une réclamation auprès de la CNIL —
    3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 —
    <a href="https://www.cnil.fr" rel="noopener">www.cnil.fr</a>.</p>

    <h2>Sécurité</h2>
    <p>Le site est diffusé en HTTPS et les demandes sont transmises par une liaison chiffrée.
    L’accès aux demandes reçues est réservé aux personnes chargées de les traiter.</p>

    <h2>Mise à jour</h2>
    <p>La présente politique peut être modifiée pour tenir compte d’évolutions légales ou techniques.
    La version en vigueur est celle publiée sur cette page.</p>
  </div>
</section>
`
};
