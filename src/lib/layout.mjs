/* ==========================================================================
   Plombier Breizh — composants partagés
   Toutes les pages sont générées à partir de ce fichier (`node build.mjs`).
   Ne modifiez pas les .html à la racine : ils sont régénérés.
   ========================================================================== */

export const SITE = {
  name: 'Plombier Breizh',
  phoneDisplay: '02 20 06 01 96',
  phoneHref: 'tel:0220060196',
  email: 'contact@plombier-breizh.fr',
  region: 'Bretagne',
  baseUrl: 'https://www.plombier-breizh.fr'
};

export const NAV = [
  { href: 'index.html', label: 'Accueil', key: 'accueil' },
  { href: 'plomberie.html', label: 'Plomberie', key: 'plomberie' },
  { href: 'debouchage.html', label: 'Débouchage', key: 'debouchage' },
  { href: 'degorgement.html', label: 'Dégorgement', key: 'degorgement' },
  { href: 'urgence-plomberie.html', label: 'Urgence', key: 'urgence' },
  { href: 'bretagne.html', label: 'Bretagne', key: 'bretagne' }
];

/* -------------------------------------------------------------------------
   Briques réutilisables
   ------------------------------------------------------------------------- */

/** Lien téléphone tracké — data-location alimente l'événement phone_click. */
export const tel = (location, label = SITE.phoneDisplay, classes = '') =>
  `<a href="${SITE.phoneHref}" ${classes ? `class="${classes}" ` : ''}data-location="${location}">${label}</a>`;

/** Bouton d'appel rectangulaire. */
export const callBtn = (location, { variant = 'primary', size = 'lg', text = `Appeler le ${SITE.phoneDisplay}`, block = false } = {}) =>
  `<a class="btn btn--${variant}${size ? ` btn--${size}` : ''}${block ? ' btn--block' : ''}" href="${SITE.phoneHref}" data-location="${location}" data-cta="appel">
        <span aria-hidden="true">📞</span> ${text}
      </a>`;

/** Bouton vers le formulaire d'intervention. */
export const formBtn = (location, { variant = 'accent', size = 'lg', text = 'Demander une intervention', block = false, href = '#demande-intervention' } = {}) =>
  `<a class="btn btn--${variant}${size ? ` btn--${size}` : ''}${block ? ' btn--block' : ''}" href="${href}" data-location="${location}" data-cta="demande-intervention">${text}</a>`;

export const REASSURANCE = [
  'Intervention rapide',
  'Techniciens expérimentés',
  'Équipements professionnels',
  'Dépannage plomberie',
  'Débouchage &amp; dégorgement'
];

export const checklist = (items = REASSURANCE, inline = false) =>
  `<ul class="checklist${inline ? ' checklist--inline' : ''}">
        ${items.map(i => `<li>${i}</li>`).join('\n        ')}
      </ul>`;

/* -------------------------------------------------------------------------
   LOGO OFFICIEL — dépôt libre
   Le site essaie successivement TOUS les noms et formats ci-dessous, puis
   se rabat sur le nom de l'entreprise écrit en toutes lettres.
   Aucun logo n'est dessiné ni reconstitué : seul VOTRE fichier s'affiche.
   Déposez-le dans assets/ sous n'importe lequel de ces noms.
   ------------------------------------------------------------------------- */
export const LOGO_FILES = [
  'assets/logo-plombier-breizh.png',
  'assets/logo-plombier-breizh.webp',
  'assets/logo-plombier-breizh.jpg',
  'assets/logo-plombier-breizh.jpeg',
  'assets/logo-plombier-breizh.svg',
  'assets/logo.png', 'assets/logo.webp', 'assets/logo.jpg', 'assets/logo.jpeg', 'assets/logo.svg'
];

/* Variante verticale (footer). Si elle n'existe pas, le logo principal prend
   le relais : un seul fichier déposé suffit à équiper tout le site. */
export const LOGO_FILES_VERTICAL = [
  'assets/logo-plombier-breizh-vertical.png',
  'assets/logo-plombier-breizh-vertical.webp',
  'assets/logo-plombier-breizh-vertical.jpg',
  'assets/logo-plombier-breizh-vertical.svg',
  ...LOGO_FILES
];

/** <img> qui parcourt la liste de repli, puis laisse place au nom écrit. */
const logoImg = ({ files, cls, alt, width, height, lazy = false }) => {
  const [first, ...rest] = files;
  return `<img class="${cls}" src="${first}" alt="${alt}" width="${width}" height="${height}"${lazy ? ' loading="lazy"' : ''}
           data-logo-fallbacks="${rest.join(',')}" onerror="PBLogo(this)">`;
};


