/* ==========================================================================
   Plombier Breizh — composants de mise en page partagés
   Toutes les pages du site sont générées à partir de ce fichier
   (`node build.mjs`). Ne modifiez pas les .html à la racine : ils sont
   régénérés. Modifiez src/lib/layout.mjs et src/pages/*.mjs.
   ========================================================================== */

export const SITE = {
  name: 'Plombier Breizh',
  phoneDisplay: '02 20 06 01 96',
  phoneHref: 'tel:0220060196',
  email: 'contact@plombier-breizh.fr',
  zones: 'Finistère (29) & Morbihan (56)',
  baseUrl: 'https://www.plombier-breizh.fr'
};

export const NAV = [
  { href: 'index.html', label: 'Accueil', key: 'accueil' },
  { href: 'plomberie.html', label: 'Plomberie', key: 'plomberie' },
  { href: 'debouchage.html', label: 'Débouchage', key: 'debouchage' },
  { href: 'degorgement.html', label: 'Dégorgement', key: 'degorgement' },
  { href: 'urgence-plomberie.html', label: 'Urgence', key: 'urgence' },
  { href: 'zones-intervention.html', label: "Zones d'intervention", key: 'zones' }
];

/* -------------------------------------------------------------------------
   Briques réutilisables
   ------------------------------------------------------------------------- */

/** Lien téléphone tracké (data-location alimente l'événement phone_click). */
export const tel = (location, classes = '', label = SITE.phoneDisplay) =>
  `<a href="${SITE.phoneHref}" ${classes ? `class="${classes}" ` : ''}data-location="${location}">${label}</a>`;

/** Bouton d'appel rectangulaire. */
export const callBtn = (location, { variant = 'primary', size = 'lg', text = `Appeler le ${SITE.phoneDisplay}`, block = false } = {}) =>
  `<a class="btn btn--${variant}${size ? ` btn--${size}` : ''}${block ? ' btn--block' : ''}" href="${SITE.phoneHref}" data-location="${location}" data-cta="appel">
        <span aria-hidden="true">📞</span> ${text}
      </a>`;

/** Bouton vers le formulaire d'intervention. */
export const formBtn = (location, { variant = 'accent', size = 'lg', text = 'Demander une intervention', block = false, href = '#demande-intervention' } = {}) =>
  `<a class="btn btn--${variant}${size ? ` btn--${size}` : ''}${block ? ' btn--block' : ''}" href="${href}" data-location="${location}" data-cta="demande-intervention">${text}</a>`;


/* -------------------------------------------------------------------------
   PHOTO PRINCIPALE — technicien + camion Plombier Breizh
   Déposez le fichier `assets/img/hero-plombier-breizh-camion.jpg` pour
   l'activer. Tant qu'il n'existe pas, le visuel de substitution indiqué en
   second paramètre s'affiche automatiquement (aucune image cassée).
   ------------------------------------------------------------------------- */
export const heroPhoto = (fallback = 'hero-plombier-intervention',
  alt = 'Technicien Plombier Breizh devant son camion d’intervention équipé') =>
  `<img src="assets/img/hero-plombier-breizh-camion.jpg" alt="${alt}"
             width="960" height="720" fetchpriority="high" decoding="async"
             onerror="this.onerror=null;this.src='assets/img/${fallback}.svg';">`;

export const REASSURANCE = [
  'Intervention rapide',
  'Techniciens expérimentés',
  'Équipements professionnels',
  'Intervention Finistère 29 & Morbihan 56',
  'Disponible pour les urgences'
];

export const checklist = (items = REASSURANCE, inline = false) =>
  `<ul class="checklist${inline ? ' checklist--inline' : ''}">
        ${items.map(i => `<li>${i}</li>`).join('\n        ')}
      </ul>`;

/* -------------------------------------------------------------------------
   HEAD / HEADER / FOOTER
   ------------------------------------------------------------------------- */

const jsonLd = () => JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: SITE.name,
  telephone: '+33220060196',
  email: SITE.email,
  url: SITE.baseUrl,
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Finistère (29)' },
    { '@type': 'AdministrativeArea', name: 'Morbihan (56)' }
  ],
  makesOffer: [
    'Plomberie', 'Dépannage plomberie', 'Débouchage de canalisation',
    'Dégorgement', 'Recherche de fuite', 'Intervention de plomberie urgente'
  ].map(n => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n } }))
});

