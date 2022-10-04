const express = require('express');

const { authController } = require('../controllers');

const controllersHandler = require('../helpers/controllersHandler');

const router = express.Router();

router
    .route('/')
    .post(controllersHandler(authController.login));

module.exports = router;
