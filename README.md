# Lift – carnet de musculation

Application web installable (PWA), en français : séances guidées au RIR, la bonne charge proposée à chaque série, records (1RM estimé), progression, fiches d'exercices illustrées.

- **Hors ligne** une fois ouverte une première fois. **Sans compte** par défaut : les données restent sur l'appareil. Compte facultatif (Supabase) pour synchroniser plusieurs appareils.
- **Sauvegarde** : fichier, export tableur (CSV), import depuis Hevy ou Strong, versions quotidiennes (7 jours).
- **Installation** : ouvrir le site sur le téléphone, puis « Ajouter à l'écran d'accueil ». L'icône propose un raccourci « Démarrer une séance ».

## Structure
| Fichier | Rôle |
|---|---|
| `index.html` | Structure des écrans et numéro de version (`APPV`) |
| `css/app.css` | Charte « Piste » en un seul système : jetons (couleurs, tailles, couches), puis une section par zone de l'appli (voir `DESIGN.md`) |
| `js/donnees.js` | Sauvegarde locale, versions, compte et synchro, import/export, 1RM |
| `js/seance.js` | Séance en direct : séries, repos, ajout, cardio, ressenti |
| `js/progression.js` | Graphique, records, historique, édition des perfs |
| `js/programme.js` | Accueil, prochaine séance, objectifs, tutoriel, rappels |
| `js/contenu.js` | Muscles, schémas, fiches, lexique |
| `js/app.js` | Cœur : état, rendu général, navigation, démarrage (chargé après les fichiers ci-dessus) |
| `js/reglages.js` | Page Réglages |
| `js/gestes.js` | Toucher et navigation façon iOS |
| `js/finitions.js` | Import, partage, astuces, « Donner mon avis », statistiques anonymes |
| `supabase/lift_events.sql` | Table des statistiques anonymes + requêtes des 3 indicateurs |
| `.github/workflows/tests.yml` | Lance les tests à chaque envoi sur GitHub |
| `sw.js` | Mode hors ligne (réseau d'abord, cache en secours) |
| `exos/` | Dessins des mouvements (CC BY-SA 4.0, voir `exos/CREDITS.md`) |

À chaque mise en ligne : changer `APPV` dans `index.html` (affiche « Nouvelle version » aux utilisateurs) et le nom du cache `C` dans `sw.js`.

## Tests
```
python3 -m http.server 8765 &
python3 tests/smoke.py
```
Vérifie : date locale après minuit, records en reps, écran de séance, résumé du mois, export CSV, import Hevy/Strong, alerte de stockage plein, rappels d'agenda, premier lancement, bouton d'avis, statistiques anonymes.
Ces tests tournent automatiquement sur GitHub (onglet Actions) à chaque envoi.

## Statistiques anonymes
Sans cookie ni compte : un identifiant aléatoire par appareil, et seulement 3 événements (`start` = tutoriel terminé, `first_session`, `session`) avec la date et la version. Désactivable dans Réglages › À propos. Pour les activer, exécuter une fois `supabase/lift_events.sql` dans Supabase (SQL Editor) ; les 3 indicateurs se lisent avec les requêtes en bas du fichier.
