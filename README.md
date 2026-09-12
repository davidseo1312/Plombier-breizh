# Plombier Breizh — site de conversion Google Ads (SEA)

Site statique orienté **conversion téléphonique** pour Plombier Breizh —
plomberie, débouchage, dégorgement et urgence **en Bretagne**, avec deux
landing pages Google Ads dédiées : **Finistère 29** et **Morbihan 56**.

- Téléphone affiché partout : **02 20 06 01 96** (`tel:0220060196`)
- Email : **contact@plombier-breizh.fr**
- Aucune dépendance, aucun framework, aucun build tiers : HTML/CSS/JS natifs.
- Typographie **Lato auto-hébergée** (aucune requête vers un service tiers).

---

## 1. Démarrage

```bash
# Prévisualiser — reproduit les URLs sans extension de l'hébergement
node tools/serveur-local.mjs    # puis http://localhost:8000

# Régénérer les pages HTML après modification de src/
node build.mjs

# Régénérer les visuels de substitution
node tools/generate-placeholders.mjs
```

## 2. Structure

```
index.html, plomberie.html, …     ← pages GÉNÉRÉES (ne pas éditer à la main)
build.mjs                         ← générateur (node build.mjs)
src/
  lib/layout.mjs                  ← constantes + header, footer, CTA, bandeaux, formulaire…
  lib/services.mjs                ← catalogue des interventions (source unique)
  lib/lp.mjs                      ← fabrique des landing pages Google Ads (6 pages)
  pages/*.mjs                     ← contenu de chaque page
assets/
  css/site.css                    ← design system complet (palette + typo Lato)
  js/site.js                      ← navigation, tracking, formulaire
  fonts/lato-*.woff2              ← police auto-hébergée (400 / 700 / 900)
  photos/                         ← vos photos réelles (voir §6)
  img/*.svg                       ← emplacements photo (à remplacer, voir §6)
  logo-plombier-breizh.svg        ← logo (voir §4)
tools/generate-placeholders.mjs   ← génération des visuels de substitution
tools/installer-logo.mjs          ← installe VOTRE logo (fichier, URL ou base64)
tools/serveur-local.mjs           ← prévisualisation avec les URLs sans extension
netlify.toml / vercel.json        ← URLs propres + cache + en-têtes
robots.txt / sitemap.xml
```

> **Règle importante :** les `.html` à la racine sont régénérés par `node build.mjs`.
> Toute modification de contenu se fait dans `src/`, puis on relance le build.

## 3. Pages

| Fichier généré | URL publique | Rôle |
|---|---|---|
| `index.html` | `/` | Site principal — Plombier Breizh en Bretagne |
| `plomberie.html` | `/plomberie` | Dépannage, fuite, recherche de fuite |
| `debouchage.html` | `/debouchage` | WC, évier, douche, canalisation |
| `degorgement.html` | `/degorgement` | Dégorgement de réseau |
| `urgence-plomberie.html` | `/urgence-plomberie` | Intention « urgence » |
| `bretagne.html` | `/bretagne` | Zone d'intervention — Bretagne, 29 & 56 |
| **`finistere-29.html`** | **`/finistere-29`** | **Landing Ads — Finistère, tous services** |
| **`morbihan-56.html`** | **`/morbihan-56`** | **Landing Ads — Morbihan, tous services** |
| **`plomberie-finistere-29.html`** | **`/plomberie-finistere-29`** | **Landing Ads — plomberie seule, Finistère** |
| **`plomberie-morbihan-56.html`** | **`/plomberie-morbihan-56`** | **Landing Ads — plomberie seule, Morbihan** |
| **`degorgement-finistere-29.html`** | **`/degorgement-finistere-29`** | **Landing Ads — dégorgement seul, Finistère** |
| **`degorgement-morbihan-56.html`** | **`/degorgement-morbihan-56`** | **Landing Ads — dégorgement seul, Morbihan** |
| `contact.html` | `/contact` | Contact + formulaire |
| `mentions-legales.html` · `politique-confidentialite.html` | | Obligations légales |
| `404.html` | | Page d'erreur orientée appel |

### Les deux landing pages SEA

