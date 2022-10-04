const express = require('express');

const { userController, announcementController } = require('../controllers');
const controllersHandler = require('../helpers/controllersHandler');
const jwt = require('../utils/JWT');
const validate = require('../validation/validator');
const { editOfferSchema } = require('../validation/schemas');

const router = express.Router();

// route pour la liste de tous les equipes
router
    .route('/')
    .get(controllersHandler(userController.getAllTeams));

// route pour un equipe
router
    .route('/:id(\\d+)')
    .get(controllersHandler(userController.getOne));

// route pour les annonces d'une team
router
    .route('/:id(\\d+)/offers')
    .get(controllersHandler(announcementController.getAll));

// route pour voir le détail d'une annonce
router
    .route('/:id(\\d+)/offers/:announcementId(\\d+)')
    .get(controllersHandler(announcementController.getOne))
    // pour modifier l'annonce
    .patch(validate('body', editOfferSchema), jwt.isTeam, controllersHandler(announcementController.update))
    // pour supprimer l'annonce
    .delete(jwt.isTeam, controllersHandler(announcementController.delete));

module.exports = router;
