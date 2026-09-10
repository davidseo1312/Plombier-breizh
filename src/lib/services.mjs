/* Catalogue des interventions — source unique utilisée par toutes les pages. */
import { formBtn } from './layout.mjs';

export const SERVICES = [
  { img: 'depannage-plomberie', title: 'Dépannage plomberie',
    text: 'Robinetterie, chasse d’eau, évacuation, alimentation : nous intervenons sur les pannes courantes de plomberie du logement.' },
  { img: 'debouchage-canalisation', title: 'Débouchage canalisation',
    text: 'Canalisation obstruée ou évacuation ralentie : nous déterminons le point de bouchon et appliquons la méthode adaptée.' },
  { img: 'degorgement', title: 'Dégorgement',
    text: 'Dégorgement des réseaux d’évacuation encombrés, avec le matériel professionnel adapté au type de canalisation.' },
  { img: 'debouchage-wc', title: 'Débouchage WC',
    text: 'WC bouché ou qui refoule : intervention pour rétablir l’évacuation sans dégrader votre installation.' },
  { img: 'debouchage-evier', title: 'Débouchage évier',
    text: 'Évier de cuisine bouché par les graisses et les résidus : débouchage mécanique et nettoyage du siphon.' },
  { img: 'debouchage-lavabo', title: 'Débouchage lavabo',
    text: 'Lavabo qui se vide lentement ou plus du tout : nous dégageons le bouchon et vérifions l’évacuation.' },
  { img: 'debouchage-douche', title: 'Débouchage douche',
    text: 'Douche ou baignoire qui stagne : cheveux, savon et calcaire obstruent l’écoulement, nous le rétablissons.' },
  { img: 'fuite-eau', title: 'Fuite d’eau',
    text: 'Fuite visible sur une arrivée, un raccord ou une évacuation : intervention pour stopper la fuite et réparer.' },
  { img: 'canalisation-bouchee', title: 'Canalisation bouchée',
    text: 'Bouchon profond, racines, dépôts : diagnostic puis débouchage mécanique ou haute pression selon la situation.' },
  { img: 'recherche-fuite', title: 'Recherche de fuite',
    text: 'Fuite non visible, humidité, surconsommation : localisation à l’aide de matériel de recherche professionnel.' },
  { img: 'urgence-plomberie', title: 'Intervention plomberie urgente',
    text: 'Débordement, refoulement, fuite active : appelez-nous, nous organisons une intervention au plus vite.' }
];

export const serviceCard = (s, location) => `
      <article class="card">
        <div class="card__media">
          <img src="assets/img/${s.img}.svg" alt="${s.title} — Plombier Breizh" width="960" height="720" loading="lazy" decoding="async">
        </div>
        <div class="card__body">
          <h3 class="card__title">${s.title}</h3>
          <p class="card__text">${s.text}</p>
          <div class="card__cta">${formBtn(location, { variant: 'outline', size: 'sm', text: 'Demander une intervention', block: true })}</div>
        </div>
      </article>`;

export const servicesGrid = (items = SERVICES, location = 'services') => `
    <div class="grid grid--3">${items.map(s => serviceCard(s, location)).join('')}
    </div>`;
