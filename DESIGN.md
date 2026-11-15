# Lift — charte « Piste »

Univers : feuille de résultats d'athlétisme. Chaque perf a une marque, un record, un écart.

## Couleurs (variables CSS dans `index.html`)
Principe : des neutres et **un seul rouge brique**. Aucune autre couleur.
| Rôle | Valeur | Usage |
|---|---|---|
| `--bg` | `#F3F3F1` | Fond |
| `--card` / `--card2` | `#FFFFFF` / `#E7E9E5` | Blocs / fonds neutres |
| `--line` | `#D5D8D3` | Filets |
| `--tx` / `--t2` / `--t3` | `#14161A` / `#4E545B` / `#646A71` | Texte (≥ 4,5:1) |
| `--red` / `--red-ink` | `#9E2F21` / `#8A2819` | Bandeau du haut, action principale, onglet actif, marque PB, courbe de progression |

- Une seule action rouge par écran ; le reste en noir ou en texte.
- Groupes musculaires : gris `#6E747A`, on les distingue par leur nom, pas par la couleur.
- RIR : échelle de gris (0 noir, 1 gris foncé, 2 gris clair, 3+ neutre).
- Comparaison de courbes : rouge, noir, gris.

## Typographie
Archivo variable, hébergée dans `fonts/archivo.woff2` (mise en cache hors ligne). Les chiffres, titres et marques sont étroits (`font-stretch: 72%`, graisse 800), façon tableau d'affichage ; le reste est en largeur normale.
Échelle : 12 · 13 · 15 · 17 · 22 · 30 · 52 px (`--f1` à `--f7`). Les champs de saisie restent à 16 px minimum.

## Formes
Rayons : 4 px (puces, boutons secondaires), 8 px (blocs, boutons), 14 px (haut des feuilles). Les ronds sont réservés aux pastilles RIR, aux points de couleur et aux coches de séries. Pas d'ombres décoratives ni de bandes de couleur sur le côté.

## Geste signature
- **PB** (fond rouge) : la série bat le record de l'exercice.
- **SB** (contour noir) : meilleure perf des 8 dernières semaines, sans être un record.
- Liste d'exercices en tableau de résultats : Exercice · Perf · Écart (vs séance précédente).

## Mouvement
Appui : `scale(.97)`, 140 ms, `cubic-bezier(.23,1,.32,1)`. Feuilles : 320 ms, courbe tiroir iOS. Survols seulement avec souris (`hover: hover`).

## Réglages
Page à part ouverte par le rouage du bandeau (pas un onglet), avec « ‹ Retour ». Liste façon réglages iPhone : libellé à gauche, valeur en gris, chevron. Aucun bouton rouge plein. La zone sensible est isolée en bas, texte rouge, double confirmation. Une pastille blanche sur le rouage signale une sauvegarde à faire ou une synchro en échec.
