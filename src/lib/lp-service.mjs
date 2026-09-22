/* ==========================================================================
   LANDING PAGE GOOGLE ADS — UN SEUL MÉTIER, UN SEUL DÉPARTEMENT
   --------------------------------------------------------------------------
   Objectif unique : rassurer, puis déclencher l'appel. Rien d'autre.

   Un métier par page. Une landing plomberie ne parle jamais de débouchage
   ni de dégorgement, et inversement : l'annonce Google et la page doivent
   dire la même chose, sinon le visiteur doute et repart.

   Toute la réassurance repose sur des éléments VÉRIFIABLES :
   immatriculation réelle (src/lib/entreprise.mjs), interlocuteur, coût de
   l'appel, zone couverte, photos réelles, avis réels. Aucune certification,
   garantie, note moyenne, ancienneté ni statistique n'est inventée.

   Ordre : hero · preuves · appel en 2 minutes · services · pourquoi nous ·
           pourquoi nous · interventions · tarifs · matériel · avis · zone ·
           FAQ · formulaire · l'appel en
           2 minutes · appel final.
   ========================================================================== */
import { SITE, callBtn, formBtn, tel, phoneNote, preuves, heroAvis, syntheseAvis, ligneIdentite } from './layout.mjs';
import { servicePhoto } from './services.mjs';
import { photo } from './media.mjs';
import { carte as carteZone } from './carte.mjs';
import { tarifsSection } from './tarifs.mjs';
import { hermine, bandeBreizh } from './breizh.mjs';
import { avisParDept, DEPARTEMENTS } from './reviews.mjs';

const RAPPEL = 'Être rappelé';

/* Micro-réassurance posée sous un groupe de boutons. Faits uniquement. */
/* Certains avis ont été transmis sans nom ni commune. On ne leur en invente
   pas : la signature se réduit alors au département. */
const carteAvis = (a) => `
        <article class="review">
          <p class="review__stars" aria-label="Note : ${a.note} sur 5">${'★'.repeat(a.note)}<span class="review__stars-off">${'☆'.repeat(5 - a.note)}</span></p>
          <p class="review__text">« ${a.texte} »</p>
          <p class="review__author">
            <span class="review__name">${a.nom || 'Client'}</span>
            <span class="review__city">${a.ville ? `${a.ville} (${a.dept})` : `${DEPARTEMENTS[a.dept]} (${a.dept})`}</span>
          </p>
        </article>`;

/* Un secteur par page : une page du 56 n'affiche que des avis du 56, une page
   du 29 que des avis du 29. `avisParDept` ne garde que le département de la
   page — si un avis d'un autre département se glisse dans la sélection, il est
   écarté au lieu d'être mélangé. */
const colonnes = (n) => (n === 3 ? 3 : 2);

const blocsAvis = (avis, num) => avisParDept(avis, [num])
  .map(([dept, liste]) => `
    <div class="avis-dept${liste.length === 1 ? ' avis-dept--solo' : ''}">
      <h3 class="avis-dept__titre">
        <span class="avis-dept__num">${dept}</span>
        <span>${DEPARTEMENTS[dept]} — ${liste.length} avis</span>
      </h3>
      <div class="grid grid--${colonnes(liste.length)}">${liste.map(carteAvis).join('')}
      </div>
    </div>`).join('');

const notesCta = (...items) =>
  `<div class="cta-note">${items.map(i => `<span>${i}</span>`).join('')}</div>`;

const APPEL = SITE.phoneNote;
const INTERLOCUTEUR = 'Vous parlez directement à un plombier';

/* Carte d'intervention : photo, titre, deux lignes. */
const carte = (img, titre, texte) => `
      <article class="card">
        <div class="card__media">${servicePhoto(img, `${titre} — ${SITE.name}`)}</div>
        <div class="card__body">
          <h3 class="card__title">${titre}</h3>
          <p class="card__text" style="margin-bottom:0">${texte}</p>
        </div>
      </article>`;

