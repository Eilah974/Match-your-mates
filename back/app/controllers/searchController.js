/* eslint-disable consistent-return */
const { Op } = require('sequelize');
const { User } = require('../models');
const { ApiError } = require('../helpers/errorHandler');

const searchController = {
    /**
     * Méthode pour recherche de joueur par nom
     * @param {object} req Express req object (pas utilisé)
     * @param {object} res Express res object
     * @returns réponse en JSON de l'API
     */
    searchPlayerByName: async (req, res) => {
        const {
            username,
        } = req.body;

        // Vérification si champs remplis
        if (!username) {
            throw new ApiError('No imput', { statusCode: 400 });
        }

        if (username) {
            const players = await User.findAll({
                where: {
                    [Op.and]: [{ userType: 'player' }, { username: { [Op.like]: `%${username}%` } }],
                },
                include: ['rank', 'game_role'],
            });
            return res.json(players);
        }
    },

    /**
     * Méthode pour recherche par rank, role en jeu et disponibilité
     * @param {object} req Express req object (pas utilisé)
     * @param {object} res Express res object
     * @returns réponse en JSON de l'API
     */
    searchPlayerByCategory: async (req, res) => {
        const { rank, gameRole, availablity } = req.body;
        if (!rank && !gameRole && !availablity) {
            throw new ApiError('No imput', { statusCode: 400 });
        }

        if (rank && !gameRole && !availablity) {
            const players = await User.findAll({
                where: {
                    [Op.and]: [{ userType: 'player' }, { '$rank.type$': rank }],
                },
                include: ['rank', 'game_role'],
            });
            return res.json(players);
        }

        if (!rank && gameRole && !availablity) {
            const players = await User.findAll({
                where: {
                    [Op.and]: [{ userType: 'player' }, { '$game_role.type$': rank }],
                },
                include: ['rank', 'game_role'],
            });
            return res.json(players);
        }

        if (!rank && !gameRole && availablity) {
            const players = await User.findAll({
                where: {
                    [Op.and]: [{ userType: 'player' }],
                },
                include: ['rank', 'game_role'],
            });
            return res.json(players);
        }

        if (rank && gameRole && !availablity) {
            const players = await User.findAll({
                where: {
                    [Op.and]: [{ userType: 'player' }, { '$rank.type$': rank }, { '$game_role.type$': rank }],
                },
                include: ['rank', 'game_role'],
            });
            return res.json(players);
        }

        if (rank && !gameRole && availablity) {
            const players = await User.findAll({
                where: {
                    [Op.and]: [{ userType: 'player' }, { '$rank.type$': rank }],
                },
                include: ['rank', 'game_role'],
            });
            return res.json(players);
        }

        if (!rank && gameRole && availablity) {
            const players = await User.findAll({
                where: {
                    [Op.and]: [{ userType: 'player' }, { '$game_role.type$': rank }],
                },
                include: ['rank', 'game_role'],
            });
            return res.json(players);
        }

        if (rank && gameRole && availablity) {
            const players = await User.findAll({
                where: {
                    [Op.and]: [{ userType: 'player' }, { '$rank.type$': rank }, { '$game_role.type$': rank }],
                },
                include: ['rank', 'game_role'],
            });
            return res.json(players);
        }
    },

    /**
     * Méthode pour recherche d'équipe
     * @param {object} req Express req object (pas utilisé)
     * @param {object} res Express res object
     * @returns réponse en JSON de l'API
     */
    searchTeamByName: async (req, res) => {
        const { username } = req.body;
        // Vérification si champs remplis
        if (!username) {
            throw new ApiError('No imput', { statusCode: 400 });
        }
        // Recherche par nom seulement
        if (username) {
            const teams = await User.findAll({
                where: {
                    [Op.and]: [{ userType: 'team' }, { username: { [Op.like]: `%${username}%` } }],
                },
                include: 'rank',
            });
            return res.json(teams);
        }
    },

    /**
     * Méthode pour recherche par rang global et recrutement
     * @param {object} req Express req object (pas utilisé)
     * @param {object} res Express res object
     * @returns réponse en JSON de l'API
     */
    searchTeamByCategory: async (req, res) => {
        const { globalRank, recruitment } = req.body;
        if (!globalRank && !recruitment) {
            throw new ApiError('No imput', { statusCode: 400 });
        }

        if (globalRank && !recruitment) {
            const teams = await User.findAll({
                where: {
                    [Op.and]: [{ userType: 'team' }, { '%rank.type%': globalRank }],
                },
                include: 'rank',
            });
            return res.json(teams);
        }

        if (!globalRank && recruitment) {
            const teams = await User.findAll({
                where: {
                    [Op.and]: { userType: 'team' },
                },
                include: 'rank',
            });
            return res.json(teams);
        }

        if (globalRank && recruitment) {
            const teams = await User.findAll({
                where: {
                    [Op.and]: [{ userType: 'team' }, { '%rank.type%': globalRank }],
                },
                include: 'rank',
            });
            return res.json(teams);
        }
    },

};
module.exports = searchController;