export const head = ({ title, description, slug }) => `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${SITE.baseUrl}/${slug === 'index' ? '' : slug}">
<meta name="theme-color" content="#007BCB">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${SITE.baseUrl}/assets/img/hero-plombier-intervention.svg">
<meta property="og:locale" content="fr_FR">
<link rel="icon" href="assets/logo-plombier-breizh.svg" type="image/svg+xml">
<link rel="preload" href="assets/css/site.css" as="style">
<link rel="stylesheet" href="assets/css/site.css">
<script type="application/ld+json">${jsonLd()}</script>
<!-- ===================================================================
     TRACKING — à activer lors de la mise en ligne (voir README.md).
     Aucun identifiant fictif n'est présent : décommentez et remplacez
     GTM-XXXXXXX / G-XXXXXXXXXX / AW-XXXXXXXXX par vos identifiants.

     Google Tag Manager :
     <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
     })(window,document,'script','dataLayer','GTM-XXXXXXX');</script>

     OU Google Analytics 4 / Google Ads en direct :
     <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
     <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
     gtag('js',new Date());gtag('config','G-XXXXXXXXXX');gtag('config','AW-XXXXXXXXX');</script>
     =================================================================== -->
<script>window.PB_CONFIG={formEndpoint:'',contactEmail:'${SITE.email}',phoneDisplay:'${SITE.phoneDisplay}'};</script>
</head>`;

export const header = (current) => `
<a class="visually-hidden" href="#contenu">Aller au contenu</a>
<div class="topbar">
  <div class="container">
    <ul class="topbar__list">
      <li><span class="topbar__tag">Zone :</span> ${SITE.zones}</li>
      <li><span class="topbar__tag">Email :</span> <a href="mailto:${SITE.email}">${SITE.email}</a></li>
    </ul>
    <ul class="topbar__list">
      <li>Plomberie • Débouchage • Dégorgement • Urgence</li>
    </ul>
  </div>
</div>

<header class="site-header">
  <div class="container">
    <a class="brand" href="index.html" aria-label="${SITE.name} — accueil">
      <img class="brand__logo" src="assets/logo-plombier-breizh.png" alt="${SITE.name}" width="152" height="46"
           onerror="this.onerror=null;this.src='assets/logo-plombier-breizh.svg';">
    </a>

    <a class="header-call" href="${SITE.phoneHref}" data-location="header-mobile" data-cta="appel-mobile">
      <span aria-hidden="true">📞</span><span class="header-call__text">${SITE.phoneDisplay}</span>
    </a>

    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Ouvrir le menu">
      <span></span>
    </button>

    <nav class="main-nav" id="main-nav" aria-label="Navigation principale">
      <ul class="main-nav__list">
        ${NAV.map(n => `<li><a href="${n.href}"${n.key === current ? ' aria-current="page"' : ''}>${n.label}</a></li>`).join('\n        ')}
      </ul>
    </nav>

    <div class="header-cta">
      <a class="header-phone" href="${SITE.phoneHref}" data-location="header-desktop" data-cta="appel-header">
        <span class="header-phone__label">Urgence ?</span>
        <span class="header-phone__number">${SITE.phoneDisplay}</span>
      </a>
      ${callBtn('header-desktop-bouton', { size: '', text: 'Appeler maintenant' })}
    </div>
  </div>
</header>`;

/* Bandeau urgence — placé juste sous le hero. */
export const urgencyBand = (location = 'bandeau-urgence') => `
<section class="urgency" aria-label="Besoin d'un plombier rapidement">
  <div class="container">
    <div>
      <p class="urgency__title">🚨 Besoin d’un plombier rapidement ?</p>
      <p class="urgency__text">Appelez directement Plombier Breizh — ${SITE.zones}</p>
    </div>
    <div class="urgency__phone">
      <a class="urgency__number" href="${SITE.phoneHref}" data-location="${location}" data-cta="numero-bandeau">${SITE.phoneDisplay}</a>
      ${callBtn(location, { variant: 'dark', size: '', text: 'Appeler maintenant' })}
    </div>
  </div>
</section>`;

