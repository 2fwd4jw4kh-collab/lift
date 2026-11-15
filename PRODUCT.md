# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Maxence, étudiant qui fait de la musculation, et quelques proches (amis de salle) qui créent un compte pour le même usage. Ils ouvrent Lift sur leur téléphone, installé en PWA, à la salle entre deux séries et après coup pour voir où ils en sont.

## Product Purpose
Carnet de musculation : suivre un programme (séances A/B/C), noter chaque série (charge, répétitions, RIR, repos), et voir la progression par exercice. Le succès : saisir une série en quelques secondes pendant la séance, et avoir envie de rouvrir l'appli pour voir ses courbes et records.

## Positioning
Un carnet personnel construit autour du RIR (répétitions en réserve) et d'un programme fixe, sans réseau social ni abonnement ; les données restent sur l'appareil sauf si l'on crée un compte.

## Operating Context
Utilisé debout dans une salle de sport, souvent d'une main, entre deux séries, parfois en sueur ou avec des gants ; puis au calme pour consulter la progression. Les deux moments comptent autant.

## Capabilities and Constraints
- Onglets : Aujourd'hui (prochaine séance, semaine, dernière séance, records), Progression (courbes par exercice, KPI, volume 7 jours, historique, liste d'exercices), Séances (historique, séance passée, démarrer).
- Séance en direct avec séries, reps, RIR, repos du programme ; éditeur de programme ; fusion d'exercices ; bilan de la semaine.
- Comptes optionnels via Supabase (synchronisation), sauvegarde/restauration texte ou fichier, page de confidentialité.
- Fonctionne hors ligne (service worker). Une seule page `index.html` sans étape de build.
- Toutes les fonctions existantes doivent être conservées.

## Brand Commitments
Nom « Lift ». Langue : français, tutoiement.

## Evidence on Hand
Pas de témoignages ni de chiffres d'utilisateurs ; n'en inventer aucun.

## Product Principles
- La saisie pendant la séance passe avant tout : gros chiffres, grandes cibles, zéro friction.
- La progression doit se lire en un coup d'œil, sans texte d'explication.
- Un carnet personnel, pas une plateforme : pas de gamification ni de social.
- Les données appartiennent à l'utilisateur.
