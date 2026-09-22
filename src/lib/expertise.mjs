/* ==========================================================================
   CRÉDIBILITÉ MÉTIER
   --------------------------------------------------------------------------
   Bloc posé automatiquement en bas de chaque page, juste avant les logos.
   Il répond à la seule question que se pose un visiteur pressé : « est-ce
   que j'ai affaire à un vrai professionnel ? »

   ⚠ Chaque affirmation doit rester vérifiable.
   · L'ancienneté vient de la date de création au registre (ENTREPRISE.dateCreation).
     Si elle change, corrigez-la là-bas, pas ici.
   · Le matériel cité est celui réellement utilisé, décrit par ailleurs sur les
     pages dégorgement et plomberie.
   · L'assurance renvoie au contrat mentionné dans les mentions légales.
   Aucune certification, aucun label, aucun chiffre d'interventions : rien qui
   ne puisse être prouvé sur demande.
   ========================================================================== */

import { ENTREPRISE } from './entreprise.mjs';

/* Année de création lue sur la fiche entreprise : « 6 juillet 2021 » → 2021. */
const ANNEE_CREATION = (String(ENTREPRISE.dateCreation).match(/\b(19|20)\d{2}\b/) || [])[0] || '';

export const POINTS_EXPERTISE = [
  /* Formulation neutre : ce bloc est posé sur les seize pages, y compris les
     landings plomberie où le mot « dégorgement » n'a rien à faire. */
  ['Plusieurs années d’expérience',
   `Plombier Breizh${ANNEE_CREATION ? ` existe depuis ${ANNEE_CREATION}` : ''} et intervient en Finistère et
    dans le Morbihan. Ce n’est pas une activité d’appoint exercée à côté d’un autre métier :
    c’est le métier, tous les jours.`],
  ['Vous parlez au plombier, pas à une plateforme',
   `Pas de centre d’appels, pas de mise en relation avec un sous-traitant inconnu. La personne qui
    répond connaît le métier et sait vous dire au téléphone ce qu’elle va probablement trouver.`],
  ['Du matériel professionnel, pas du bricolage',
   `Furet électrique, nettoyeur haute pression, caméra d’inspection, détecteur acoustique de fuite.
    L’outil est choisi après avoir identifié la cause, jamais l’inverse.`],
  ['Entreprise assurée, prix annoncé avant de commencer',
   `Responsabilité civile professionnelle souscrite auprès de ${ENTREPRISE.assureur || 'notre assureur'}.
    Le montant vous est annoncé avant le travail, avec un devis écrit au-delà de 150&nbsp;€ TTC.`]
];

export const expertiseSection = ({
  titre = 'Un professionnel du métier, pas un amateur',
  intro = `Une intervention ratée coûte toujours plus cher que la première. Voici ce sur quoi
           vous pouvez nous juger avant même de décrocher.`
} = {}) => `
<section class="expertise" aria-label="Notre savoir-faire">
  <div class="container">
    <div class="section__head section__head--center">
      <span class="eyebrow">Notre savoir-faire</span>
      <h2>${titre}</h2>
      <p class="lead">${intro}</p>
    </div>
    <ul class="expertise__list">
      ${POINTS_EXPERTISE.map(([t, texte], i) => `<li class="expertise__item">
        <span class="expertise__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
        <div>
          <strong>${t}</strong>
          <span>${texte}</span>
        </div>
      </li>`).join('\n      ')}
    </ul>
  </div>
</section>`;
