/* ==========================================================================
   Plombier Breizh — site.js
   Sans dépendance. Navigation mobile, tracking conversion, formulaire.
   ========================================================================== */
(function () {
  'use strict';

  /* --------------------------------------------------------------------
     CONFIGURATION
     Renseignez ces valeurs lors de la mise en ligne (voir README.md).
     Aucun identifiant fictif n'est utilisé : tant que les champs sont
     vides, aucun script tiers n'est chargé.
     -------------------------------------------------------------------- */
  var CONFIG = window.PB_CONFIG || {};
  var FORM_ENDPOINT = CONFIG.formEndpoint || '';   // ex: 'https://formspree.io/f/xxxxxxx'
  var CONTACT_EMAIL = CONFIG.contactEmail || 'contact@plombier-breizh.fr';
  var PHONE_DISPLAY = CONFIG.phoneDisplay || '02 20 06 01 96';

  /* --------------------------------------------------------------------
     1. TRACKING — GA4 / Google Ads / Google Tag Manager
     Tous les événements sont poussés dans window.dataLayer (GTM) et
     transmis à gtag() si GA4 est installé directement.
     Événements : phone_click | cta_click | contact_form_submit |
                  intervention_request
     -------------------------------------------------------------------- */
  window.dataLayer = window.dataLayer || [];

  function track(eventName, params) {
    var payload = params || {};
    var data = { event: eventName };
    for (var k in payload) { if (Object.prototype.hasOwnProperty.call(payload, k)) data[k] = payload[k]; }
    window.dataLayer.push(data);
    if (typeof window.gtag === 'function') { window.gtag('event', eventName, payload); }
  }
  window.pbTrack = track;

  function pageLabel() {
    return document.body.getAttribute('data-page') || location.pathname || '/';
  }

  /* Clics téléphone : tous les liens tel: du site, où qu'ils soient. */
  document.addEventListener('click', function (e) {
    var link = e.target.closest ? e.target.closest('a[href^="tel:"]') : null;
    if (link) {
      track('phone_click', {
        phone_number: PHONE_DISPLAY,
        link_location: link.getAttribute('data-location') || 'non-defini',
        page: pageLabel()
      });
      return;
    }
    /* Clics sur les CTA balisés data-cta */
    var cta = e.target.closest ? e.target.closest('[data-cta]') : null;
    if (cta) {
      track('cta_click', {
        cta_label: (cta.getAttribute('data-cta') || cta.textContent || '').trim().slice(0, 80),
        link_location: cta.getAttribute('data-location') || 'non-defini',
        page: pageLabel()
      });
    }
  }, true);

  /* --------------------------------------------------------------------
     2. NAVIGATION MOBILE
     -------------------------------------------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* --------------------------------------------------------------------
     3. CARROUSEL D'AVIS — défilement de droite à gauche
     Défilement natif (donc glissement tactile et clavier gratuits) piloté
     par les flèches et une avance automatique. L'avance se met en pause au
     survol et au focus, et ne démarre pas si le visiteur a demandé à
     réduire les animations.
     -------------------------------------------------------------------- */
  var reduitLesAnimations = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  Array.prototype.forEach.call(document.querySelectorAll('[data-carousel]'), function (carousel) {
    var track = carousel.querySelector('[data-carousel-track]');
    var controls = carousel.querySelector('[data-carousel-controls]');
    if (!track || !controls) return;

    var prev = controls.querySelector('[data-carousel-prev]');
    var next = controls.querySelector('[data-carousel-next]');
    var compteur = controls.querySelector('[data-carousel-current]');
    var slides = track.querySelectorAll('.carousel__slide');
    var timer = null;

    function pas() {
      if (slides.length < 2) return track.clientWidth;
      return slides[1].offsetLeft - slides[0].offsetLeft;
    }
    /* Tolérance : quelques pixels d'arrondi ne sont pas un débordement. */
    function debordement() { return track.scrollWidth - track.clientWidth > 16; }

    function majEtat() {
      if (!debordement()) { controls.hidden = true; return; }
      controls.hidden = false;
      var index = Math.round(track.scrollLeft / pas());
      if (compteur) compteur.textContent = Math.min(index + 1, slides.length);
      var fin = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      if (prev) prev.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = fin;
    }

    function avancer(sens) {
      var fin = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      if (sens > 0 && fin) { track.scrollTo({ left: 0, behavior: 'smooth' }); return; }
      track.scrollBy({ left: sens * pas(), behavior: 'smooth' });
    }

    if (prev) prev.addEventListener('click', function () { arreter(); avancer(-1); });
    if (next) next.addEventListener('click', function () { arreter(); avancer(1); });

    function demarrer() {
      if (reduitLesAnimations || timer || !debordement()) return;
      timer = window.setInterval(function () { avancer(1); }, 6000);
    }
    function arreter() { if (timer) { window.clearInterval(timer); timer = null; } }

    carousel.addEventListener('mouseenter', arreter);
    carousel.addEventListener('mouseleave', demarrer);
    carousel.addEventListener('focusin', arreter);
    carousel.addEventListener('focusout', demarrer);

    /* Dès que le visiteur prend la main (doigt, souris, clavier), l'avance
       automatique s'arrête définitivement : il n'y a pas de survol sur mobile,
       et rien n'est plus agaçant qu'un avis qui défile pendant qu'on le lit. */
    function rendreLaMain() {
      arreter();
      carousel.removeEventListener('mouseleave', demarrer);
      carousel.removeEventListener('focusout', demarrer);
    }
    track.addEventListener('pointerdown', rendreLaMain, { passive: true });
    track.addEventListener('touchstart', rendreLaMain, { passive: true });
    track.addEventListener('keydown', rendreLaMain);
    if (prev) prev.addEventListener('click', rendreLaMain);
    if (next) next.addEventListener('click', rendreLaMain);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { arreter(); } else { demarrer(); }
    });

    var attente = null;
    track.addEventListener('scroll', function () {
      window.clearTimeout(attente);
      attente = window.setTimeout(majEtat, 90);
    }, { passive: true });
    window.addEventListener('resize', majEtat);

    majEtat();
    demarrer();
  });

  /* --------------------------------------------------------------------
     4. FORMULAIRE « Demander une intervention »
     -------------------------------------------------------------------- */
  var form = document.getElementById('intervention-form');
  if (!form) return;

  var okBox = document.getElementById('form-success');
  var errBox = document.getElementById('form-error');
  var submitBtn = form.querySelector('button[type="submit"]');
  var started = false;

  form.addEventListener('input', function () {
    if (started) return;
    started = true;
    track('form_start', { form_name: 'intervention', page: pageLabel() });
  });

  function show(box, html) {
    if (!box) return;
    if (html) box.innerHTML = html;
    box.classList.add('is-visible');
    box.setAttribute('tabindex', '-1');
    box.focus();
    box.scrollIntoView({ block: 'center' });
  }
  function hide(box) { if (box) box.classList.remove('is-visible'); }

  function values() {
    var d = {};
    new FormData(form).forEach(function (v, k) { d[k] = typeof v === 'string' ? v.trim() : v; });
    return d;
  }

  function mailtoFallback(data) {
    var subject = 'Demande d’intervention — ' + (data.ville || 'Plombier Breizh');
    var body =
      'Nom : ' + (data.nom || '') + '\n' +
      'Téléphone : ' + (data.telephone || '') + '\n' +
      'Ville : ' + (data.ville || '') + '\n' +
      'Type de problème : ' + (data.probleme || '') + '\n\n' +
      'Message :\n' + (data.message || '');
    window.location.href = 'mailto:' + CONTACT_EMAIL +
      '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }

  function success(title, note, method) {
    hide(errBox);
    show(okBox,
      '<h3>' + title + '</h3>' +
      '<p>' + note +
      ' Pour une urgence, appelez directement le <a href="tel:0220060196" data-location="form-confirmation"><strong>' +
      PHONE_DISPLAY + '</strong></a>.</p>');
    form.reset();
    var params = { form_name: 'intervention', method: method, page: pageLabel() };
    track('contact_form_submit', params);
    track('intervention_request', params);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;

    var data = values();
    /* Anti-spam : champ piège invisible pour les robots */
    if (data.website) { return; }
    delete data.website;

    if (!FORM_ENDPOINT) {
      /* Aucun back-end configuré : on ouvre le client mail pré-rempli.
         Renseignez PB_CONFIG.formEndpoint pour un envoi direct (voir README.md). */
      mailtoFallback(data);
      success('Dernière étape : envoyez le message',
        'Votre logiciel de messagerie s’ouvre avec le récapitulatif de votre demande — ' +
        'il ne reste qu’à cliquer sur « Envoyer ».', 'mailto');
      return;
    }

    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Envoi en cours…'; }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      success('Demande envoyée — merci !',
        'Votre demande d’intervention a bien été transmise à Plombier Breizh, ' +
        'nous vous rappelons au plus vite.', 'formulaire');
    }).catch(function () {
      hide(okBox);
      show(errBox,
        '<h3>L’envoi n’a pas abouti</h3>' +
        '<p>Merci de nous appeler directement au ' +
        '<a href="tel:0220060196" data-location="form-erreur"><strong>' + PHONE_DISPLAY + '</strong></a> ' +
        'ou de nous écrire à <a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>.</p>');
    }).finally(function () {
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Demander une intervention'; }
    });
  });
})();
