const express = require('express');

const { userController } = require('../controllers');
const controllersHandler = require('../helpers/controllersHandler');

const router = express.Router();

// route pour la liste de tous les joueurs
router
    .route('/')
    .get(controllersHandler(userController.getAllPlayers));

// route pour un joueurs
router
    .route('/:id(\\d+)')
    .get(controllersHandler(userController.getOne));

module.exports = router;