export const landingService = ({
  slug, dept, article, num, cities,
  /* -- métier : ce qui distingue une landing plomberie d'une landing
        dégorgement, en dehors des textes -- */
  metier = {},
  title, description,
  tag, h1, sub, subArguments,
  heroImg, heroAlt, heroCamion = false,
  servicesTitre, services,
  tarifs, tarifsTitre,
  appelTitre, appelIntro, etapes, nonFaits,
  materielTitre, materielIntro, materiel,
  infographie = false,
  avis,
  zoneTexte,
  faq,
  formIntro,
  ctaFinalTexte
}) => ({
  slug,
  nav: '',
  minimalNav: true,
  heroImage: heroCamion
    ? { chemin: '/assets/img/hero-plombier-breizh-camion', ext: 'jpg' }
    : { chemin: `/assets/photos/${heroImg}`, ext: 'jpg' },
  /* Données structurées limitées à la plomberie : cette page ne parle que de ça. */
  offres: metier.offres,
  og: metier.og,
  enTete: { services: metier.bandeau },
  pied: {
    liens: false,
    tagline: metier.tagline,
    stickyTexte: 'Appeler maintenant',
    ctaTexte: RAPPEL,
    colonnes: `
      <div>
        <h3>Nos interventions</h3>
        <ul class="footer__list">
          ${metier.piedServices.map(x => `<li>${x}</li>`).join('\n          ')}
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
<section class="hero hero--photo">
  <div class="hero__fond">${heroCamion
    ? photo({ chemin: '/assets/img/hero-plombier-breizh-camion', alt: heroAlt,
              largeur: 1536, hauteur: 1024, usage: 'hero', priorite: true,
              repli: '/assets/img/hero-plombier-intervention.svg' })
    : photo({ chemin: `/assets/photos/${heroImg}`, alt: heroAlt,
              largeur: 1100, hauteur: 733, usage: 'hero', priorite: true,
              repli: `/assets/img/${heroImg}.svg` })}</div>
  <div class="container">
    <div class="hero__panneau">
      <span class="hero__filigrane">${hermine()}</span>
      <div class="hero__contenu">
        ${bandeBreizh()}
        <span class="hero__tag">${hermine()}${tag}</span>
        <h1>${h1}</h1>
        ${subArguments && subArguments.length ? `<ul class="hero__args">
          ${subArguments.map(a => `<li>${a}</li>`).join('\n          ')}
        </ul>` : `<p class="hero__sub">${sub}</p>`}
        <div class="hero__cta">
          ${callBtn(`hero-${slug}`, { text: `Appeler le ${SITE.phoneDisplay}` })}
          ${formBtn(`hero-${slug}`, { text: RAPPEL })}
        </div>
        ${notesCta(APPEL, INTERLOCUTEUR)}
        ${heroAvis()}
        ${ligneIdentite()}
      </div>
    </div>
    <span class="hero__badge">${dept} — ${num}</span>
  </div>
</section>

<!-- 2. PREUVES VÉRIFIABLES ------------------------------------------------ -->
${preuves({ zone: `${dept} (${num})`, villes: cities.slice(0, 4).join(', ') + ' et alentours' })}

<!-- 3. POURQUOI NOUS ------------------------------------------------------
     Première section après la bande de preuves : le visiteur d'une annonce
     se demande d'abord à qui il a affaire, pas ce qu'on répare. --------- -->
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

    <div class="grid grid--2 mt-32">
      <div>
        <h3>Nos engagements</h3>
        <ul class="nolist">
          ${nonFaits.map(x => `<li>${x}</li>`).join('\n          ')}
        </ul>
      </div>
      <div class="who">
        <h3>Qui vous répond</h3>
        <p>Une entreprise bretonne, enregistrée et assurée, avec plusieurs années
        d’expérience sur le terrain. Pas une plateforme qui revend votre demande au
        premier artisan disponible.</p>
        <p>La personne qui prend l’appel est celle qui organise l’intervention, et vous
        retrouvez le même interlocuteur du premier appel jusqu’à la fin du chantier.</p>
        <p class="mt-24"><a href="/mentions-legales">Voir les mentions légales</a></p>
      </div>
    </div>
  </div>
</section>

<!-- 4. CE QUE NOUS RÉPARONS ----------------------------------------------- -->
<section class="section section--tint">
  <div class="container">
    <div class="section__head section__head--center">
      <span class="eyebrow">Nos interventions</span>
      <h2>${servicesTitre || `Ce que nous réparons dans ${article} ${dept}`}</h2>
    </div>
    <div class="grid grid--3">${services.map(([img, titre, texte]) => carte(img, titre, texte)).join('')}
    </div>
    <div class="btn-row mt-32">
      ${callBtn(`services-${slug}`, { text: `Appeler le ${SITE.phoneDisplay}` })}
      ${formBtn(`services-${slug}`, { variant: 'outline', text: RAPPEL })}
    </div>
    ${notesCta('Vous décrivez, on vous dit si c’est réparable', 'Pas de déplacement sans votre accord')}
  </div>
</section>

${tarifs ? tarifsSection(tarifs, { titre: tarifsTitre || `Nos tarifs dans ${article} ${dept}`, tint: false }) : ''}

<!-- 5. MATÉRIEL ----------------------------------------------------------- -->
<section class="section section--dark">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Sur le terrain</span>
      <h2>${materielTitre || 'Le matériel qui part avec le technicien'}</h2>
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
    ${notesCta(APPEL, INTERLOCUTEUR)}
  </div>
</section>

<!-- 6. AVIS --------------------------------------------------------------- -->
<section class="section section--creme" id="avis">
  <div class="container">
    <div class="section__head section__head--center">
      <span class="eyebrow eyebrow--tirets">${SITE.name}</span>
      <h2>Ce que disent nos clients</h2>
      <p class="lead">Uniquement des interventions réalisées dans ${article} ${dept} (${num}).</p>
    </div>
    ${blocsAvis(avis, num)}
${syntheseAvis()}
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
    <div class="zone-grid">
      ${carteZone(num)}
      <div>
        <ul class="communes">
          ${cities.map(v => `<li>${hermine()}${v}</li>`).join('\n          ')}
        </ul>
        <div class="notice mt-24">
          <p class="mb-0">Votre commune n’est pas dans la liste ? Appelez le
          ${tel(`zone-${slug}`, `<strong>${SITE.phoneDisplay}</strong>`)} : nous vous dirons tout de suite si nous pouvons intervenir.</p>
        </div>
        <div class="btn-row mt-24">
          ${callBtn(`zone-${slug}`, { text: `Appeler le ${SITE.phoneDisplay}` })}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 8. FAQ ---------------------------------------------------------------- -->
<section class="section" id="faq">
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
    <div class="btn-row mt-32">
      ${callBtn(`faq-${slug}`, { text: `Appeler le ${SITE.phoneDisplay}` })}
      ${formBtn(`faq-${slug}`, { variant: 'outline', text: RAPPEL })}
    </div>
  </div>
</section>

<!-- 9. FORMULAIRE -------------------------------------------------------- -->
<section class="section section--tint" id="demande-intervention">
  <div class="container">
    <div class="form-block">
      <div>
        <span class="eyebrow">Contact</span>
        <h2>Être rappelé</h2>
        <p class="lead">${formIntro}</p>
        <p><strong>Pour une intervention urgente, l’appel reste le plus rapide :</strong></p>
        ${callBtn(`formulaire-${slug}-colonne`, { text: `Appeler le ${SITE.phoneDisplay}` })}
        ${phoneNote()}
        <ul class="nolist mt-32">
          <li>Vos coordonnées servent uniquement à vous rappeler.</li>
          <li>Aucun appel commercial, aucune revente de vos données.</li>
          <li>C’est un plombier qui rappelle, pas un centre d’appels.</li>
        </ul>
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
            ${metier.problemes.map(o => `<option>${o}</option>`).join('\n            ')}
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

<!-- 10. L'APPEL EN 2 MINUTES ----------------------------------------
     Placé juste avant l'appel final : la dernière objection à lever, c'est
     « qu'est-ce qui se passe si je décroche ». La réponse tombe donc au
     moment où le visiteur s'apprête à le faire. ---------------------- -->
<section class="section callbox">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Avant d’appeler</span>
      <h2>${appelTitre || 'Ce qui se passe quand vous appelez'}</h2>
      <p class="callbox__lead">${appelIntro || 'Deux minutes au téléphone suffisent à savoir où vous en êtes. Vous n’engagez rien en appelant : aucun déplacement n’est lancé sans votre accord.'}</p>
    </div>
    <div class="callbox__grid">
      <ol class="callbox__steps">
        ${etapes.map(([titre, texte]) => `<li><b>${titre}</b>${texte}</li>`).join('\n        ')}
      </ol>
      <div class="callbox__aside">
        <p>Appelez maintenant</p>
        <a class="callbox__number" href="${SITE.phoneHref}" data-location="callbox-${slug}" data-cta="numero-appel-2min">${SITE.phoneDisplay}</a>
        ${callBtn(`callbox-${slug}`, { variant: 'dark', text: 'Appeler maintenant', block: true })}
        <small>${SITE.phoneNote}</small>
      </div>
    </div>
  </div>
</section>

${infographie ? `
<section class="section">
  <div class="container">
    <figure class="figure-wide">
      ${photo({ chemin: '/assets/img/infographie-origine-bouchon',
                alt: 'Origine du bouchon et outil adapté : graisses, cheveux et savon, lingettes, racines',
                largeur: 1536, hauteur: 1024, usage: 'large' })}
      <figcaption>Graisses de cuisine, cheveux et savon, lingettes, racines : l’origine du bouchon
      détermine l’outil à utiliser. C’est ce que nous cherchons à établir dès votre appel.</figcaption>
    </figure>
  </div>
</section>` : ''}

<!-- 11. APPEL FINAL ------------------------------------------------------- -->
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
    ${phoneNote({ centre: true })}
  </div>
</section>
`
});
