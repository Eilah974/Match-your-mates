BEGIN;


INSERT INTO "rank" ("type") VALUES
('Iron'),
('Bronze'),
('Silver'),
('Gold'),
('Platinium'),
('Diamond'),
('Master'),
('Grandmaster'),
('Challenger'); 

INSERT INTO "game_role" ("type") VALUES
('Toplane'),
('Jungler'),
('Midlane'),
('ADC'),
('Support');

COMMIT;