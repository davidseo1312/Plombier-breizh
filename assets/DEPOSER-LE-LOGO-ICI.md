# Logo officiel Plombier Breizh

## ✅ Le logo officiel est installé

| Fichier | Rôle |
|---|---|
| `logo-plombier-breizh.png` | Logo affiché dans le header et le pied de page (316 × 240) |
| `logo-plombier-breizh-original.webp` | **Fichier d'origine intact**, tel que fourni (1464 × 1074) |
| `favicon.png` | Icône d'onglet du navigateur (180 × 180) |

Le fichier affiché est le logo d'origine, uniquement **détouré de ses marges
blanches et redimensionné** pour le web : la composition, les couleurs et le
lettrage sont ceux du fichier fourni. Aucun élément n'a été redessiné.

Pour revenir au fichier d'origine sans détourage :
`node tools/installer-logo.mjs assets/logo-plombier-breizh-original.webp`

---

## Remplacer le logo plus tard

**Aucun logo n'est dessiné ni reconstitué dans ce projet.** Le site affiche
uniquement VOTRE fichier. S'il venait à être retiré, le header et le pied de
page afficheraient simplement le nom « Plombier Breizh » écrit en toutes lettres.

Un seul fichier suffit pour équiper tout le site.

---

## Noms et formats acceptés

Déposez le fichier dans ce dossier (`assets/`) sous **n'importe lequel** de ces
noms — le site les essaie tous, dans cet ordre :

```
logo-plombier-breizh.png      ← recommandé
logo-plombier-breizh.webp
logo-plombier-breizh.jpg
logo-plombier-breizh.jpeg
logo-plombier-breizh.svg
logo.png   logo.webp   logo.jpg   logo.jpeg   logo.svg
```

Optionnel — une version différente pour le pied de page (sinon le logo
principal y est repris automatiquement) :

```
logo-plombier-breizh-vertical.png   (ou .webp / .jpg / .svg)
```

Optionnel — l'icône d'onglet du navigateur :

```
favicon.png
```

Format conseillé : PNG à fond transparent, hauteur ≥ 200 px.

---

## Quatre façons de le déposer

### 1. Glisser-déposer sur GitHub (aucun outil à installer)

Ouvrez cette page et faites glisser le fichier dessus :

<https://github.com/davidseo1312/Plombier-breizh/upload/claude/plombier-breizh-landing-m2zfjk/assets>

Renommez-le `logo-plombier-breizh.png`, puis validez avec « Commit changes ».
C'est tout — rien d'autre à faire.

### 2. En ligne de commande

```bash
cp /chemin/vers/votre-logo.png assets/logo-plombier-breizh.png
git add assets && git commit -m "Ajout du logo officiel" && git push
```

### 3. Avec l'installateur fourni

Il accepte un fichier, une URL, ou du base64, détecte le format tout seul et
range le fichier au bon endroit :

```bash
node tools/installer-logo.mjs ~/Bureau/logo.png
node tools/installer-logo.mjs https://exemple.fr/logo.png
node tools/installer-logo.mjs "data:image/png;base64,iVBORw0KGgo..."
cat logo.b64 | node tools/installer-logo.mjs -

# variante du pied de page, et icône d'onglet
node tools/installer-logo.mjs ~/logo-vertical.png --vertical
node tools/installer-logo.mjs ~/logo.png --favicon
```

### 4. En le collant dans une conversation Claude Code

Convertissez le fichier en base64 puis collez le résultat en demandant de
l'installer :

```bash
base64 -w0 votre-logo.png    # Linux
base64 -i votre-logo.png     # macOS
```

---

## Vérifier que c'est bon

Ouvrez le site : si le logo apparaît dans le header et dans le pied de page à
la place du nom écrit en toutes lettres, c'est installé.
