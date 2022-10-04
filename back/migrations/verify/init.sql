-- Verify match-your-mates:init on pg

BEGIN;

SELECT * FROM "rank" WHERE false;

SELECT * FROM "game_role" WHERE false;

SELECT * FROM "profile" WHERE false;

SELECT * FROM "user" WHERE false;

SELECT * FROM "announcement" WHERE false;

ROLLBACK;
