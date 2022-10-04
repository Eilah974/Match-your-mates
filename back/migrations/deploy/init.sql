-- Deploy match-your-mates:init to pg

BEGIN;

CREATE TABLE "rank" (
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "type" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "game_role" (
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "type" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user" (
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "username" TEXT UNIQUE NOT NULL,
    "email" TEXT UNIQUE NOT NULL,
    "password" TEXT NOT NULL,
    "user_type" TEXT NOT NULL,
    "avatar" TEXT DEFAULT 'https://img.freepik.com/vecteurs-premium/astronaute-mignon-travaillant-ordinateur-po[…]stration-icone-technologie-scientifique_138676-1993.jpg?w=740',
    "age" INT,
    "description" TEXT,
    "availablity_recruitment" BOOLEAN DEFAULT TRUE,
    "search" TEXT,
    "rank_id" INT REFERENCES "rank"("id"),
    "game_role_id" INT REFERENCES "game_role"("id"),
    "created_at" TIMESTAMPTZ DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);


CREATE TABLE "announcement" (
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "search_profile" TEXT NOT NULL,
    "user_id" INT NOT NULL REFERENCES "user"("id"),
    "created_at" TIMESTAMPTZ DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ

);


COMMIT;