/* Bande CTA noire réutilisable après les sections clés. */
export const ctaBand = ({
  title = 'Parler à un plombier maintenant',
  text = `Un technicien Plombier Breizh vous répond et évalue votre besoin. Finistère 29 & Morbihan 56.`,
  location = 'bande-cta',
  secondary = true
} = {}) => `
<section class="cta-band">
  <div class="container">
    <div>
      <h2>${title}</h2>
      <p>${text}</p>
    </div>
    <div class="cta-band__actions">
      ${callBtn(location, { text: `Appeler le ${SITE.phoneDisplay}` })}
      ${secondary ? formBtn(location, { variant: 'outline-light' }) : ''}
    </div>
  </div>
</section>`;

/* Processus en 3 étapes. */
export const processSection = (location = 'process') => `
<section class="section section--tint" id="intervention-rapide">
  <div class="container">
    <div class="section__head section__head--center">
      <span class="eyebrow">Intervention</span>
      <h2>Une intervention rapide quand vous en avez besoin</h2>
      <p class="lead" style="margin-inline:auto">Un fonctionnement simple, pensé pour les situations urgentes : vous appelez, nous évaluons, un technicien intervient.</p>
    </div>
    <div class="steps">
      <div class="steps__item">
        <span class="steps__num">01</span>
        <h3>Vous nous appelez</h3>
        <p>Vous décrivez votre problème au ${SITE.phoneDisplay}. Nous notons l’adresse, la nature du problème et son degré d’urgence.</p>
      </div>
      <div class="steps__item">
        <span class="steps__num">02</span>
        <h3>Nous évaluons votre besoin</h3>
        <p>Nous identifions avec vous le type d’intervention nécessaire et le matériel à prévoir : débouchage, dégorgement, recherche de fuite, dépannage.</p>
      </div>
      <div class="steps__item">
        <span class="steps__num">03</span>
        <h3>Un technicien intervient</h3>
        <p>Un technicien équipé se rend sur place, diagnostique la situation et met en œuvre la méthode adaptée.</p>
      </div>
    </div>
    <div class="btn-row mt-32">
      ${callBtn(location, { text: `Appeler le ${SITE.phoneDisplay}` })}
      ${formBtn(location, { variant: 'outline' })}
    </div>
  </div>
</section>`;

/* Avis clients — structure prête à recevoir de VRAIS avis.
   Aucun faux témoignage n'est publié : voir README.md pour ajouter les avis. */
export const reviewsSection = () => `
<section class="section" id="avis">
  <div class="container">
    <div class="section__head section__head--center">
      <span class="eyebrow">Avis clients</span>
      <h2>Nos clients témoignent</h2>
      <p class="lead" style="margin-inline:auto">Votre satisfaction est au cœur de nos interventions.</p>
    </div>

    <!-- =====================================================================
         EMPLACEMENT DES AVIS CLIENTS RÉELS
         Aucun avis n'est inventé. Dupliquez le modèle ci-dessous pour chaque
         avis authentique (Google, fiche établissement, retour client écrit) :

         <article class="review">
           <div class="review__stars" aria-label="Note : 5 sur 5">★★★★★</div>
           <p class="review__text">« Texte exact de l'avis client. »</p>
           <p class="review__author">
             <span class="review__name">Prénom N.</span>
             <span class="review__city">Ville (29)</span>
           </p>
         </article>

         Placez ces articles dans <div class="grid grid--3"> … </div>
         puis supprimez le bloc .notice ci-dessous.
         ===================================================================== -->

    <div class="notice">
      <p><strong>Nous n’affichons que de vrais avis clients.</strong> Cette section accueillera les témoignages
      vérifiés de nos clients du Finistère et du Morbihan, au fur et à mesure de nos interventions.</p>
      <p class="mb-0">Vous avez fait appel à Plombier Breizh ? Écrivez-nous à
      <a href="mailto:${SITE.email}">${SITE.email}</a> pour partager votre retour.</p>
    </div>

    <div class="grid grid--3 mt-32">
      <div class="tile"><h3>Techniciens expérimentés</h3><p>Des professionnels de la plomberie, du débouchage et du dégorgement.</p></div>
      <div class="tile"><h3>Équipements professionnels</h3><p>Furet électrique, haute pression, caméra d’inspection : le matériel adapté à chaque situation.</p></div>
      <div class="tile"><h3>Contact direct</h3><p>Un appel au ${SITE.phoneDisplay} et vous parlez directement à un interlocuteur.</p></div>
    </div>
  </div>
</section>`;

