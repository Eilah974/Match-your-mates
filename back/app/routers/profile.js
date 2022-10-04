const express = require('express');

const { profileController, announcementController } = require('../controllers');
const controllersHandler = require('../helpers/controllersHandler');
const jwt = require('../utils/JWT');
const validate = require('../validation/validator');
const { createOfferSchema, editPasswordSchema } = require('../validation/schemas');

const router = express.Router();

// route pour afficher le profile de l'utilisateur
router
    .route('/')
    .get(jwt.getAuthTokken, controllersHandler(profileController.getProfile))
    // pour supprimer le profile utilisateur
    .delete(jwt.getAuthTokken, controllersHandler(profileController.delete));

// route pour modifier le profile utilisateur
router
    .route('/edit')
    .patch(jwt.getAuthTokken, controllersHandler(profileController.update));

// route pour modifier le mot de passe utlisateur
router
    .route('/editPassword')
    .patch(validate('body', editPasswordSchema), jwt.getAuthTokken, controllersHandler(profileController.changePassword));

// route pour créer une annonce (team)
router
    .route('/createOffer')
    .post(validate('body', createOfferSchema), jwt.isTeam, controllersHandler(announcementController.create));

module.exports = router;
