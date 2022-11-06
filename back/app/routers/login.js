const express = require('express');

const { authController } = require('../controllers');

const controllersHandler = require('../helpers/controllersHandler');

const router = express.Router();

router
    .route('/')
    /**
     * POST /login
     * @summary route pour la connexion de l'utilisateur
     * @tag Login
     * @param {InputLogin} req.body.required - infos de connexion
     * @return {Login} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     */
    .post(controllersHandler(authController.login));

module.exports = router;
