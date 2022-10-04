-- Deploy match-your-mates:domains to pg

BEGIN;

CREATE DOMAIN email AS TEXT 
CHECK(
    value ~ '^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$'
);

ALTER TABLE "user"   
    ALTER COLUMN "email" TYPE email;
    
COMMIT;
