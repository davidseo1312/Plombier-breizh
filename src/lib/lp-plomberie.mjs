/* ==========================================================================
   LANDING PAGE GOOGLE ADS — PLOMBERIE UNIQUEMENT
   --------------------------------------------------------------------------
   Page volontairement courte et linéaire : on comprend en un écran qu'on est
   plombier, où l'on intervient, et qu'il suffit d'appeler.

   Aucune mention de débouchage, de dégorgement ni de canalisation bouchée :
   ces prestations ont leurs propres pages. Aucun bandeau d'urgence répété
   juste sous le premier écran.

   Ordre : hero · services · pourquoi nous · matériel · avis · déroulé ·
           zone · FAQ · formulaire · appel final.
   ========================================================================== */
import { SITE, callBtn, formBtn, tel } from './layout.mjs';
import { servicePhoto } from './services.mjs';

const RAPPEL = 'Être rappelé';

/* Carte d'intervention : photo, titre, deux lignes. Pas de bouton par carte —
   les appels à l'action sont regroupés sous la grille. */
const carte = (img, titre, texte) => `
      <article class="card">
        <div class="card__media">${servicePhoto(img, `${titre} — ${SITE.name}`)}</div>
        <div class="card__body">
          <h3 class="card__title">${titre}</h3>
          <p class="card__text" style="margin-bottom:0">${texte}</p>
        </div>
      </article>`;

