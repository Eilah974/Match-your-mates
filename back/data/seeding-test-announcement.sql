BEGIN;




INSERT INTO "announcement" ("title", "description", "search_profile", "user_id") VALUES
('recherche midlaner pour nouvelle équipe', 'Nous allons bientôt créer un nouveau roster Lol et nous recherchons un midlaner d expérience pour nous aider', 'midlane master', 4),
('recherche last en botlaner', 'nous sommes LF1 pour commencer les tournois','botlaner', 6 ),
('recherche joueur Support pour completer roster', 'nous sommes a la recherche d un support experimenté pour tournois regionaux ', 'support grandmaster', 4);


COMMIT;