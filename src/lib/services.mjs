/* Catalogue des interventions — source unique utilisée par toutes les pages. */
import { formBtn } from './layout.mjs';

export const SERVICES = [
  { img: 'depannage-plomberie', title: 'Dépannage plomberie',
    text: 'Robinet qui goutte, chasse d’eau bloquée, évacuation qui ne suit plus : on répare ce qui lâche au quotidien.' },
  { img: 'debouchage-canalisation', title: 'Débouchage',
    text: 'Une évacuation qui ralentit finit toujours par se boucher. On retire le bouchon avant le refoulement.' },
  { img: 'degorgement', title: 'Dégorgement',
    text: 'Quand plusieurs évacuations lâchent en même temps, le bouchon se situe plus loin. On dégorge le réseau.' },
  { img: 'debouchage-wc', title: 'WC bouché',
    text: 'Les WC ne s’évacuent plus et vous n’osez plus tirer la chasse. On rétablit l’écoulement sans rien casser.' },
  { img: 'debouchage-evier', title: 'Évier bouché',
    text: 'Les graisses et les résidus finissent par tout obstruer. On démonte, on nettoie le siphon, on contrôle l’évacuation.' },
  { img: 'debouchage-douche', title: 'Douche bouchée',
    text: 'Cheveux, savon, calcaire : l’eau stagne dans le bac. On dégage la bonde et la conduite.' },
  { img: 'canalisation-bouchee', title: 'Canalisation obstruée',
    text: 'Bouchon profond, dépôts, racines : on cherche d’abord où ça bloque, puis on adapte la méthode.' },
  { img: 'fuite-eau', title: 'Fuite d’eau',
    text: 'Un raccord, un joint, une évacuation percée. On stoppe la fuite, puis on répare.' },
  { img: 'recherche-fuite', title: 'Recherche de fuite',
    text: 'Une tache d’humidité, une facture qui grimpe sans raison : on localise la fuite avant d’ouvrir quoi que ce soit.' },
  { img: 'urgence-plomberie', title: 'Urgence plomberie',
    text: 'Débordement, refoulement, fuite qui ne s’arrête pas : appelez-nous, on organise le passage au plus vite.' }
];

/* Photo de service : `assets/photos/<nom>.jpg` s'il existe, sinon le visuel
   de substitution `assets/img/<nom>.svg`. Déposer la photo suffit à l'activer. */
export const servicePhoto = (img, alt) => {
  /* Les visuels de matériel sont carrés, les autres en 3:2 : les dimensions
     annoncées correspondent au fichier pour éviter tout décalage d'affichage. */
  const carre = img.startsWith('equip-');
  const [w, h] = carre ? [700, 700] : [1100, 733];
  return `<img src="assets/photos/${img}.jpg" alt="${alt}" width="${w}" height="${h}" loading="lazy" decoding="async"
               onerror="this.onerror=null;this.src='assets/img/${img}.svg';">`;
};

export const serviceCard = (s, location) => `
      <article class="card">
        <div class="card__media">
          ${servicePhoto(s.img, `${s.title} — Plombier Breizh`)}
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

/** Sélection par titre, dans l'ordre donné. */
export const pick = (...titles) => titles.map(t => SERVICES.find(s => s.title === t)).filter(Boolean);
