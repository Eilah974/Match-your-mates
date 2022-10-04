const express = require('express');
const { signupSchema } = require('../validation/schemas');
const validate = require('../validation/validator');

const { authController } = require('../controllers');

const controllersHandler = require('../helpers/controllersHandler');

const router = express.Router();

router
    .route('/')
    .post(
        validate('body', signupSchema),
        controllersHandler(authController.signup),
    );

module.exports = router;
