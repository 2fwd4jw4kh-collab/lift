-- Lift : statistiques anonymes (aucune donnée personnelle, aucun lien avec les comptes)
-- À exécuter une fois dans Supabase › SQL Editor › New query › Run. (Fait le 16/11/2026.)

create table if not exists public.lift_events (
  id bigint generated always as identity primary key,
  aid uuid not null,                         -- identifiant aléatoire tiré sur l'appareil, sans lien avec un compte
  ev text not null check (ev in ('start','first_session','session')),
  d date not null,                           -- jour de l'événement
  v text,                                    -- version de l'appli
  created_at timestamptz not null default now()
);

alter table public.lift_events enable row level security;

-- L'appli peut seulement AJOUTER des lignes. Personne ne peut les lire par l'API :
-- tu les consultes uniquement depuis le tableau de bord Supabase.
drop policy if exists "ajout anonyme" on public.lift_events;
create policy "ajout anonyme" on public.lift_events
  for insert to anon, authenticated with check (true);
grant insert on public.lift_events to anon, authenticated;

-- ===== Mise à jour 3.2 (audit) : 2 événements en plus =====
-- open   = ouverture de l'appli (une fois par jour et par appareil) -> mesure les visites
-- signup = création d'un compte
-- À exécuter une fois dans le SQL Editor (sans ça, l'appli abandonne ces 2 événements sans gêner les autres) :
alter table public.lift_events drop constraint if exists lift_events_ev_check;
alter table public.lift_events add constraint lift_events_ev_check
  check (ev in ('start','first_session','session','open','signup'));

-- 4. Entonnoir : visite -> tutoriel terminé -> 1re séance -> compte
-- select count(distinct aid) filter (where ev='open') as visiteurs,
--        count(distinct aid) filter (where ev='start') as tutoriel_fini,
--        count(distinct aid) filter (where ev='first_session') as premiere_seance,
--        count(distinct aid) filter (where ev='signup') as comptes
-- from public.lift_events;

-- 5. Bloqués : tutoriel fini il y a plus de 24 h, toujours aucune séance
-- select count(*) from (select aid, min(d) d0 from public.lift_events where ev='start' group by aid) s
-- where s.d0 <= current_date - 1
--   and not exists (select 1 from public.lift_events e where e.aid=s.aid and e.ev in ('first_session','session'));

-- ===== Les 3 indicateurs (à lancer dans le SQL Editor quand tu veux les voir) =====

-- 1. Activation : sur ceux qui ont fini le tutoriel, combien ont terminé une première séance
-- select count(distinct aid) filter (where ev='start') as installs,
--        count(distinct aid) filter (where ev='first_session') as premieres_seances
-- from public.lift_events;

-- 2. Séances par semaine et par utilisateur actif
-- select date_trunc('week', d)::date as semaine,
--        count(*) as seances, count(distinct aid) as actifs,
--        round(count(*)::numeric / nullif(count(distinct aid),0), 1) as seances_par_actif
-- from public.lift_events where ev='session' group by 1 order by 1 desc;

-- 3. Retour à 4 semaines : parmi ceux qui ont fait une 1re séance il y a 4 semaines ou plus,
--    combien ont encore fait une séance au moins 28 jours après
-- with f as (select aid, min(d) as d0 from public.lift_events where ev in ('first_session','session') group by aid having min(d) <= current_date - 28)
-- select count(*) as cohorte,
--        count(*) filter (where exists (select 1 from public.lift_events e where e.aid=f.aid and e.ev='session' and e.d >= f.d0 + 28)) as revenus
-- from f;
