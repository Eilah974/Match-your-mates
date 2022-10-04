BEGIN;


INSERT INTO "user" ("username", "email", "password", "user_type", "avatar", "age", "description", "availablity_recruitment", "search", "rank_id", "game_role_id") VALUES
('Nisqy', 'Nisqy@gmail.com', '$$2y$10$4xggEHj7solSgQM8S/WiTOT6BSHGMzpyFW57rD/OdnavS5CThDkzC', 'player', null, 23, null, false, null, 9, 3), --mdp: PetitBelge
('Mymystia', 'mymystia@laposte.fr', '$2a$10$HDaQSgCRhoTEvQ.huNAV2esxdZfMGZuokieUVc0ElNwCNQSSRotTm',  'player', null, 33, null, true, null, 4, 1), --mdp: MogForever
('Adam', 'adamlol@hotmail.com', '$2a$10$AO242C5nq4IhdaNiDRrdmefcNCiiCfr8Nd6XrwiLduWqJIRjp43c6', 'player', null, 22, null, true, null, 8, 1), --mdp: LECwaitme
('Oclock', 'oclocklol@oclock.io', '$2a$10$ucrLGhCtb8LtRH1FStkXguP7UuafsX1VSdrWfoIx8XKSAY6rK.jm.', 'team', null, null, null, true, null, 3, null), --mdp: DevPHPJSNode
('Eclypsia', 'Eclypsia@gmail.fr', '$2a$10$GAyGTRy.UpXmFj22yvLx/e2LGCVJLLpWdvrCwxg.xBL7SpoGCRHe6', 'team', null, null, null, false, null, 5, null), --mdp: EclypsiaIsBack
('Millenium', 'saintkikipedia@yahoo.com', '$2a$10$DFQf/u22LfnWLVietIONxeOVykO71KI0vR6qdqH28lt3VMHTr8Qhe', 'team', null, null, null, true, null, 6, null); --mdp: Millenium2000lol





COMMIT;