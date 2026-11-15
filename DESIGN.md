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
- Groupes musculaires : 3 familles en 2 intensités. Poussée : Pectoraux `#9E2F21`, Épaules `#C46A58`. Tirage (sarcelle, complémentaire du rouge) : Dos `#2E5E5A`, Bras `#6E9692`. Bas du corps et tronc : Jambes `#14161A`, Abdos `#8A9096`. Uniquement pour les points, courbes et mini-graphiques ; les libellés restent gris.
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

## Icône
Trois disques vus de profil, de plus en plus grands, sur une barre blanche : à la fois une barre chargée et une progression. Disques rouge brique #9E2F21, barre blanche, fond noir encre #14161A. Source vectorielle : `icon.svg`.

## Version 2.2
- Accueil : phrase du jour selon la situation (jour de séance, séance bouclée + PB, repos, reprise) ; date et avancement de la semaine au-dessus. Régularité déplacée dans Progression. Sauvegarde et allègement réduits à une ligne.
- Lexique : un « ? » à côté des termes techniques ouvre leur définition ; lexique complet dans les Réglages.
- Tutoriel en 4 écrans (Lift, RIR, PB/SB, prénom + objectif), « Passer » partout, relançable depuis les Réglages.
- Séance en direct : « + Ajouter un exercice » (même groupe d'abord) et cardio court (durée, intensité Facile / Soutenu / Dur).
- Ressenti à cocher avant d'enregistrer ; il ajuste les suggestions suivantes.
- Objectifs : prise de masse, force pure (1RM estimé), full body, cardio, calisthénie (lest, reps ou secondes). Chaque programme est gardé quand on change d'objectif.

## Version 2.3 : toucher et navigation iOS
- Barre d'état toujours pleine (rouge), plus de voile au défilement ; barre compacte avec titre et rouage quand le grand bandeau sort de l'écran.
- Onglets : icône pleine quand active, retoucher l'onglet remonte en haut, position de défilement gardée par onglet. Réglages arrive par la droite, retour en glissant depuis le bord gauche.
- Feuilles : poignée, glisser vers le bas pour fermer, toucher le fond pour fermer, page derrière bloquée. Ouverture 380 ms courbe tiroir, fermeture 240 ms.
- Toucher : appui visible immédiatement, cibles ≥ 40-44 px, + / − répétés à l'appui long, champs numériques sélectionnés au toucher.
- Gestes : glisser horizontalement en séance pour changer d'exercice ; glisser une ligne de Séances vers la gauche pour Modifier / Supprimer.
- Messages en bannière en haut, glisser vers le haut pour fermer. Retour haptique aux moments clés (Android ; iPhone récent si Safari le permet).
- Écran de démarrage : logo sur fond noir encre. Bouton « Comparer » retiré.

## Version 2.4
- Notion de volume retirée partout (séances, Progression, graphique, lexique) ; les séances affichent le nombre de séries.
- Exercices regroupés par muscle (Pectoraux, Épaules, Dos, Bras, Jambes, Abdos) dans Séances, la dernière séance et les puces de Progression.
