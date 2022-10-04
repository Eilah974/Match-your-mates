const express = require('express');

const playerRouter = require('./player');
const teamRouter = require('./team');
const signupRouter = require('./signup');
const loginRouter = require('./login');
const profileRouter = require('./profile');

const { ApiError } = require('../helpers/errorHandler');

const router = express.Router();

// On préfixe les routers
router.use('/players', playerRouter);
router.use('/teams', teamRouter);
router.use('/signup', signupRouter);
router.use('/login', loginRouter);
router.use('/profile', profileRouter);

router.use(() => {
    throw new ApiError('Route not found', { statusCode: 404 });
});

module.exports = router;