`/finistere-29` et `/morbihan-56` ne sont **pas** des pages SEO : ce sont des
landing pages commerciales pensées pour recevoir directement un clic d'annonce.
Elles se distinguent du reste du site sur trois points :

1. **Header allégé** — pas de menu de navigation, uniquement le logo, le numéro
   et le bouton d'appel : moins de sorties possibles.
2. **Parcours resserré** — arriver → reconnaître son problème → voir la solution
   → être rassuré → appeler ou remplir le formulaire, avec un CTA à chaque palier
   et deux blocs où le numéro occupe toute la largeur de l'écran.
3. **Contenu réellement propre au département** — le texte d'introduction, les
   situations concrètes listées et les communes diffèrent entre le 29 et le 56.
   Ce ne sont pas deux copies avec un nom échangé (voir `src/pages/finistere-29.mjs`
   et `src/pages/morbihan-56.mjs`).

### URLs sans extension

Les pages sont servies **sans `.html`** : `/debouchage`, jamais
`/debouchage.html`. Les liens internes, les balises canoniques et le sitemap
utilisent tous cette forme, et `/debouchage.html` redirige en 301 vers
`/debouchage` pour qu'une seule URL fasse foi.

Les fichiers restent plats à la racine (`debouchage.html`) ; c'est
l'hébergement qui fait la correspondance. Trois configurations sont fournies :

| Hébergement | Fichier | Mécanisme |
|---|---|---|
| Netlify | `netlify.toml` | réécritures 200 + redirections 301 |
| Vercel | `vercel.json` | `cleanUrls: true` |
| Apache (OVH, Ionos, o2switch…) | `.htaccess` | `mod_rewrite` |

Sur nginx, l'équivalent tient en une ligne :
`try_files $uri $uri.html $uri/index.html =404;`

Les chemins d'assets sont absolus (`/assets/…`) : ils restent valides quelle
que soit la forme de l'URL visitée. En contrepartie, ouvrir un fichier HTML
directement depuis le disque (`file://`) n'affiche plus les styles — utilisez
`node tools/serveur-local.mjs`, qui reproduit exactement le comportement de
l'hébergement.

**Correspondance groupes d'annonces → pages de destination :**

Les six landing pages se croisent sur deux axes : le département et le service.
Plus l'annonce est précise, plus la page l'est aussi — c'est ce qui fait le
score de qualité et le taux de conversion.

| Intention de l'annonce | Page de destination |
|---|---|
| Plombier Finistère · fuite d'eau 29 · recherche de fuite Quimper · chauffe-eau Brest | `/plomberie-finistere-29` |
| Plombier Morbihan · fuite d'eau 56 · recherche de fuite Vannes · chauffe-eau Lorient | `/plomberie-morbihan-56` |
| Dégorgement Finistère · canalisation bouchée 29 · débouchage Brest · pompage regard | `/degorgement-finistere-29` |
| Dégorgement Morbihan · canalisation bouchée 56 · débouchage Vannes · pompage regard | `/degorgement-morbihan-56` |
| Plombier 29 (générique, tous services confondus) | `/finistere-29` |
| Plombier 56 (générique, tous services confondus) | `/morbihan-56` |
| Plombier Bretagne (générique, sans département) | `/` |
| Urgence plombier · fuite qui ne s'arrête pas (sans département) | `/urgence-plomberie` |

Les quatre pages mono-service partagent la structure des deux pages
généralistes, mais **aucun texte éditorial n'est repris** : titre, sous-titre,
introduction, situations listées, moyens mis en œuvre, matériel présenté et
avis clients sélectionnés diffèrent à chaque fois. Seuls les éléments
fonctionnels (formulaire, libellés de boutons, « Pourquoi nous », pied de page)
sont communs — c'est voulu.

Les anciennes URLs (`/plombier-finistere`, `/plombier-morbihan`,
`/zones-intervention`) sont redirigées en 301 vers les nouvelles dans
`netlify.toml`.

## 4. Identité visuelle et typographie

**Palette** (variables CSS, en tête de `assets/css/site.css`) :

