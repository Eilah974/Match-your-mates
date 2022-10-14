const express = require('express');

const { userController } = require('../controllers');
const controllersHandler = require('../helpers/controllersHandler');

const router = express.Router();

router
    .route('/')
    /**
     * GET /players
     * @summary Route pour voir la liste de tous les joueurs
     * @tag Player
     * @return {[Player]} 200 - success response - application/json
     */
    .get(controllersHandler(userController.getAllPlayers));

router
    .route('/:id(\\d+)')
    /**
     * GET /players/{id}
     * @summary route pour voir le détail d'un joueur
     * @tag Player
     * @param {number} id.path.required - joueur identifié
     * @return {Player} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Player not found - application/json
     */
    .get(controllersHandler(userController.getOne));

module.exports = router;
