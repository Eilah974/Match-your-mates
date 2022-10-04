BEGIN;

TRUNCATE TABLE "user" RESTART IDENTITY CASCADE;

INSERT INTO "user" ("username", "email", "password", "user_type", "avatar", "age", "description", "availablity_recruitment", "search", "rank_id", "game_role_id") VALUES
('Trayton', 'trayton@gmail.com', '$2a$10$N1ohimPNUtUQpNN63dXgJOkKk0GRkpYArJjeZG2cdjVh0NYse0h5O', 'player', 'https://pbs.twimg.com/media/Dxl1eKBXcAAxRC8.jpg', 21, null, false, null, 9, 5), --mdp: thebeast95
('Tutune', 'tutune@laposte.fr', '$2a$10$GFw3BtjgPndUcDHJImTxu.IzFKbAEsHyvnFDfdKpJJenmTp5CC2je',  'player', 'https://media.istockphoto.com/photos/young-male-esports-gamers-picture-id1209925563?k=20&m=1209925563&s=612x612&w=0&h=liaa9jTW6q14skvyTM5BDGpQx9LhrxClcMuWIFuS8Ac=', 28, null, true, null, 3, 5), --mdp: carpettetime
('Eilah', 'eilah@hotmail.com', '$2a$10$ThSLk./xbMo1InB/7OJOWu93nSInCMPGO/jffwA5sff0k5e5ROQFu', 'player', 'http://elnanobrokeur.free.fr/Alita99-1-small.jpg', 36, null, true, null, 1, 4), --mdp: ItsShowTime
('Team-aAa', 'teamaaa@gmail.com', '$2a$10$qnL4R8IFSfb.C51q0tgtxe2S1seyvJ3OzRGGXIRPiPf63WWPtWeeS', 'team', 'https://www.team-aaa.com/upload/admin/Divers/Images_diverses/team_aAa.png', null, null, true, null, 7, null), --mdp: LesBestdu75
('Kcorp', 'kcorp@gmail.fr', '$2a$10$K5JWt//fDKbrCnIfMPqtzuVYslJUcddaFCWBtTdGwP99JbjoEPxHm', 'team', 'https://mir-s3-cdn-cf.behance.net/projects/404/019e99124455027.Y3JvcCwyODUwLDIyMjksMzMxLDEzMjY.jpg', null, null, false, null, 5, null), --mdp: KametoOuTard
('WatM', 'saintkikipedia@yahoo.com', '$2a$10$y6PKoKjEEsKh2TKlsHsWxuR.Im9RpoxElli6KKfzAWKi880j3Xd7G', 'team', 'https://media.istockphoto.com/photos/team-of-professional-cybersport-gamers-celebrating-success-in-gaming-picture-id1354761874?k=20&m=1354761874&s=612x612&w=0&h=rNYRSukPvoDbAO-VeXqYzD9xmslIEjD0iQgcc7oLhuI=', null, null, true, null, 2, null), --mdp: MogForever
('Nisqy', 'Nisqy@gmail.com', '$$2y$10$4xggEHj7solSgQM8S/WiTOT6BSHGMzpyFW57rD/OdnavS5CThDkzC', 'player', 'https://cloud9.gg/wp-content/uploads/2020/06/Nisqy-393x432_2.png', 23, null, false, null, 9, 3), --mdp: PetitBelge
('Mymystia', 'mymystia@laposte.fr', '$2a$10$HDaQSgCRhoTEvQ.huNAV2esxdZfMGZuokieUVc0ElNwCNQSSRotTm',  'player', 'https://media.istockphoto.com/photos/young-male-esports-gamers-picture-id1209925563?k=20&m=1209925563&s=612x612&w=0&h=liaa9jTW6q14skvyTM5BDGpQx9LhrxClcMuWIFuS8Ac=', 33, null, true, null, 4, 1), --mdp: MogForever
('Adam', 'adamlol@hotmail.com', '$2a$10$AO242C5nq4IhdaNiDRrdmefcNCiiCfr8Nd6XrwiLduWqJIRjp43c6', 'player', 'https://www.lequipe.fr/_medias/img-photo-jpg/adam-adam-maanane-le-toplaner-francais-de-fnatic-qualifie-pour-les-mondiaux-michal-konkol-ri/1500000001533808/0:0,1997:1331-828-552-75/64369.jp', 22, null, true, null, 8, 1), --mdp: LECwaitme
('Oclock', 'oclocklol@oclock.io', '$2a$10$ucrLGhCtb8LtRH1FStkXguP7UuafsX1VSdrWfoIx8XKSAY6rK.jm.', 'team', 'https://media.cdn.teamtailor.com/images/s3/teamtailor-production/logotype-v3/image_uploads/8fb919f4-01d0-480b-b079-83d3e15f2f42/original.png', null, null, true, null, 3, null), --mdp: DevPHPJSNode
('Eclypsia', 'Eclypsia@gmail.fr', '$2a$10$GAyGTRy.UpXmFj22yvLx/e2LGCVJLLpWdvrCwxg.xBL7SpoGCRHe6', 'team', 'https://old.aaa.eu//photos/news/2015/CSGO/Mac%20Coy/eclypsia_esport_wallpaper.jpg', null, null, false, null, 5, null), --mdp: EclypsiaIsBack
('Millenium', 'millenium@yahoo.com', '$2a$10$DFQf/u22LfnWLVietIONxeOVykO71KI0vR6qdqH28lt3VMHTr8Qhe', 'team', 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Millenium_Logo_2020.png', null, null, true, null, 6, null); --mdp: Millenium2000lol






COMMIT;