| Variable | Valeur | Rôle |
|---|---|---|
| `--cyan` | `#00AEEF` | **Couleur d'accent principale** : bandeau urgence, blocs téléphone, badges, coches, filets, survols, bordures de cartes, fonds de section teintés |
| `--blue` | `#007BCB` | CTA d'appel principaux, liens |
| `--black` | `#111111` | Texte et sections sombres |
| `--white` | `#FFFFFF` | Fonds et respiration |

Le bleu clair passe de 2 à 44 usages dans la feuille de style : il structure le
site sans le saturer, les grandes surfaces restant blanches ou noires.

**Typographie** : Lato (400 / 700 / 900), auto-hébergée dans `assets/fonts/`
et préchargée. Aucune requête vers Google Fonts — un aller-retour réseau en
moins, et aucune donnée visiteur envoyée à un tiers. Pour régénérer les fichiers,
voir `tools/` et la section Performance.

Les titres et les boutons sont en **casse normale** (pas de capitales forcées) :
seuls les petits sur-titres de section gardent des majuscules. C'est ce qui
distingue le plus nettement le rendu d'un gabarit générique.

## 5. Logo

**Le logo officiel est installé** (`assets/logo-plombier-breizh.png`), ainsi que
le favicon et la photo du technicien devant le camion
(`assets/img/hero-plombier-breizh-camion.jpg`). Le fichier d'origine intact est
conservé dans `assets/logo-plombier-breizh-original.webp`.

Le logo affiché est le fichier fourni, uniquement détouré de ses marges blanches
et redimensionné pour le web. **Aucun logo n'est dessiné ni reconstitué dans ce
projet** : si le fichier venait à être retiré, le header et le pied de page
afficheraient le nom « Plombier Breizh » écrit en toutes lettres — un texte,
pas un symbole inventé.

### Le remplacer plus tard

Le site essaie automatiquement une dizaine de noms et de formats, dans l'ordre :

```
assets/logo-plombier-breizh.png    ← recommandé
assets/logo-plombier-breizh.webp / .jpg / .jpeg / .svg
assets/logo.png / .webp / .jpg / .jpeg / .svg
```

**Un seul fichier suffit** : le pied de page reprend le logo principal si aucune
variante verticale (`assets/logo-plombier-breizh-vertical.*`) n'est fournie.
`assets/favicon.png` est pris en compte pour l'icône d'onglet.

### Quatre façons de le déposer

| Méthode | Comment |
|---|---|
| **Glisser-déposer sur GitHub** | Ouvrir la [page d'envoi du dossier `assets/`](https://github.com/davidseo1312/Plombier-breizh/upload/claude/plombier-breizh-landing-m2zfjk/assets), déposer le fichier, le nommer `logo-plombier-breizh.png`, valider. Aucun outil à installer. |
| **Ligne de commande** | `cp votre-logo.png assets/logo-plombier-breizh.png` puis `git add assets && git commit -m "Logo" && git push` |
| **Installateur fourni** | `node tools/installer-logo.mjs <fichier \| URL \| base64 \| ->` — détecte le format (PNG/JPG/WebP/SVG) et range le fichier. Options `--vertical` et `--favicon`. |
| **Copier-coller en base64** | `base64 -w0 logo.png` puis coller le résultat en demandant l'installation. |

Le détail complet est repris dans `assets/DEPOSER-LE-LOGO-ICI.md`, à côté de
l'emplacement de dépôt.

## 6. Images

### Photo principale (technicien + camion)

Le visuel du hero est câblé sur un chemin fixe, avec repli automatique :

```
assets/img/hero-plombier-breizh-camion.jpg
```

➡ **Déposez ce fichier et la photo s'affiche immédiatement** sur l'accueil, la
page Urgence et les deux landing pages SEA. Tant qu'il est absent, le visuel de
substitution s'affiche à la place (jamais d'image cassée). Format conseillé :
JPG/WebP, largeur ≥ 1600 px, ratio paysage (le cadrage est géré en CSS).

### Photos des services

Chaque vignette de service tente d'abord de charger
`assets/photos/<nom>.jpg`, puis retombe sur le visuel de substitution
`assets/img/<nom>.svg`. Déposez vos photos dans `assets/photos/` en reprenant
exactement les noms de fichiers de la liste ci-dessous : elles s'affichent sans
aucune modification de code.

### Autres visuels

