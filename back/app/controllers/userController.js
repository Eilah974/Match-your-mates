const { User } = require('../models');
const { ApiError } = require('../helpers/errorHandler');

const userController = {
    /**
     * Méthode pour récupérer la liste de tous les utilisateur dont le userType est player
     * @param {object} _ Express req object (pas utilisé)
     * @param {object} res Express res object
     * @returns réponse en JSON de l'API
     */
    getAllPlayers: async (_, res) => {
        const players = await User.findAll({
            where: { userType: 'player' },
            include: ['rank', 'game_role'],
            order: [['id', 'ASC']],

        });
        return res.json(players);
    },

    /**
     * Méthode pour récupérer la liste de tous les utilisateur dont le userType est team
     * @param {object} _ Express req object (pas utilisé)
     * @param {object} res Express res object
     * @returns réponse en JSON de l'API
     */
    getAllTeams: async (_, res) => {
        const teams = await User.findAll({
            where: { userType: 'team' },
            include: ['rank', 'announcements'],
            order: [['id', 'ASC']],
        });
        return res.json(teams);
    },

    /**
     * Méthode pour récupérer la fiche d'un user (player ou team)
     * @param {object} req Express req object (pas utilisé)
     * @param {object} res Express res object
     * @returns réponse en JSON de l'API
     */
    getOne: async (req, res) => {
        // Méthode pour récupérer la fiche d'un user (player ou team)
        const id = +req.params.id;
        const user = await User.findByPk(id, {
            include: ['rank', 'game_role', 'announcements'],
        });
        if (!user) {
            throw new ApiError('User not found', { statusCode: 404 });
        }

        return res.json(user);
    },

};
module.exports = userController;
