# Lift – carnet de musculation

Application web installable (PWA), en français : séances guidées au RIR, la bonne charge proposée à chaque série, records (1RM estimé), progression, fiches d'exercices illustrées.

- **Hors ligne** une fois ouverte une première fois. **Sans compte** par défaut : les données restent sur l'appareil. Compte facultatif (Supabase) pour synchroniser plusieurs appareils.
- **Sauvegarde** : fichier, export tableur (CSV), import depuis Hevy ou Strong, versions quotidiennes (7 jours).
- **Installation** : ouvrir le site sur le téléphone, puis « Ajouter à l'écran d'accueil ». L'icône propose un raccourci « Démarrer une séance ».

## Structure
| Fichier | Rôle |
|---|---|
| `index.html` | Structure des écrans et numéro de version (`APPV`) |
| `css/app.css` | Charte « Piste » (voir `DESIGN.md`) |
| `js/app.js` | Cœur : données, séances, progression, records, programmes, compte |
| `js/reglages.js` | Page Réglages |
| `js/gestes.js` | Toucher et navigation façon iOS |
| `js/finitions.js` | Import/export, partage, rappels, astuces |
| `sw.js` | Mode hors ligne (réseau d'abord, cache en secours) |
| `exos/` | Dessins des mouvements (CC BY-SA 4.0, voir `exos/CREDITS.md`) |

À chaque mise en ligne : changer `APPV` dans `index.html` (affiche « Nouvelle version » aux utilisateurs) et le nom du cache `C` dans `sw.js`.

## Tests
```
python3 -m http.server 8765 &
python3 tests/smoke.py
```
Vérifie : date locale après minuit, records en reps, écran de séance, résumé du mois, export CSV, import Hevy/Strong, alerte de stockage plein, rappels d'agenda, premier lancement.
