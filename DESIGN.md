# Lift — charte « Piste »

Univers : feuille de résultats d'athlétisme. Chaque perf a une marque, un record, un écart.

## Couleurs (variables CSS dans `index.html`)
| Rôle | Valeur | Usage |
|---|---|---|
| `--bg` | `#F1F2EF` | Fond (papier de feuille de résultats) |
| `--card` | `#FFFFFF` | Blocs, feuilles, barre d'onglets |
| `--card2` | `#E7E9E5` | Fonds neutres (segments, cases vides) |
| `--line` | `#D5D8D3` | Filets (couloirs) |
| `--tx` / `--t2` / `--t3` | `#14161A` / `#4E545B` / `#646A71` | Texte (tous ≥ 4,5:1 sur le fond) |
| `--red` / `--red-ink` | `#C4361F` / `#A62B17` | Bandeau du haut, action principale, onglet actif / texte rouge |
| `--pb` | `#1D7A3C` | Record (PB), progression, série validée |
| `--warn` / `--amber` | `#9A6200` / `#E9A21B` | Recul, alerte / RIR 1 |

Une seule action rouge par écran ; les actions secondaires sont noires (`--tx`) ou en texte. Groupes musculaires (données uniquement) : Pectoraux `#B8460F`, Dos `#2463A8`, Épaules `#966305`, Bras `#14726D`, Jambes `#7A4FB0`, Abdos `#5C6B7A`.

## Typographie
Archivo variable, hébergée dans `fonts/archivo.woff2` (mise en cache hors ligne). Les chiffres, titres et marques sont étroits (`font-stretch: 72%`, graisse 800), façon tableau d'affichage ; le reste est en largeur normale.
Échelle : 12 · 13 · 15 · 17 · 22 · 30 · 52 px (`--f1` à `--f7`). Les champs de saisie restent à 16 px minimum.

## Formes
Rayons : 4 px (puces, boutons secondaires), 8 px (blocs, boutons), 14 px (haut des feuilles). Les ronds sont réservés aux pastilles RIR, aux points de couleur et aux coches de séries. Pas d'ombres décoratives ni de bandes de couleur sur le côté.

## Geste signature
- **PB** (fond vert) : la série bat le record de l'exercice.
- **SB** (contour vert) : meilleure perf des 8 dernières semaines, sans être un record.
- Liste d'exercices en tableau de résultats : Exercice · Perf · Écart (vs séance précédente).

## Mouvement
Appui : `scale(.97)`, 140 ms, `cubic-bezier(.23,1,.32,1)`. Feuilles : 320 ms, courbe tiroir iOS. Survols seulement avec souris (`hover: hover`).
