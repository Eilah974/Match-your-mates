-- Revert match-your-mates:init from pg

BEGIN;

DROP TABLE "announcement", "user", "game_role", "rank";

COMMIT;
