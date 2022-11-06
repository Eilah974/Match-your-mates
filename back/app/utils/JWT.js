/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const debug = require('debug')('jwt:data');
require('dotenv').config();
const { ApiError } = require('../helpers/errorHandler');

// création du module pour l'authentification via JSON Web Token

const secretToken = process.env.JWT_SECRET_TOKEN;

module.exports = {

    // création du token pour l'utilisateur qui vient de se connecter
    createToken: (userData) => {
        const options = {};
        options.expiresIn = '1800s';
        const user = {
            id: userData.id,
            username: userData.username,
            userType: userData.userType,
            ip: userData.ip,
        };

        return {
            token: jwt.sign(user, secretToken, options),
            expiresIn: options.expiresIn,
        };
    },

    // Middleware pour l'obtention du tokken pour des requête à autorisation
    getAuthTokken: (req, _, next) => {
        const authHeader = req.header('authorization');
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            throw new ApiError('No authorization', { statusCode: 401 });
        }
        jwt.verify(token, secretToken, (err, user) => {
            if (err) {
                throw new ApiError('No authorization', { statusCode: 401 });
            }

            req.user = user;
            debug(user);
            next();
        });
    },

    // Middleware pour vérifier si l'utilisateur est une team
    isTeam: (req, res, next) => {
        const authHeader = req.header('authorization');
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            throw new ApiError('No authorization', { statusCode: 401 });
        }
        jwt.verify(token, secretToken, (err, user) => {
            if (err) {
                throw new ApiError('No authorization', { statusCode: 401 });
            }

            req.user = user;

            if (req.user.userType !== 'team') {
                throw new ApiError('No authorization', { statusCode: 401 });
            }
            debug(user);
            next();
        });
    },
};
