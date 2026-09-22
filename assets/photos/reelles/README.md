# Vos vraies photos

Déposez ici vos photos **réelles**, prises sur vos chantiers. Dès qu'un fichier
est présent sous l'un des noms ci-dessous, il **remplace automatiquement** la
photo générée correspondante sur les seize pages, au prochain `node build.mjs`.
Aucune autre modification n'est nécessaire.

| Nom du fichier            | Ce qu'on doit y voir |
|---------------------------|----------------------|
| `artisan.jpg`             | Vous, de face ou au travail, visage visible. C'est la photo qui rassure le plus. |
| `camion.jpg`              | Votre véhicule floqué, de préférence devant un chantier ou un lieu reconnaissable. |
| `chantier-fuite.jpg`      | Une recherche ou une réparation de fuite en cours. |
| `chantier-chauffe-eau.jpg`| Une intervention sur un chauffe-eau ou un cumulus. |
| `chantier-sanitaire.jpg`  | Une pose ou un remplacement de sanitaire, WC, évier, douche. |
| `materiel.jpg`            | Votre matériel réel : furet électrique, haute pression, caméra, détecteur. |

## Consignes de prise de vue

- **Format paysage**, au moins 1400 px de large. Le site fabrique tout seul les
  déclinaisons WebP en 480, 760, 1100 et 1536 px.
- **Au téléphone, c'est très bien.** Une photo de chantier un peu imparfaite
  inspire davantage confiance qu'un visuel de banque d'images : c'est
  exactement ce qu'on cherche.
- **Lumière du jour** autant que possible, et pas de flash direct.
- **Rien d'identifiable chez le client** sans son accord : nom sur une boîte
  aux lettres, plaque d'immatriculation, visage d'un tiers.
- Le nom du fichier compte, l'extension aussi : `.jpg` en minuscules.

## Après le dépôt

```
node tools/photo-realisme.mjs     # facultatif, harmonise le rendu
node tools/images.mjs             # fabrique les WebP et les largeurs
node build.mjs                    # régénère les pages
```

Les photos actuelles restent en place tant qu'un fichier n'est pas déposé :
une image imparfaite convertit toujours mieux qu'un emplacement vide.
