-- Revert match-your-mates:domains from pg

BEGIN;

ALTER TABLE "user"
    ALTER COLUMN "email" TYPE TEXT;
    
DROP DOMAIN email;

COMMIT;