/* Zones d'intervention (bloc court réutilisable). */
export const zonesSection = (location = 'zones') => `
<section class="section section--tint" id="zones">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Zones d’intervention</span>
      <h2>Plombier dans le Finistère (29) et le Morbihan (56)</h2>
      <p class="lead">Plombier Breizh intervient sur deux départements bretons pour la plomberie, le débouchage,
      le dégorgement et les interventions urgentes.</p>
    </div>
    <div class="grid grid--2">
      <div class="zone">
        <div class="zone__head"><h3>Finistère</h3><span class="zone__num">29</span></div>
        <div class="zone__body">
          <p>Interventions de plomberie et de débouchage sur le Finistère, en secteur urbain comme en périphérie.</p>
          <ul class="zone__cities">
            <li>Brest</li><li>Quimper</li><li>Concarneau</li><li>Morlaix</li><li>Douarnenez</li><li>Landerneau</li><li>Quimperlé</li><li>Châteaulin</li>
          </ul>
          ${callBtn(location + '-29', { size: '', text: 'Appeler pour le 29', block: true })}
        </div>
      </div>
      <div class="zone">
        <div class="zone__head"><h3>Morbihan</h3><span class="zone__num">56</span></div>
        <div class="zone__body">
          <p>Interventions de plomberie et de dégorgement sur le Morbihan, du littoral à l’intérieur des terres.</p>
          <ul class="zone__cities">
            <li>Vannes</li><li>Lorient</li><li>Lanester</li><li>Ploemeur</li><li>Pontivy</li><li>Auray</li><li>Hennebont</li><li>Guidel</li>
          </ul>
          ${callBtn(location + '-56', { size: '', text: 'Appeler pour le 56', block: true })}
        </div>
      </div>
    </div>
    <div class="notice mt-32">
      <p class="mb-0">Vous ne savez pas si nous intervenons dans votre commune ? Appelez-nous directement au
      ${tel(location + '-commune', '', `<strong>${SITE.phoneDisplay}</strong>`)}.</p>
    </div>
  </div>
</section>`;

/* Formulaire de contact court. */
export const formSection = (intro = 'Décrivez votre problème en quelques secondes : nous vous rappelons pour organiser l’intervention.') => `
<section class="section" id="demande-intervention">
  <div class="container">
    <div class="form-block">
      <div>
        <span class="eyebrow">Contact</span>
        <h2>Besoin d’une intervention ?</h2>
        <p class="lead">${intro}</p>
        <p><strong>Pour une urgence, l’appel reste le plus rapide :</strong></p>
        ${callBtn('formulaire-colonne', { text: `Appeler le ${SITE.phoneDisplay}` })}
        <div class="mt-32">${checklist()}</div>
        <p class="mt-24">Par email : <a href="mailto:${SITE.email}">${SITE.email}</a></p>
      </div>

      <form class="form" id="intervention-form" novalidate>
        <div class="form__alert" id="form-success" role="status" aria-live="polite"></div>
        <div class="form__alert form__alert--error" id="form-error" role="alert" aria-live="assertive"></div>

        <div class="form__row">
          <label class="field">
            <span class="field__label">Nom</span>
            <input type="text" name="nom" autocomplete="name" required placeholder="Votre nom">
          </label>
          <label class="field">
            <span class="field__label">Téléphone</span>
            <input type="tel" name="telephone" autocomplete="tel" inputmode="tel" required placeholder="06 ...">
          </label>
        </div>

        <div class="form__row">
          <label class="field">
            <span class="field__label">Ville</span>
            <input type="text" name="ville" autocomplete="address-level2" required placeholder="Ville (29 ou 56)">
          </label>
          <label class="field">
            <span class="field__label">Type de problème</span>
            <select name="probleme" required>
              <option value="">Choisir…</option>
              <option>Canalisation bouchée</option>
              <option>WC bouché</option>
              <option>Évier / lavabo bouché</option>
              <option>Douche qui refoule</option>
              <option>Dégorgement</option>
              <option>Fuite d’eau</option>
              <option>Recherche de fuite</option>
              <option>Dépannage plomberie</option>
              <option>Urgence plomberie</option>
              <option>Autre</option>
            </select>
          </label>
        </div>

        <label class="field">
          <span class="field__label">Message <span>(facultatif)</span></span>
          <textarea name="message" rows="4" placeholder="Décrivez brièvement la situation"></textarea>
        </label>

        <div class="visually-hidden" aria-hidden="true">
          <label>Ne pas remplir<input type="text" name="website" tabindex="-1" autocomplete="off"></label>
        </div>

        <button class="btn btn--primary btn--lg btn--block" type="submit" data-cta="envoi-formulaire" data-location="formulaire">
          Demander une intervention
        </button>
        <p class="form__note">Les informations transmises servent uniquement à traiter votre demande d’intervention.
        Voir la <a href="politique-confidentialite.html">politique de confidentialité</a>.</p>
      </form>
    </div>
  </div>
</section>`;