Les fichiers de `assets/img/` sont des **emplacements photo** aux bons ratios
(4:3 pour les visuels de section, 1:1 pour les équipements). Remplacez-les par de
vraies photos d'intervention en gardant **le même nom de base et le même ratio**
(en `.jpg`/`.webp`, mettez alors à jour l'extension dans `src/`).

| Fichier | Photo attendue |
|---|---|
| `hero-plombier-intervention` | Repli du hero si la photo du camion est absente |
| `depannage-plomberie` | Dépannage (robinetterie, alimentation) |
| `debouchage-canalisation` | Débouchage de canalisation |
| `degorgement` | Dégorgement de réseau d'évacuation |
| `debouchage-wc` / `debouchage-evier` / `debouchage-lavabo` / `debouchage-douche` | Le point d'eau concerné |
| `fuite-eau` / `recherche-fuite` | Fuite, recherche de fuite |
| `canalisation-bouchee` / `reseau-evacuation` / `inspection-canalisation` | Canalisation, inspection caméra |
| `urgence-plomberie` / `technicien-camion` / `intervention-salle-de-bain` | Intervention urgente, technicien |
| `chauffe-eau` / `wc-sanitaires` | Chauffe-eau, chasse d'eau et sanitaires |
| `cliente-attente` / `siphon-encrasse` | Cliente en attente, siphon encrassé |
| `equip-pompe` / `equip-furet-electrique` / `equip-haute-pression` / `equip-camera-inspection` / `equip-recherche-fuite` / `equip-outillage` | Matériel professionnel (carré) |

Aucune image n'est circulaire : `border-radius: 0` est appliqué globalement.

## 7. Formulaire « Demander une intervention »

Deux modes, pilotés par `PB_CONFIG.formEndpoint` (injecté dans le `<head>` par
`src/lib/layout.mjs`) :

1. **Non configuré (par défaut)** — le formulaire ouvre le logiciel de messagerie
   du visiteur, pré-rempli à destination de `contact@plombier-breizh.fr`, et
   affiche un message expliquant qu'il reste à cliquer sur « Envoyer ».
2. **Configuré (recommandé)** — le formulaire envoie un `POST` JSON vers
   l'endpoint et affiche une confirmation. Compatible Formspree, Netlify Forms,
   Web3Forms, ou votre propre script.

Pour activer le mode 2, dans `src/lib/layout.mjs`, remplacez :

```js
window.PB_CONFIG={formEndpoint:'', …}
// par
window.PB_CONFIG={formEndpoint:'https://formspree.io/f/VOTRE_ID', …}
```

puis relancez `node build.mjs`.

Champs envoyés : `nom`, `telephone`, `ville`, `probleme`, `message`.
Un champ piège (honeypot) bloque les robots et n'est pas transmis.

## 8. Tracking des conversions (GA4 / Google Ads / GTM)

Aucun identifiant fictif n'est présent. Les scripts sont **commentés** dans le
`<head>` (voir `src/lib/layout.mjs`) : décommentez le bloc GTM **ou** le bloc
GA4/Google Ads et remplacez les identifiants.

| Événement | Déclencheur |
|---|---|
| `phone_click` | Tout clic sur un lien `tel:` (header, hero, bandeaux, sticky, footer…) |
| `cta_click` | Tout élément portant `data-cta` |
| `form_start` | Première saisie dans le formulaire |
| `contact_form_submit` | Envoi du formulaire réussi |
| `intervention_request` | Idem (événement de conversion dédié) |

Chaque événement est poussé dans `window.dataLayer` **et** transmis à `gtag()`
si GA4 est chargé. Les paramètres incluent `link_location` (emplacement précis
du CTA) et `page`, ce qui permet de mesurer quels blocs génèrent les appels.

Dans Google Ads : créez une action de conversion **« Appels depuis le site web »**
à partir de l'événement `phone_click`, et une action **« Prospect »** à partir de
`intervention_request`.

## 9. Avis clients

Les avis publiés sont **réels**, fournis par l'entreprise. Ils sont centralisés
dans `src/lib/reviews.mjs` : un tableau d'objets `{ note, nom, ville, dept,
page, texte }`. Pour en ajouter un, complétez la liste et relancez
`node build.mjs` — il apparaît automatiquement dans le carrousel de la page
indiquée par son champ `page`.

**Répartition** (champ `page`) :

| Valeur | Pages concernées | Avis |
|---|---|---|
| `lp29` | `/finistere-29` | 3 avis du Finistère |
| `lp56` | `/morbihan-56` | 3 avis du Morbihan |
| `accueil` | `/`, plus Plomberie, Débouchage, Dégorgement et Urgence | les 4 restants (29 et 56 mêlés) |

**Carrousel** : défilement horizontal natif (glissement tactile et navigation
clavier gratuits) piloté par deux flèches rectangulaires et une avance
automatique toutes les 6 secondes, de droite à gauche, qui reboucle au début.
Elle se met en pause au survol et au focus, et **s'arrête définitivement dès que
le visiteur prend la main** — il n'y a pas de survol sur mobile, et un avis qui
défile pendant la lecture est vite agaçant. Rien ne bouge si le système demande
de réduire les animations (`prefers-reduced-motion`). Les flèches disparaissent
quand tous les avis tiennent à l'écran : c'est le cas des landing pages sur
grand écran, où les trois avis s'affichent côte à côte.

Trois avis par vue au-delà de 1100 px, deux entre 700 et 1099 px, un seul
en dessous.

**Logo Google** : `assets/img/google-reviews.png`, PNG à fond transparent, calé
dans le coin haut droit de la section au-delà de 860 px, centré au-dessus du
titre en dessous. `LIEN_GOOGLE` dans `src/lib/reviews.mjs` permet d'y associer
l'URL de la fiche établissement Google si vous souhaitez le rendre cliquable ;
laissé vide, aucun lien n'est posé.

## 10. Informations à compléter avant mise en ligne

Ces éléments n'ont pas été inventés et doivent être renseignés :

- `mentions-legales.html` : forme juridique, adresse, SIRET, TVA, directeur de
  publication, hébergeur, assurance (marqués `[À COMPLÉTER]` dans
  `src/pages/mentions-legales.mjs`).
- `politique-confidentialite.html` : raison sociale et adresse du responsable de
  traitement.
- `SITE.baseUrl` dans `src/lib/layout.mjs` (utilisé par les balises canoniques,
  Open Graph et le sitemap) : remplacer par le domaine réel si différent.
- Les deux fichiers logo officiels en PNG (§6).
- La photo du technicien + camion `assets/img/hero-plombier-breizh-camion.jpg` (§5)
  et les photos d'intervention.
- Le cas échéant, un bandeau de consentement cookies si des outils de mesure
  sont activés.

## 11. Mise en cache des assets

Les en-têtes d'hébergement (`netlify.toml`, `vercel.json`) mettent `/assets/*`
en cache **un an, en `immutable`** : c'est ce qu'il faut pour la vitesse, mais
sans précaution un visiteur déjà venu garderait indéfiniment l'ancienne feuille
de style ou l'ancien logo après une mise à jour.

`build.mjs` ajoute donc à chaque URL d'asset une **empreinte de son contenu**
(`assets/css/site.css?v=1b8fe6cc`). Seuls les fichiers réellement modifiés
changent d'URL et sont retéléchargés ; les autres restent en cache. Aucune
action manuelle n'est nécessaire, l'empreinte est recalculée à chaque
`node build.mjs`.

Les `.woff2` en sont volontairement exclus : ils sont aussi référencés depuis
le CSS, où l'URL n'est pas réécrite — deux URLs pour une même police
provoqueraient deux téléchargements.

## 12. Performance

- Aucune librairie JS, **aucun appel réseau externe** (police comprise).
- Lato auto-hébergée : 3 fichiers woff2 de ~23 Ko, sous-ensemble latin, `font-display:swap`, les deux graisses principales préchargées.
- CSS ~19 Ko, JS ~7 Ko, visuels SVG ~4 Ko chacun.
- `loading="lazy"` + `decoding="async"` sur toutes les images hors hero,
  `fetchpriority="high"` sur le visuel du hero.
- `width`/`height` sur chaque image (pas de décalage de mise en page / CLS).
- Cache long des assets configuré dans `netlify.toml` / `vercel.json`.
