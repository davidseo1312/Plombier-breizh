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
# Prévisualiser (n'importe quel serveur statique)
python3 -m http.server 8000     # puis http://localhost:8000

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
  lib/lp.mjs                      ← fabrique des landing pages Google Ads (29 / 56)
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
netlify.toml / vercel.json        ← URLs propres + cache + en-têtes
robots.txt / sitemap.xml
```

> **Règle importante :** les `.html` à la racine sont régénérés par `node build.mjs`.
> Toute modification de contenu se fait dans `src/`, puis on relance le build.

## 3. Pages

| Fichier | URL cible | Rôle |
|---|---|---|
| `index.html` | `/` | Site principal — Plombier Breizh en Bretagne |
| `plomberie.html` | `/plomberie` | Dépannage, fuite, recherche de fuite |
| `debouchage.html` | `/debouchage` | WC, évier, douche, canalisation |
| `degorgement.html` | `/degorgement` | Dégorgement de réseau |
| `urgence-plomberie.html` | `/urgence-plomberie` | Intention « urgence » |
| `bretagne.html` | `/bretagne` | Zone d'intervention — Bretagne, 29 & 56 |
| **`finistere-29.html`** | **`/finistere-29`** | **Landing page Google Ads — Finistère** |
| **`morbihan-56.html`** | **`/morbihan-56`** | **Landing page Google Ads — Morbihan** |
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

Les liens internes utilisent l'extension `.html` : ils fonctionnent partout
(ouverture locale incluse). `netlify.toml` et `vercel.json` exposent en plus les
URLs propres (`/debouchage`).

**Correspondance groupes d'annonces → pages de destination :**

| Groupe d'annonces | Page de destination |
|---|---|
| Plombier Finistère · Débouchage Finistère · Dégorgement Finistère · Urgence plomberie Finistère | `/finistere-29` |
| Plombier Morbihan · Débouchage Morbihan · Dégorgement Morbihan · Urgence plomberie Morbihan | `/morbihan-56` |
| Plombier Bretagne (générique) | `/` |
| Débouchage · WC bouché · évier bouché (sans ville) | `/debouchage` |
| Dégorgement · canalisation obstruée | `/degorgement` |
| Urgence plombier · fuite d'eau | `/urgence-plomberie` |

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

**Aucun faux avis n'est publié.** La section « Nos clients témoignent » contient
un modèle HTML commenté (`src/lib/layout.mjs`, fonction `reviewsSection`) prêt à
recevoir de vrais témoignages. Dupliquez le bloc `<article class="review">` pour
chaque avis authentique, puis supprimez le bloc `.notice`.

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

## 11. Performance

- Aucune librairie JS, **aucun appel réseau externe** (police comprise).
- Lato auto-hébergée : 3 fichiers woff2 de ~23 Ko, sous-ensemble latin, `font-display:swap`, les deux graisses principales préchargées.
- CSS ~19 Ko, JS ~7 Ko, visuels SVG ~4 Ko chacun.
- `loading="lazy"` + `decoding="async"` sur toutes les images hors hero,
  `fetchpriority="high"` sur le visuel du hero.
- `width`/`height` sur chaque image (pas de décalage de mise en page / CLS).
- Cache long des assets configuré dans `netlify.toml` / `vercel.json`.
