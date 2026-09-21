import { TARIFS_PLOMBERIE, TARIFS_DEGORGEMENT } from './tarifs.mjs';

/* ==========================================================================
   MÉTIERS — ce qui sépare une landing plomberie d'une landing dégorgement
   --------------------------------------------------------------------------
   Une landing ne parle que de son métier : bandeau d'en-tête, pied de page,
   options du formulaire et données structurées sont cadrés ici. Rien ne
   déborde d'un métier sur l'autre.
   ========================================================================== */

export const PLOMBERIE = {
  bandeau: 'Fuite d’eau • Recherche de fuite • Chauffe-eau • Robinetterie',
  tagline: 'Plomberie • Fuite d’eau • Recherche de fuite • Chauffe-eau',
  piedServices: [
    'Fuite d’eau et recherche de fuite',
    'Chauffe-eau et eau chaude',
    'Robinetterie et sanitaires',
    'Réparation de plomberie'
  ],
  offres: ['Dépannage plomberie', 'Réparation de fuite d’eau', 'Recherche de fuite',
           'Intervention sur chauffe-eau', 'Robinetterie et sanitaires'],
  problemes: ['Fuite d’eau', 'Recherche de fuite', 'Chauffe-eau / eau chaude',
              'Robinetterie', 'Sanitaires', 'Autre problème de plomberie'],
  og: { fichier: 'og-plomberie', alt: 'Plombier Breizh — fuite d’eau, recherche de fuite et chauffe-eau en Bretagne' },
  tarifs: TARIFS_PLOMBERIE
};

export const DEGORGEMENT = {
  bandeau: 'Débouchage • Dégorgement • Canalisation bouchée • Pompage',
  tagline: 'Débouchage • Dégorgement • Canalisation bouchée • Pompage',
  piedServices: [
    'Débouchage de WC, évier, douche',
    'Dégorgement de réseau',
    'Canalisation enterrée obstruée',
    'Pompage de regard et de fosse'
  ],
  offres: ['Débouchage de canalisation', 'Dégorgement de réseau d’évacuation',
           'Pompage de regard et de fosse', 'Inspection de canalisation par caméra'],
  problemes: ['WC bouché', 'Évier bouché', 'Douche ou baignoire bouchée',
              'Canalisation bouchée', 'Regard ou fosse qui déborde',
              'Plusieurs évacuations bloquées', 'Autre problème d’évacuation'],
  og: { fichier: 'og-degorgement', alt: 'Plombier Breizh — débouchage et dégorgement de canalisation en Bretagne' },
  tarifs: TARIFS_DEGORGEMENT
};