export const landingPlomberie = ({
  slug, dept, article, num, cities,
  title, description,
  tag, h1, sub,
  heroImg, heroAlt, heroCamion = false,
  services,
  materielIntro, materiel,
  avis,
  etapes,
  zoneTexte,
  faq,
  formIntro,
  ctaFinalTexte
}) => ({
  slug,
  nav: '',
  minimalNav: true,
  /* Données structurées limitées à la plomberie : cette page ne parle que de ça. */
  offres: ['Dépannage plomberie', 'Réparation de fuite d’eau', 'Recherche de fuite',
           'Intervention sur chauffe-eau', 'Robinetterie et sanitaires'],
  enTete: { services: 'Fuite d’eau • Recherche de fuite • Chauffe-eau • Robinetterie' },
  pied: {
    liens: false,
    tagline: 'Plomberie • Fuite d’eau • Recherche de fuite • Chauffe-eau',
    stickyTexte: 'Appeler maintenant',
    ctaTexte: RAPPEL,
    colonnes: `
      <div>
        <h3>Nos interventions</h3>
        <ul class="footer__list">
          <li>Fuite d’eau et recherche de fuite</li>
          <li>Chauffe-eau et eau chaude</li>
          <li>Robinetterie et sanitaires</li>
          <li>Réparation de plomberie</li>
        </ul>
      </div>
      <div>
        <h3>Zone d’intervention</h3>
        <ul class="footer__list">
          <li>${dept} (${num})</li>
          <li>${cities.slice(0, 3).join(' · ')}</li>
          <li>${cities.slice(3).join(' · ')}</li>
        </ul>
      </div>`
  },
  title,
  description,
  body: `
<!-- 1. PREMIER ÉCRAN ------------------------------------------------------ -->
<section class="hero">
  <div class="container">
    <div class="hero__grid">
      <div>
        <span class="hero__tag">${tag}</span>
        <h1>${h1}</h1>
        <p class="hero__sub">${sub}</p>
        <div class="hero__cta">
          ${callBtn(`hero-${slug}`, { text: `Appeler le ${SITE.phoneDisplay}` })}
          ${formBtn(`hero-${slug}`, { text: RAPPEL })}
        </div>
      </div>
      <div class="hero__media">
        ${heroCamion
          ? `<img src="/assets/img/hero-plombier-breizh-camion.jpg" alt="${heroAlt}"
             width="1536" height="1024" fetchpriority="high" decoding="async"
             onerror="this.onerror=null;this.src='/assets/img/hero-plombier-intervention.svg';">`
          : `<img src="/assets/photos/${heroImg}.jpg" alt="${heroAlt}" width="1100" height="733"
             fetchpriority="high" decoding="async"
             onerror="this.onerror=null;this.src='/assets/img/${heroImg}.svg';">`}
        <span class="hero__badge">${dept} — ${num}</span>
      </div>
    </div>
  </div>
</section>

<!-- 2. CE QUE NOUS RÉPARONS ----------------------------------------------- -->
<section class="section section--tint">
  <div class="container">
    <div class="section__head section__head--center">
      <span class="eyebrow">Nos interventions</span>
      <h2>Ce que nous réparons dans ${article} ${dept}</h2>
    </div>
    <div class="grid grid--3">${services.map(([img, titre, texte]) => carte(img, titre, texte)).join('')}
    </div>
    <div class="btn-row mt-32">
      ${callBtn(`services-${slug}`, { text: `Appeler le ${SITE.phoneDisplay}` })}
      ${formBtn(`services-${slug}`, { variant: 'outline', text: RAPPEL })}
    </div>
  </div>
</section>

<!-- 3. POURQUOI NOUS ------------------------------------------------------ -->
<section class="section" id="pourquoi">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Pourquoi nous</span>
      <h2>Pourquoi appeler Plombier Breizh</h2>
    </div>
    <div class="grid grid--3">
      <div class="tile">
        <h3>Vous parlez à quelqu’un du métier</h3>
        <p>Pas de standard : la personne au bout du fil connaît le métier et cerne le problème dès l’appel.</p>
      </div>
      <div class="tile">
        <h3>On cherche avant d’ouvrir</h3>
        <p>On localise l’origine du problème avant de toucher à un mur, une cloison ou une dalle.</p>
      </div>
      <div class="tile">
        <h3>On explique ce qu’on a trouvé</h3>
        <p>Vous savez ce qui a été constaté, ce qui a été fait, et ce qu’il reste éventuellement à prévoir.</p>
      </div>
    </div>
  </div>
</section>

<!-- 4. MATÉRIEL / PREUVES ------------------------------------------------- -->
<section class="section section--dark">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Sur le terrain</span>
      <h2>Le matériel qui part avec le technicien</h2>
      <p class="lead">${materielIntro}</p>
    </div>
    <div class="equip">
      ${materiel.map(([img, titre, texte]) =>
        `<figure class="equip__item">${servicePhoto(img, titre)}<figcaption><h3>${titre}</h3><p>${texte}</p></figcaption></figure>`
      ).join('\n      ')}
    </div>
    <div class="btn-row mt-32">
      ${callBtn(`materiel-${slug}`, { text: 'Parler à un plombier' })}
      ${formBtn(`materiel-${slug}`, { variant: 'outline-light', text: RAPPEL })}
    </div>
  </div>
</section>

<!-- 5. AVIS --------------------------------------------------------------- -->
<section class="section section--paper" id="avis">
  <div class="container">
    <div class="section__head section__head--center">
      <span class="eyebrow">Avis</span>
      <h2>Ce que disent nos clients</h2>
    </div>
    <div class="grid grid--2">
      ${avis.map(a => `
      <article class="review">
        <p class="review__stars" aria-label="Note : ${a.note} sur 5">${'★'.repeat(a.note)}<span class="review__stars-off">${'☆'.repeat(5 - a.note)}</span></p>
        <p class="review__text">« ${a.texte} »</p>
        <p class="review__author">
          <span class="review__name">${a.nom}</span>
          <span class="review__city">${a.ville} (${a.dept})</span>
        </p>
      </article>`).join('')}
    </div>
  </div>
</section>

<!-- 6. DÉROULÉ ------------------------------------------------------------ -->
<section class="section">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Comment ça se passe</span>
      <h2>Une intervention en trois temps</h2>
    </div>
    <div class="steps">
      ${etapes.map(([num_, titre, texte]) => `
      <div class="steps__item">
        <span class="steps__num">${num_}</span>
        <h3>${titre}</h3>
        <p>${texte}</p>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- 7. ZONE D'INTERVENTION ------------------------------------------------ -->
<section class="section section--tint">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Zone d’intervention</span>
      <h2>Zones d’intervention dans ${article} ${dept}</h2>
      <p class="lead">${zoneTexte}</p>
    </div>
    <ul class="communes">
      ${cities.map(v => `<li>${v}</li>`).join('\n      ')}
    </ul>
    <div class="notice mt-32">
      <p class="mb-0">Votre commune n’est pas dans la liste ? Appelez le
      ${tel(`zone-${slug}`, `<strong>${SITE.phoneDisplay}</strong>`)} : nous vous dirons tout de suite si nous pouvons intervenir.</p>
    </div>
  </div>
</section>

<!-- 8. FAQ ---------------------------------------------------------------- -->
<section class="section">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Questions fréquentes</span>
      <h2>Ce qu’on nous demande le plus souvent</h2>
    </div>
    <div class="faq">
      ${faq.map(([q, r]) => `
      <details class="faq__item">
        <summary>${q}</summary>
        <p>${r}</p>
      </details>`).join('')}
    </div>
  </div>
</section>

<!-- 9. FORMULAIRE --------------------------------------------------------- -->
<section class="section section--tint" id="demande-intervention">
  <div class="container">
    <div class="form-block">
      <div>
        <span class="eyebrow">Contact</span>
        <h2>Être rappelé</h2>
        <p class="lead">${formIntro}</p>
        <p><strong>Pour une intervention urgente, l’appel reste le plus rapide :</strong></p>
        ${callBtn(`formulaire-${slug}-colonne`, { text: `Appeler le ${SITE.phoneDisplay}` })}
        <p class="mt-24">Par email : <a href="mailto:${SITE.email}">${SITE.email}</a></p>
      </div>

      <form class="form" id="intervention-form" novalidate>
        <div class="form__alert" id="form-success" role="status" aria-live="polite"></div>
        <div class="form__alert form__alert--error" id="form-error" role="alert" aria-live="assertive"></div>

        <div class="form__row">
          <label class="field">
            <span class="field__label">Téléphone</span>
            <input type="tel" name="telephone" autocomplete="tel" inputmode="tel" required placeholder="06 12 34 56 78">
          </label>
          <label class="field">
            <span class="field__label">Commune</span>
            <input type="text" name="ville" autocomplete="address-level2" required placeholder="Votre commune">
          </label>
        </div>

        <label class="field">
          <span class="field__label">Type de problème</span>
          <select name="probleme" required>
            <option value="">Choisir…</option>
            <option>Fuite d’eau</option>
            <option>Recherche de fuite</option>
            <option>Chauffe-eau / eau chaude</option>
            <option>Robinetterie</option>
            <option>Sanitaires</option>
            <option>Autre problème de plomberie</option>
          </select>
        </label>

        <label class="field">
          <span class="field__label">Précisions <span>(facultatif)</span></span>
          <textarea name="message" rows="3" placeholder="En quelques mots, ce que vous constatez"></textarea>
        </label>

        <div class="visually-hidden" aria-hidden="true">
          <label>Ne pas remplir<input type="text" name="website" tabindex="-1" autocomplete="off"></label>
        </div>

        <button class="btn btn--primary btn--lg btn--block" type="submit" data-cta="envoi-formulaire" data-location="formulaire-${slug}">
          ${RAPPEL}
        </button>
        <p class="form__note">Vos informations servent uniquement à traiter votre demande.
        Voir la <a href="/politique-confidentialite">politique de confidentialité</a>.</p>
      </form>
    </div>
  </div>
</section>

<!-- 10. APPEL FINAL ------------------------------------------------------- -->
<section class="phone-block">
  <div class="container">
    <h2>Un plombier dans ${article} ${dept} ?</h2>
    <p>${ctaFinalTexte}</p>
    <div>
      <a class="phone-block__number" href="${SITE.phoneHref}" data-location="cta-final-${slug}" data-cta="numero-final">${SITE.phoneDisplay}</a>
    </div>
    <div class="btn-row">
      ${callBtn(`cta-final-${slug}`, { variant: 'dark', text: 'Appeler maintenant' })}
    </div>
  </div>
</section>
`
});
