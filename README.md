# Plombier Breizh — site de conversion Google Ads (SEA)

Site statique orienté **conversion téléphonique** pour Plombier Breizh
(plomberie, débouchage, dégorgement, urgence) — **Finistère 29** et **Morbihan 56**.

- Téléphone affiché partout : **02 20 06 01 96** (`tel:0220060196`)
- Email : **contact@plombier-breizh.fr**
- Aucune dépendance, aucun framework, aucun build tiers : HTML/CSS/JS natifs.

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
  lib/layout.mjs                  ← constantes du site + header, footer, CTA, formulaire…
  lib/services.mjs                ← catalogue des interventions (source unique)
  lib/geo.mjs                     ← fabrique des landing pages SEA départementales
  pages/*.mjs                     ← contenu de chaque page
assets/
  css/site.css                    ← design system complet
  js/site.js                      ← navigation, tracking, formulaire
  img/*.svg                       ← emplacements photo (à remplacer, voir §5)
  logo-plombier-breizh.svg        ← logo (voir §4)
tools/generate-placeholders.mjs   ← génération des visuels
netlify.toml / vercel.json        ← URLs propres + cache + en-têtes
robots.txt / sitemap.xml
```

> **Règle importante :** les `.html` à la racine sont régénérés par `node build.mjs`.
> Toute modification de contenu se fait dans `src/`, puis on relance le build.

## 3. Pages

| Fichier | URL cible | Rôle |
|---|---|---|
| `index.html` | `/` | Landing principale (tous services) |
| `plomberie.html` | `/plomberie` | Dépannage, fuite, recherche de fuite |
| `debouchage.html` | `/debouchage` | Débouchage WC / évier / lavabo / douche |
| `degorgement.html` | `/degorgement` | Dégorgement de réseau |
| `urgence-plomberie.html` | `/urgence-plomberie` | Intention « urgence » |
| `zones-intervention.html` | `/zones-intervention` | Finistère 29 + Morbihan 56 |
| `plombier-finistere.html` | `/plombier-finistere` | **Landing SEA** ciblage 29 |
| `plombier-morbihan.html` | `/plombier-morbihan` | **Landing SEA** ciblage 56 |
| `contact.html` | `/contact` | Contact + formulaire |
| `mentions-legales.html` · `politique-confidentialite.html` | | Obligations légales |
| `404.html` | | Page d'erreur orientée appel |

Les liens internes utilisent l'extension `.html` : ils fonctionnent partout
(ouverture locale incluse). `netlify.toml` et `vercel.json` exposent en plus les
URLs propres (`/debouchage`).

**Suggestion de correspondance groupes d'annonces → pages :**

| Groupe d'annonces | Page de destination |
|---|---|
| plombier urgence / plombier 24h | `/urgence-plomberie` |
| débouchage canalisation, WC bouché, évier bouché | `/debouchage` |
| dégorgement, canalisation obstruée | `/degorgement` |
| fuite d'eau, recherche de fuite, dépannage | `/plomberie` |
| plombier Brest / Quimper / Finistère | `/plombier-finistere` |
| plombier Vannes / Lorient / Morbihan | `/plombier-morbihan` |

## 4. Logo

Le header et le footer chargent **`assets/logo-plombier-breizh.png`** en priorité.
Tant que ce fichier n'existe pas, un repli automatique affiche
`assets/logo-plombier-breizh.svg`.

➡ **Pour installer le logo officiel : déposez simplement le fichier
`assets/logo-plombier-breizh.png`.** Aucune modification de code n'est nécessaire.
Format conseillé : PNG à fond transparent, hauteur ≥ 120 px.

## 5. Images

Les fichiers de `assets/img/` sont des **emplacements photo** aux bons ratios
(4:3 pour les visuels de section, 1:1 pour les équipements). Remplacez-les par de
vraies photos d'intervention en gardant **le même nom de base et le même ratio**
(en `.jpg`/`.webp`, mettez alors à jour l'extension dans `src/`).

| Fichier | Photo attendue |
|---|---|
| `hero-plombier-intervention` | Plombier professionnel en intervention |
| `depannage-plomberie` | Dépannage (robinetterie, alimentation) |
| `debouchage-canalisation` | Débouchage de canalisation |
| `degorgement` | Dégorgement de réseau d'évacuation |
| `debouchage-wc` / `debouchage-evier` / `debouchage-lavabo` / `debouchage-douche` | Le point d'eau concerné |
| `fuite-eau` / `recherche-fuite` | Fuite, recherche de fuite |
| `canalisation-bouchee` / `reseau-evacuation` / `inspection-canalisation` | Canalisation, inspection caméra |
| `urgence-plomberie` / `technicien-camion` / `intervention-salle-de-bain` | Intervention urgente, technicien |
| `equip-pompe` / `equip-furet-electrique` / `equip-haute-pression` / `equip-camera-inspection` / `equip-recherche-fuite` / `equip-outillage` | Matériel professionnel (carré) |

Aucune image n'est circulaire : `border-radius: 0` est appliqué globalement.

## 6. Formulaire « Demander une intervention »

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

## 7. Tracking des conversions (GA4 / Google Ads / GTM)

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

## 8. Avis clients

**Aucun faux avis n'est publié.** La section « Nos clients témoignent » contient
un modèle HTML commenté (`src/lib/layout.mjs`, fonction `reviewsSection`) prêt à
recevoir de vrais témoignages. Dupliquez le bloc `<article class="review">` pour
chaque avis authentique, puis supprimez le bloc `.notice`.

## 9. Informations à compléter avant mise en ligne

Ces éléments n'ont pas été inventés et doivent être renseignés :

- `mentions-legales.html` : forme juridique, adresse, SIRET, TVA, directeur de
  publication, hébergeur, assurance (marqués `[À COMPLÉTER]` dans
  `src/pages/mentions-legales.mjs`).
- `politique-confidentialite.html` : raison sociale et adresse du responsable de
  traitement.
- `SITE.baseUrl` dans `src/lib/layout.mjs` (utilisé par les balises canoniques,
  Open Graph et le sitemap) : remplacer par le domaine réel si différent.
- Le logo officiel (§4) et les photos d'intervention (§5).
- Le cas échéant, un bandeau de consentement cookies si des outils de mesure
  sont activés.

## 10. Performance

- Aucune police web, aucune librairie JS, aucun appel réseau externe.
- CSS ~19 Ko, JS ~7 Ko, visuels SVG ~4 Ko chacun.
- `loading="lazy"` + `decoding="async"` sur toutes les images hors hero,
  `fetchpriority="high"` sur le visuel du hero.
- `width`/`height` sur chaque image (pas de décalage de mise en page / CLS).
- Cache long des assets configuré dans `netlify.toml` / `vercel.json`.
