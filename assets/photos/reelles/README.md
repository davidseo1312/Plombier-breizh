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

## La séance : 20 minutes sur un chantier ordinaire

Pas besoin d'organiser quoi que ce soit. Sur votre prochaine intervention,
sortez le téléphone six fois. C'est tout.

1. **Avant de commencer** — la panne telle que vous la trouvez : le siphon
   encrassé, la fuite, l'évacuation bouchée. → `chantier-fuite.jpg`
2. **Le camion** garé devant, portes ouvertes si le matériel se voit.
   → `camion.jpg`
3. **Le matériel posé au sol** avant d'attaquer : furet, caméra, détecteur.
   → `materiel.jpg`
4. **Vos mains au travail**, cadré serré sur le geste. Demandez au client de
   déclencher, ou calez le téléphone. → `chantier-chauffe-eau.jpg` ou
   `chantier-sanitaire.jpg`
5. **Après**, la réparation terminée et le sol essuyé.
6. **Vous**, une seule fois, de face, devant le camion. → `artisan.jpg`

Les cinq premières ne demandent aucune mise en scène : ce sont des photos que
vous prenez déjà pour vos devis et vos constats d'assurance.

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

## Pourquoi ça compte

Les visuels actuels sont générés. Ils ont été recadrés sur le geste — mains,
outil, pièce réparée — parce que ce sont les VISAGES qui trahissent une image
générée, et parce que le même technicien apparaissait dans onze photos sur
vingt et une : aucun artisan ne dispose de onze portraits de studio.

Ce recadrage fait gagner beaucoup, mais il a un plafond. Une photo de VOTRE
camion devant une vraie maison bretonne, avec VOTRE plaque, fait une chose
qu'aucun traitement ne peut imiter : elle prouve que l'entreprise existe.
