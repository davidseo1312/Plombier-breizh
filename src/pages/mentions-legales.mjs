import { SITE, tel } from '../lib/layout.mjs';
import { ENTREPRISE as E, ligne, adressePostale } from '../lib/entreprise.mjs';

const directeur = E.directeurPublication || E.dirigeant;

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
         Ces mentions sont générées depuis src/lib/entreprise.mjs.
         Pour les compléter, modifiez ce seul fichier puis relancez
         node build.mjs. Aucune donnée n'est inventée : un champ vide
         s'affiche « à compléter » et est signalé à la fin du build.
         ====================================================================== -->

    <h2>Éditeur du site</h2>
    <p>
      Le site ${SITE.baseUrl.replace('https://', '')} est édité par :<br>
      ${ligne('Dénomination', E.denomination)}
      ${ligne('Enseigne commerciale', E.enseigne)}
      ${ligne('Forme juridique', E.formeJuridique)}
      ${ligne('Capital social', E.capital, { obligatoire: false })}
      ${ligne('Siège social', adressePostale())}
      Téléphone : ${tel('mentions-legales', SITE.phoneDisplay)}<br>
      Email : <a href="mailto:${SITE.email}">${SITE.email}</a>
    </p>

    <h2>Immatriculation</h2>
    <p>
      ${ligne('SIREN', E.siren)}
      ${ligne('SIRET (siège)', E.siret)}
      ${ligne(`Immatriculation ${E.rcsType || 'RCS'}`, E.rcsVille ? `${E.rcsType || 'RCS'} ${E.rcsVille} ${E.siren}` : '')}
      ${ligne('Code APE / NAF', [E.ape, E.apeLibelle].filter(Boolean).join(' — '))}
      ${E.franchiseTVA
        ? 'TVA : non applicable, article 293 B du Code général des impôts.<br>'
        : ligne('N° de TVA intracommunautaire', E.tva)}
    </p>

    <h2>Directeur de la publication</h2>
    <p>${directeur
      ? `${directeur}${E.dirigeantQualite ? `, ${E.dirigeantQualite}` : ''}`
      : '<span class="todo">à compléter</span>'}</p>

    <h2>Hébergement</h2>
    <p>
      ${ligne('Hébergeur', E.hebergeur.nom)}
      ${ligne('Adresse', E.hebergeur.adresse)}
      ${ligne('Téléphone', E.hebergeur.telephone, { obligatoire: false })}
      ${E.hebergeur.site ? `Site : <a href="${E.hebergeur.site}" rel="noopener">${E.hebergeur.site.replace(/^https?:\/\//, '')}</a><br>` : ''}
    </p>

    <h2>Assurance responsabilité civile professionnelle</h2>
    <p>
      ${ligne('Assureur', E.assureur)}
      ${ligne('N° de contrat', E.assuranceContrat, { obligatoire: false })}
      ${ligne('Couverture géographique', E.assuranceZone)}
    </p>

    <h2>Médiation de la consommation</h2>
    <p>Conformément à l’article L.616-1 du Code de la consommation, tout client particulier peut recourir
    gratuitement à un médiateur de la consommation en vue de la résolution amiable d’un litige, après avoir
    adressé une réclamation écrite à l’entreprise.</p>
    <p>
      ${ligne('Médiateur', E.mediateurNom)}
      ${ligne('Adresse', E.mediateurAdresse, { obligatoire: false })}
      ${E.mediateurSite ? `Site : <a href="${E.mediateurSite}" rel="noopener">${E.mediateurSite.replace(/^https?:\/\//, '')}</a><br>` : ''}
    </p>
    <p>La plateforme européenne de règlement en ligne des litiges est accessible à l’adresse
    <a href="https://ec.europa.eu/consumers/odr" rel="noopener">ec.europa.eu/consumers/odr</a>.</p>

    <h2>Propriété intellectuelle</h2>
    <p>L’ensemble des contenus présents sur ce site (textes, photographies, éléments graphiques, logo) est protégé
    par le droit de la propriété intellectuelle. Toute reproduction, représentation ou diffusion, totale ou
    partielle, sans autorisation préalable est interdite.</p>

    <h2>Responsabilité</h2>
    <p>Les informations diffusées sur ce site sont fournies à titre indicatif et ne constituent pas un engagement
    contractuel. Les conditions précises d’une intervention (nature des travaux, délais, tarifs) sont communiquées
    lors de la prise de contact.</p>

    <h2>Données personnelles</h2>
    <p>Le traitement des données transmises via les formulaires du site est décrit dans la
    <a href="/politique-confidentialite">politique de confidentialité</a>.</p>

    <h2>Contact</h2>
    <p>Pour toute question relative au site : <a href="mailto:${SITE.email}">${SITE.email}</a>
    ou ${tel('mentions-legales-bas', SITE.phoneDisplay)}.</p>
  </div>
</section>
`
};
