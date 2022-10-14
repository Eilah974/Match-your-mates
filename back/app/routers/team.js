const express = require('express');

const { userController, announcementController } = require('../controllers');
const controllersHandler = require('../helpers/controllersHandler');
const jwt = require('../utils/JWT');
const validate = require('../validation/validator');
const { editOfferSchema } = require('../validation/schemas');

const router = express.Router();

router
    .route('/')
    /**
     * GET /teams
     * @summary Route pour voir la liste de toutes les teams
     * @tag Team
     * @return {[Team]} 200 - success response - application/json
     */
    .get(controllersHandler(userController.getAllTeams));

router
    .route('/:id(\\d+)')
    /**
     * GET /team/{id}
     * @summary route pour voir le détail d'une team
     * @tag Team
     * @param {number} id.path.required - team identifiée
     * @return {Team} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Team not found' - application/json
     */
    .get(controllersHandler(userController.getOne));

router
    .route('/:id(\\d+)/offers')
    /**
     * GET /teams/{id}/offers
     * @summary route pour voir les annonces d'une team
     * @tag Offer
     * @param {number} id.path.required - team identifiée
     * @return {[Offer]} 200 - success response - application/json
     * @return {ApiError} 404 - Offers not found - application/json
     */
    .get(controllersHandler(announcementController.getAll));

// route pour voir le détail d'une annonce
router
    .route('/:id(\\d+)/offers/:announcementId(\\d+)')
    /**
     * GET /teams/{id}/offers/{id}
     * @summary route pour voir le détail d'une annonce d'une team
     * @tag Offer
     * @param {number} id.path.required - team et annonce indentifiées
     * @return {Offer} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Offer not found - application/json
     */
    .get(controllersHandler(announcementController.getOne))
    /**
     * PATCH /teams/{id}/offers/{id}
     * @summary route route pour modifier l'annonce
     * @tag Offer
     * @param {number} id.path.required - team et annonce indentifiées
     * @param {InputOffer} req.body.required - infos de l'annonce
     * @return {Offer} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 401 - No authorization - application/json
     * @return {ApiError} 404 - Offer not found - application/json
     */
    .patch(validate('body', editOfferSchema), jwt.isTeam, controllersHandler(announcementController.update))
    /**
     * DELETE /teams/{id}/offers/{id}
     * @summary route pour supprimer une annonce
     * @tag Offer
     * @param {number} id.path.required - team et annonce indentifiées
     * @return {Offer} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 401 - No authorization - application/json
     * @return {ApiError} 404 - Offer not found - application/json
     */
    .delete(jwt.isTeam, controllersHandler(announcementController.delete));

module.exports = router;
