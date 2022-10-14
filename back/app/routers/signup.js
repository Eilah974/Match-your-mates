const express = require('express');
const { signupSchema } = require('../validation/schemas');
const validate = require('../validation/validator');

const { authController } = require('../controllers');

const controllersHandler = require('../helpers/controllersHandler');

const router = express.Router();

router
    .route('/')
    /**
     * POST /signup
     * @summary route pour enregistrer un utilisateur
     * @tag Signup
     * @param {InputSignup} req.body.required - infos d'enregistrement
     * @return {Signup} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     */
    .post(
        validate('body', signupSchema),
        controllersHandler(authController.signup),
    );

module.exports = router;
