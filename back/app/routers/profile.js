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
    /**
     * GET /profile
     * @summary route pour avoir le profil d'un utilisateur
     * @tag Profile
     * @param {number} id.path.required - utilisateur identifié par le JSON Web Token
     * @return {Profile} 200 - success response - application/json
     * @return {ApiError} 401 - No authorization - application/json
     * @return {ApiError} 500 - Internal server error - application/json
     */
    .get(jwt.getAuthTokken, controllersHandler(profileController.getProfile))
    /**
     * DELETE /profile
     * @summary route pour supprimer le compte utilisateur
     * @tag Profile
     * @param {number} id.path.required - utilisateur identifié par le JSON Web Token
     * @return {Profile} 200 - success response - application/json
     * @return {ApiError} 401 - No authorization - application/json
     * @return {ApiError} 500 - Internal server error - application/json
     */
    .delete(jwt.getAuthTokken, controllersHandler(profileController.delete));

// route pour modifier le profile utilisateur
router
    .route('/edit')
    /**
     * PATCH /profile/edit
     * @summary route pour la modification des infos de l'utilisateur
     * @tag Profile
     * @param {number} id.path.required - utilisateur identifié par le JSON Web Token
     * @param {InputProfile} req.body.required - infos de l'utilisateur modifiées
     * @return {Profile} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 401 - No authorization - application/json
     * @return {ApiError} 500 - Internal server error - application/json
     */
    .patch(jwt.getAuthTokken, controllersHandler(profileController.update));

router
    .route('/editPassword')
    /**
     * PATCH /profile/editPassword
     * @summary route pour modifier le mot de passe utilisateur
     * @tag Profile
     * @param {number} id.path.required - utilisateur identifié par le JSON Web Token
     * @param {InputProfile} req.body.required - mot de passe utilisateur modifié
     * @return {Profile} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 401 - No authorization - application/json
     * @return {ApiError} 500 - Internal server error - application/json
     */
    .patch(validate('body', editPasswordSchema), jwt.getAuthTokken, controllersHandler(profileController.changePassword));

router
    .route('/createOffer')
    /**
     * POST /profile/createOffer
     * @summary route pour créer une annonce (team)
     * @tag Offer
     * @param {InputOffer} req.body.required - infos d'une annonce
     * @return {Offer} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 401 - No authorization - application/json
     */
    .post(validate('body', createOfferSchema), jwt.isTeam, controllersHandler(announcementController.create));

module.exports = router;
