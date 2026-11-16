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

## Version 2.5 : muscles travaillés
Illustrations originales (pas reprises d'un autre site) : silhouette de face et de dos en gris neutre, muscles principaux en rouge brique plein, muscles en soutien en rouge à 35 %. Une carte compacte (mini-silhouette + noms) sous le nom de l'exercice en séance et dans Progression ; un toucher ouvre la grande illustration, une explication simple de chaque muscle et un conseil d'exécution. Les exercices créés à la main sont reconnus par mots-clés (curl, squat, rowing…) ou, à défaut, par leur groupe.

## Version 2.6 : dessins des mouvements
47 exercices illustrés par un dessin au trait libre de droits (Everkinetic / Workout Guide, CC BY-SA 4.0), recoloré en noir encre, qui alterne position de départ et d'arrivée. Affiché à côté de la silhouette des muscles dans la carte, et en grand dans la fenêtre de détail. Crédits dans Réglages › À propos et `exos/CREDITS.md`.

## Version 2.7 : textes explicatifs et vocabulaire
Fiche de chaque exercice : un paragraphe « sollicite principalement… / travaille aussi… », « Pourquoi le développer ? », puis deux conseils d'exécution. Les termes techniques (supination, grand dorsal, chaîne postérieure…) sont soulignés en rouge ; un toucher ouvre une bulle sombre avec la définition, un toucher ailleurs la ferme. Glossaire de 45 termes, textes pour les 47 exercices des programmes.

## Version 2.8
Toucher un mot de muscle souligné : la bulle montre une mini-silhouette avec seulement ce muscle en rouge, et le grand schéma de la fiche n'allume plus que cette zone (les autres repassent en gris) jusqu'à la fermeture de la bulle.

## Version 2.9 : schéma anatomique détaillé
Nouvelle silhouette dessinée pour Lift : contour du corps plus naturel et une trentaine de muscles séparés par de fins filets (deux faisceaux de pectoraux, deltoïdes avant / côté / arrière, abdominaux en 4 rangées, obliques, trois chefs des quadriceps, adducteurs, trapèzes, infra-épineux, grand rond, grand dorsal, lombaires, deux chefs du triceps, moyen et grand fessier, deux ischio-jambiers, jumeaux et soléaire). Les adducteurs deviennent une zone à part. Phrase « Touche un mot souligné… » retirée.

## Version 3.0 : cœur fiabilisé
- Dates à l'heure locale (plus de séance datée de la veille après minuit) ; rechargement automatique de la date au retour dans l'appli.
- Données : 7 versions quotidiennes au lieu de 30, demande de stockage persistant, bandeau d'alerte si un enregistrement échoue.
- Records (PB/SB) et courbe par défaut sur le 1RM estimé : plus lourd ou plus de reps compte ; au poids du corps, les reps (2,5 kg de lest ≈ 1 rep).
- Écran de séance : nom, objectif sur une ligne, suggestion, puis les séries tout de suite ; le reste (dernière fois, 1RM, muscles) sous les boutons.
- Premier lancement : tutoriel d'abord ; compte proposé seulement après la toute première séance.
- Progression : résumé du mois (séances, records, séries) et bloc Cardio sur 4 semaines.
- Réglages : export CSV, import Hevy/Strong, rappels dans l'agenda (.ics hebdomadaire avec alerte 15 min avant), inviter un ami.
- Retirés : bilan IA (invisible hors environnement Claude), copier-coller de sauvegarde rangé dans « avancé ».
- Code séparé en fichiers (`css/`, `js/`), tests de fumée dans `tests/smoke.py`.

## Version 3.1 : avis, mesure et fondations
- Réglages › Partage et avis : « Donner mon avis » ouvre un mail prérempli (version, appareil) vers l'adresse de contact.
- Statistiques anonymes sans cookie, 3 chiffres seulement : premières séances terminées, séances par semaine, retour 4 semaines plus tard. Interrupteur dans À propos.
- CSS en un seul système : toutes les couleurs isolées et les niveaux de superposition deviennent des jetons (`--scrim`, `--red-wash`, `--body*`, `--z-*`), sections nommées par zone et non plus par version. Rendu vérifié identique écran par écran.
- Cœur découpé : `donnees.js`, `seance.js`, `progression.js`, `programme.js`, `contenu.js`, `app.js`.
- Tests lancés automatiquement sur GitHub à chaque envoi.

## Version 3.2 : synchro sûre et accessibilité
- Synchro : si deux appareils ont été modifiés depuis la dernière synchro, les séances sont réunies au lieu que la plus récente écrase l'autre. Une suppression faite sur un seul appareil reste respectée quand l'autre n'a rien changé.
- Accessibilité : chaque fenêtre est annoncée par son nom à VoiceOver, la bulle de vocabulaire n'est plus lue quand elle est cachée, zones de toucher agrandies (« C'est fait », « Plus tard », « Retour »). Audit automatique (axe) sans défaut grave.
- Contrôle de sécurité hebdomadaire sur GitHub : vérifie qu'aucune donnée n'est lisible sans compte.

## Version 3.2 : corrections de l'audit du 16/11/2026
- Chaque champ a un libellé visible relié au champ (`<label for>`), y compris e-mail et mot de passe ; le texte d'exemple n'est plus le seul repère.
- Lien « Aller au contenu » en tête de page, visible seulement au clavier.
- Plus aucun `style="…"` ni `onclick` dans `index.html` : tout passe par `css/app.css` (classes utilitaires en fin de fichier) et `addEventListener`. Les affichages/masquages utilisent l'attribut `hidden`.
- Appels à l'action explicites : « Commencer » au 1er écran du tutoriel, « Créer mon programme » au dernier, « Commencer sans compte », « ▶ Démarrer une séance ».
- Statistiques : 2 événements en plus (`open`, `signup`) pour lire l'entonnoir visite → tutoriel → 1re séance → compte.
