const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
// const debug = require('debug')('req:data');
const { User } = require('../models');
const { ApiError } = require('../helpers/errorHandler');
const token = require('../utils/JWT');

const authController = {
    /**
     * Méthode pour la soumission du formulaire d'inscription
     * @param { object } req Express req object (pas utilisé)
     * @param { object } res Express res object
     * @returns réponse en JSON de l'API
     */
    signup: async (req, res) => {
        const {
            username, email, password, passwordConfirm, userType,
        } = req.body;

        // Vérifications sur les différents champs du formulaire
        if (!username || !email || !password || !passwordConfirm || !userType) {
            throw new ApiError('Invalid input', { statusCode: 400 });
        }

        // Vérification sur la validité de l'email
        if (!emailValidator.validate(email)) {
            throw new ApiError('Invalid email', { statusCode: 400 });
        }

        // Vérification sur les  deux mots de passes
        if (password !== passwordConfirm) {
            throw new ApiError("Passwords don't match ", { statusCode: 400 });
        }

        // Vérification si l'username ou l'email exists
        const user = await User.findOne({
            where: {
                [Op.or]: [{ username }, { email }],
            },
        });
        if (user) {
            throw new ApiError('username or email already exists', { statusCode: 400 });
        }

        // On supprime passwordConfirm du req.body
        delete req.body.passwordConfirm;

        // On hash le mot de passe avant d'insérer les données en BDD
        const hashedPassword = await bcrypt.hash(password, 10);
        req.body.password = hashedPassword;

        // On enregistre l'utilisateur dans la base
        const newUser = await User.create(req.body);
        // Si l'enregistrement se passe mal
        if (!newUser) {
            throw new ApiError({ statusCode: 500 });
        }
        // Si ok, on demande à l'utilisateur de se connecter.
        return res.status(200).json('Account created, please login');
    },

    /**
     * Méthode pour s'indentifier
     * @param { object } req Express req object (pas utilisé)
     * @param { object } res Express res object
     * @returns réponse en JSON de l'API
     */
    login: async (req, res) => {
        // On va vérifier si l'email et le  mot de passe sont ceux de la BDD
        // Vérification de l'email
        if (!req.body.email || !req.body.password) {
            throw new ApiError('No input', { statusCode: 400 });
        }

        const user = await User.findOne({
            where: {
                email: req.body.email,
            },
        });
        if (!user) {
            throw new ApiError("Email don't exist", { statusCode: 400 });
        }

        // Vérification du mot de passe
        // On compare les deux mots de passes (form et hashé dans la BDD)
        const passIsGood = await bcrypt.compare(req.body.password, user.password);
        if (!passIsGood) {
            throw new ApiError('Invalid password', { statusCode: 400 });
        }
        // On lui donne un token pour sa session
        const newToken = token.createToken(user);
        const userInfo = {
            id: user.id,
            username: user.username,
            userType: user.userType,
        };

        // Et on le renvoie sur l'accueil
        return res.json({ userInfo, accessToken: newToken });
    },

};
module.exports = authController;