/* -------------------------------------------------------------------------
   PHOTO PRINCIPALE — technicien + camion Plombier Breizh
   Déposez `assets/img/hero-plombier-breizh-camion.jpg` pour l'activer.
   Tant que le fichier est absent, le visuel de substitution s'affiche.
   ------------------------------------------------------------------------- */
export const heroPhoto = (fallback = 'hero-plombier-intervention',
  alt = 'Technicien Plombier Breizh devant son camion d’intervention') =>
  `<img src="assets/img/hero-plombier-breizh-camion.jpg" alt="${alt}"
             width="1536" height="1024" fetchpriority="high" decoding="async"
             onerror="this.onerror=null;this.src='assets/img/${fallback}.svg';">`;

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
    { '@type': 'AdministrativeArea', name: 'Bretagne' },
    { '@type': 'AdministrativeArea', name: 'Finistère (29)' },
    { '@type': 'AdministrativeArea', name: 'Morbihan (56)' }
  ],
  makesOffer: [
    'Dépannage plomberie', 'Débouchage de canalisation', 'Dégorgement',
    'Recherche de fuite', 'Intervention de plomberie urgente'
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
<meta name="theme-color" content="#00AEEF">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:locale" content="fr_FR">
<link rel="icon" href="assets/favicon.png">
<link rel="preload" href="assets/fonts/lato-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="assets/fonts/lato-700.woff2" as="font" type="font/woff2" crossorigin>
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
<script>
/* Repli du logo : parcourt les noms/formats possibles, puis affiche le nom
   de l'entreprise en toutes lettres. Aucun logo n'est reconstitué. */
function PBLogo(img){
  var list=(img.getAttribute('data-logo-fallbacks')||'').split(',').filter(Boolean);
  var i=parseInt(img.getAttribute('data-logo-step')||'0',10);
  if(i<list.length){img.setAttribute('data-logo-step',i+1);img.src=list[i].trim();return;}
  img.onerror=null;img.style.display='none';
  var t=img.parentNode&&img.parentNode.querySelector('.brand-fallback');
  if(t){t.hidden=false;}
}
</script>
<script>window.PB_CONFIG={formEndpoint:'',contactEmail:'${SITE.email}',phoneDisplay:'${SITE.phoneDisplay}'};</script>
</head>`;

/** `minimal` : header allégé des landing pages SEA (moins de distractions). */
export const header = (current, minimal = false) => `
<a class="visually-hidden" href="#contenu">Aller au contenu</a>
<div class="topbar">
  <div class="container">
    <ul class="topbar__list">
      <li><span class="topbar__tag">Bretagne</span> — Finistère 29 &amp; Morbihan 56</li>
      <li><span class="topbar__tag">Email</span> <a href="mailto:${SITE.email}">${SITE.email}</a></li>
    </ul>
    <ul class="topbar__list">
      <li>Plomberie • Débouchage • Dégorgement • Urgence</li>
    </ul>
  </div>
</div>

<header class="site-header">
  <div class="container">
    <a class="brand" href="index.html" aria-label="${SITE.name} — accueil">
      ${logoImg({ files: LOGO_FILES, cls: 'brand__logo', alt: SITE.name, width: 100, height: 76 })}
      <span class="brand-fallback brand-fallback--header" hidden>Plombier<span>Breizh</span></span>
    </a>

    <a class="header-call" href="${SITE.phoneHref}" data-location="header-mobile" data-cta="appel-mobile">
      <span aria-hidden="true">📞</span><span class="header-call__text">${SITE.phoneDisplay}</span>
    </a>
${minimal ? '' : `
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Ouvrir le menu">
      <span></span>
    </button>

    <nav class="main-nav" id="main-nav" aria-label="Navigation principale">
      <ul class="main-nav__list">
        ${NAV.map(n => `<li><a href="${n.href}"${n.key === current ? ' aria-current="page"' : ''}>${n.label}</a></li>`).join('\n        ')}
      </ul>
    </nav>`}
    <div class="header-cta"${minimal ? ' style="margin-left:auto"' : ''}>
      <a class="header-phone" href="${SITE.phoneHref}" data-location="header-desktop" data-cta="appel-header">
        <span class="header-phone__label">Une urgence ?</span>
        <span class="header-phone__number">${SITE.phoneDisplay}</span>
      </a>
      ${callBtn('header-desktop-bouton', { size: '', text: 'Appeler maintenant' })}
    </div>
  </div>
</header>`;

/* Bandeau urgence — bleu clair, très visible. */
export const urgencyBand = (location = 'bandeau-urgence') => `
<section class="urgency" aria-label="Urgence plomberie">
  <div class="container">
    <div>
      <p class="urgency__title">Une urgence plomberie ?</p>
      <p class="urgency__text">Ne laissez pas une fuite ou une canalisation bouchée s’aggraver.</p>
    </div>
    <div class="urgency__phone">
      <a class="urgency__number" href="${SITE.phoneHref}" data-location="${location}" data-cta="numero-bandeau">${SITE.phoneDisplay}</a>
      ${callBtn(location, { variant: 'dark', size: '', text: 'Appeler maintenant' })}
    </div>
  </div>
</section>`;

/* Bande CTA sombre, à placer après les sections clés. */
export const ctaBand = ({
  title = 'Parler à un plombier',
  text = 'Décrivez votre situation en quelques mots, nous vous indiquons l’intervention adaptée.',
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

/* Bloc téléphone plein écran — le numéro en très grand. */
export const phoneBlock = ({
  title = 'Besoin d’une intervention rapidement ?',
  text = 'Un appel suffit. Nous évaluons votre besoin et organisons le passage d’un technicien.',
  location = 'bloc-telephone'
} = {}) => `
<section class="phone-block">
  <div class="container">
    <h2>${title}</h2>
    <p>${text}</p>
    <div>
      <a class="phone-block__number" href="${SITE.phoneHref}" data-location="${location}" data-cta="numero-geant">${SITE.phoneDisplay}</a>
    </div>
    <div class="btn-row">
      ${callBtn(location, { variant: 'dark', text: 'Appeler maintenant' })}
      ${formBtn(location, { variant: 'outline' })}
    </div>
  </div>
</section>`;

/* Processus en 3 étapes. */
export const processSection = (location = 'process') => `
<section class="section section--tint" id="intervention">
  <div class="container">
    <div class="section__head section__head--center">
      <span class="eyebrow">Comment ça se passe</span>
      <h2>Une intervention simple, du premier appel au dépannage</h2>
      <p class="lead">Vous appelez, nous évaluons, un technicien intervient. Pas d’étape inutile.</p>
    </div>
    <div class="steps">
      <div class="steps__item">
        <span class="steps__num">Étape 1</span>
        <h3>Vous nous appelez</h3>
        <p>Vous décrivez le problème au ${SITE.phoneDisplay}. Nous notons l’adresse, la nature de la panne et son degré d’urgence.</p>
      </div>
      <div class="steps__item">
        <span class="steps__num">Étape 2</span>
        <h3>Nous évaluons le besoin</h3>
        <p>Nous déterminons avec vous le type d’intervention et le matériel à prévoir : débouchage, dégorgement, recherche de fuite ou dépannage.</p>
      </div>
      <div class="steps__item">
        <span class="steps__num">Étape 3</span>
        <h3>Un technicien intervient</h3>
        <p>Il se rend sur place avec l’équipement adapté, constate la situation et procède à l’intervention.</p>
      </div>
    </div>
    <div class="btn-row mt-32">
      ${callBtn(location, { text: `Appeler le ${SITE.phoneDisplay}` })}
      ${formBtn(location, { variant: 'outline' })}
    </div>
  </div>
</section>`;

/* Pourquoi choisir Plombier Breizh — réassurance sans rien inventer. */
export const whySection = (location = 'pourquoi', intro = 'Ce sur quoi vous pouvez compter en nous appelant.') => `
<section class="section" id="pourquoi">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Pourquoi nous</span>
      <h2>Pourquoi choisir Plombier Breizh ?</h2>
      <p class="lead">${intro}</p>
    </div>
    <div class="grid grid--3">
      <div class="tile">
        <h3>On vous répond directement</h3>
        <p>Vous parlez à quelqu’un qui connaît le métier, pas à un standard. Le problème est cerné dès l’appel.</p>
      </div>
      <div class="tile">
        <h3>Le bon matériel au bon moment</h3>
        <p>Furet électrique, haute pression, caméra d’inspection : le camion part avec ce que la situation demande.</p>
      </div>
      <div class="tile">
        <h3>Des techniciens expérimentés</h3>
        <p>Débouchage, dégorgement, fuite, dépannage : des interventions faites tous les jours, sans improvisation.</p>
      </div>
      <div class="tile">
        <h3>On explique ce qu’on fait</h3>
        <p>Vous savez ce qui a causé le problème et ce qui a été fait pour le régler.</p>
      </div>
      <div class="tile">
        <h3>Une entreprise bretonne</h3>
        <p>Plombier Breizh intervient en Bretagne, avec une présence marquée dans le Finistère et le Morbihan.</p>
      </div>
      <div class="tile">
        <h3>Un seul numéro</h3>
        <p>${tel(location + '-tuile', `<strong>${SITE.phoneDisplay}</strong>`)} pour un dépannage, un débouchage ou une urgence.</p>
      </div>
    </div>
  </div>
</section>`;

/* Avis clients — carrousel coulissant de droite à gauche.
   Les avis proviennent de src/lib/reviews.mjs : ce sont de vrais avis fournis
   par l'entreprise, aucun n'est inventé. */
const etoiles = (note) => {
  const pleines = '★'.repeat(note);
  const vides = '☆'.repeat(5 - note);
  return `<p class="review__stars" aria-label="Note : ${note} sur 5">${pleines}<span class="review__stars-off">${vides}</span></p>`;
};

const carteAvis = (a) => `
          <article class="review carousel__slide">
            ${etoiles(a.note)}
            <p class="review__text">« ${a.texte} »</p>
            <p class="review__author">
              <span class="review__name">${a.nom}</span>
              <span class="review__city">${a.ville} (${a.dept})</span>
            </p>
          </article>`;

export const reviewsSection = (avis = [], dark = false) => `
<section class="section${dark ? ' section--dark' : ' section--paper'}" id="avis">
  <div class="container">
    <div class="section__head section__head--center">
      <span class="eyebrow">Avis</span>
      <h2>Les avis de nos clients</h2>
      <p class="lead">Votre satisfaction est au cœur de nos interventions.</p>
      <p class="google-badge">
        <img src="assets/img/google-reviews.png" alt="Avis Google" width="309" height="130" loading="lazy" decoding="async">
        <span class="google-badge__text">Avis clients<br><strong>Plombier Breizh</strong></span>
      </p>
    </div>

    <div class="carousel" data-carousel>
      <div class="carousel__track" data-carousel-track tabindex="0" role="region"
           aria-label="Avis clients, faites défiler horizontalement">
        ${avis.map(carteAvis).join('')}
      </div>
      <div class="carousel__controls" data-carousel-controls hidden>
        <button class="carousel__btn" type="button" data-carousel-prev aria-label="Avis précédents">
          <span aria-hidden="true">‹</span>
        </button>
        <span class="carousel__count"><span data-carousel-current>1</span> / ${avis.length}</span>
        <button class="carousel__btn" type="button" data-carousel-next aria-label="Avis suivants">
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </div>
  </div>
</section>`;

/* La Bretagne, avec mise en avant du 29 et du 56. */
export const bretagneSection = (location = 'bretagne') => `
<section class="section" id="bretagne">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Zone d’intervention</span>
      <h2>Plombier Breizh intervient en Bretagne</h2>
      <p class="lead">Nous travaillons partout en Bretagne pour la plomberie, le débouchage et le dégorgement,
      avec une présence particulièrement forte sur deux départements.</p>
    </div>
    <div class="grid grid--2">
      <div class="zone">
        <div class="zone__head"><h3>Finistère</h3><span class="zone__num">29</span></div>
        <div class="zone__body">
          <p>De Brest à Quimper, nous intervenons sur les problèmes de canalisation, les fuites et le
          dépannage courant, en ville comme en périphérie.</p>
          <ul class="zone__cities">
            <li>Brest</li><li>Quimper</li><li>Morlaix</li><li>Concarneau</li><li>Landerneau</li><li>Quimperlé</li>
          </ul>
          <div class="mt-24"><a class="btn btn--accent btn--block" href="finistere-29.html" data-cta="lp-29" data-location="${location}">Plombier dans le Finistère</a></div>
        </div>
      </div>
      <div class="zone">
        <div class="zone__head"><h3>Morbihan</h3><span class="zone__num">56</span></div>
        <div class="zone__body">
          <p>De Vannes à Lorient, nous prenons en charge les évacuations bouchées, les dégorgements et
          les urgences de plomberie, sur le littoral comme à l’intérieur.</p>
          <ul class="zone__cities">
            <li>Vannes</li><li>Lorient</li><li>Lanester</li><li>Auray</li><li>Pontivy</li><li>Hennebont</li>
          </ul>
          <div class="mt-24"><a class="btn btn--accent btn--block" href="morbihan-56.html" data-cta="lp-56" data-location="${location}">Plombier dans le Morbihan</a></div>
        </div>
      </div>
    </div>
    <div class="notice mt-32">
      <p class="mb-0">Vous n’êtes pas sûr que nous intervenions chez vous ? Appelez-nous au
      ${tel(location + '-commune', `<strong>${SITE.phoneDisplay}</strong>`)}, nous vous répondons tout de suite.</p>
    </div>
  </div>
</section>`;

/* Formulaire court. */
export const formSection = ({
  title = 'Demander une intervention',
  intro = 'Laissez-nous vos coordonnées et le problème rencontré : nous vous rappelons pour organiser l’intervention.',
  location = 'formulaire',
  tint = false
} = {}) => `
<section class="section${tint ? ' section--tint' : ''}" id="demande-intervention">
  <div class="container">
    <div class="form-block">
      <div>
        <span class="eyebrow">Contact</span>
        <h2>${title}</h2>
        <p class="lead">${intro}</p>
        <p><strong>Pour une urgence, l’appel reste le plus rapide :</strong></p>
        ${callBtn(location + '-colonne', { text: `Appeler le ${SITE.phoneDisplay}` })}
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
            <input type="tel" name="telephone" autocomplete="tel" inputmode="tel" required placeholder="06 12 34 56 78">
          </label>
        </div>

        <div class="form__row">
          <label class="field">
            <span class="field__label">Ville</span>
            <input type="text" name="ville" autocomplete="address-level2" required placeholder="Votre commune">
          </label>
          <label class="field">
            <span class="field__label">Type de problème</span>
            <select name="probleme" required>
              <option value="">Choisir…</option>
              <option>Canalisation bouchée</option>
              <option>WC bouché</option>
              <option>Évier bouché</option>
              <option>Douche bouchée</option>
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
          <textarea name="message" rows="4" placeholder="En quelques mots, ce qui se passe"></textarea>
        </label>

        <div class="visually-hidden" aria-hidden="true">
          <label>Ne pas remplir<input type="text" name="website" tabindex="-1" autocomplete="off"></label>
        </div>

        <button class="btn btn--primary btn--lg btn--block" type="submit" data-cta="envoi-formulaire" data-location="${location}">
          Demander une intervention
        </button>
        <p class="form__note">Vos informations servent uniquement à traiter votre demande.
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
        ${logoImg({ files: LOGO_FILES_VERTICAL, cls: 'footer__logo', alt: SITE.name, width: 148, height: 112, lazy: true })}
        <span class="brand-fallback brand-fallback--footer" hidden>Plombier<span>Breizh</span></span>
        <p class="footer__tagline">Plomberie • Débouchage • Dégorgement • Urgence</p>
        <p>Intervention en Bretagne — Finistère 29 &amp; Morbihan 56</p>
      </div>
      <div>
        <h3>Nos interventions</h3>
        <ul class="footer__list">
          <li><a href="plomberie.html">Plomberie &amp; dépannage</a></li>
          <li><a href="debouchage.html">Débouchage de canalisation</a></li>
          <li><a href="degorgement.html">Dégorgement</a></li>
          <li><a href="urgence-plomberie.html">Urgence plomberie</a></li>
        </ul>
      </div>
      <div>
        <h3>Bretagne</h3>
        <ul class="footer__list">
          <li><a href="bretagne.html">Toute la Bretagne</a></li>
          <li><a href="finistere-29.html">Finistère (29)</a></li>
          <li><a href="morbihan-56.html">Morbihan (56)</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3>Nous appeler</h3>
        <a class="footer__phone" href="${SITE.phoneHref}" data-location="footer" data-cta="appel-footer">${SITE.phoneDisplay}</a>
        <ul class="footer__list">
          <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
        </ul>
        ${formBtn('footer', { variant: 'accent', size: '', block: true })}
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

/* Hero des pages internes et des landing pages. */
export const pageHero = ({ tag, h1, sub, img, alt, location, photo = false, items = REASSURANCE, badge = 'Bretagne' }) => `
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
        ${checklist(items, true)}
      </div>
      <div class="hero__media">
        ${photo ? heroPhoto(img, alt) : `<img src="assets/photos/${img}.jpg" alt="${alt}" width="1100" height="733" fetchpriority="high" decoding="async"
             onerror="this.onerror=null;this.src='assets/img/${img}.svg';">`}
        <span class="hero__badge">${badge}</span>
      </div>
    </div>
  </div>
</section>`;

/** Assemble une page complète. */
export const page = ({ title, description, slug, nav, body, minimalNav = false }) =>
  `${head({ title, description, slug })}
<body data-page="${slug}">
${header(nav, minimalNav)}
<main id="contenu">
${body}
</main>
${footer()}`;