export const footer = () => `
<footer class="site-footer">
  <div class="container">
    <div class="footer__grid">
      <div>
        <img class="footer__logo" src="assets/logo-plombier-breizh-vertical.png" alt="${SITE.name} — Dépannage, Installation, Rénovation"
             width="114" height="92" loading="lazy"
             onerror="this.onerror=null;this.src='assets/logo-plombier-breizh-vertical.svg';">
        <p class="footer__tagline">Plomberie • Débouchage • Dégorgement • Urgence</p>
        <p>Finistère 29 • Morbihan 56</p>
      </div>
      <div>
        <h3>Interventions</h3>
        <ul class="footer__list">
          <li><a href="plomberie.html">Plomberie & dépannage</a></li>
          <li><a href="debouchage.html">Débouchage de canalisation</a></li>
          <li><a href="degorgement.html">Dégorgement</a></li>
          <li><a href="urgence-plomberie.html">Urgence plomberie</a></li>
          <li><a href="zones-intervention.html">Zones d’intervention</a></li>
        </ul>
      </div>
      <div>
        <h3>Informations</h3>
        <ul class="footer__list">
          <li><a href="contact.html">Contact</a></li>
          <li><a href="mentions-legales.html">Mentions légales</a></li>
          <li><a href="politique-confidentialite.html">Politique de confidentialité</a></li>
        </ul>
      </div>
      <div>
        <h3>Nous contacter</h3>
        <a class="footer__phone" href="${SITE.phoneHref}" data-location="footer" data-cta="appel-footer">${SITE.phoneDisplay}</a>
        <ul class="footer__list">
          <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
        </ul>
        ${formBtn('footer', { variant: 'primary', size: '', block: true })}
      </div>
    </div>
    <div class="footer__bottom">
      <p class="mb-0">© <span id="year">2026</span> ${SITE.name}. Tous droits réservés.</p>
      <ul>
        <li><a href="mentions-legales.html">Mentions légales</a></li>
        <li><a href="politique-confidentialite.html">Politique de confidentialité</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
  </div>
</footer>

<div class="sticky-cta" aria-label="Contact rapide">
  <a class="sticky-cta__call" href="${SITE.phoneHref}" data-location="sticky-mobile" data-cta="appel-sticky">
    <span aria-hidden="true">📞</span> Appeler — ${SITE.phoneDisplay}
  </a>
  <a class="sticky-cta__form" href="#demande-intervention" data-location="sticky-mobile" data-cta="demande-sticky">Intervention</a>
</div>

<script src="assets/js/site.js" defer></script>
<script>document.getElementById('year').textContent=new Date().getFullYear();</script>
</body>
</html>`;

/** Assemble une page complète. */
export const page = ({ title, description, slug, nav, body }) =>
  `${head({ title, description, slug })}
<body data-page="${slug}">
${header(nav)}
<main id="contenu">
${body}
</main>
${footer()}`;

/* Hero compact pour les pages internes / landing pages SEA. */
export const pageHero = ({ tag, h1, sub, img, alt, location, photo = false }) => `
<section class="hero">
  <div class="container">
    <div class="hero__grid">
      <div>
        <span class="hero__tag">${tag}</span>
        <h1>${h1}</h1>
        <p class="hero__sub">${sub}</p>
        <div class="hero__cta">
          ${callBtn(location, { text: `Appeler le ${SITE.phoneDisplay}` })}
          ${formBtn(location)}
        </div>
        ${checklist(undefined, true)}
      </div>
      <div class="hero__media">
        ${photo ? heroPhoto(img, alt) : `<img src="assets/img/${img}.svg" alt="${alt}" width="960" height="720" fetchpriority="high" decoding="async">`}
        <span class="hero__badge">Finistère 29 · Morbihan 56</span>
      </div>
    </div>
  </div>
</section>`;
