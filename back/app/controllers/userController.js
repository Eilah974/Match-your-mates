const { User } = require('../models');
const { ApiError } = require('../helpers/errorHandler');

const userController = {

    getAllPlayers: async (_, res) => {
        // Méthode pour récupérer la liste de tous les utilisateur dont le userType est player

        const players = await User.findAll({
            where: { userType: 'player' },
            include: ['rank', 'game_role'],
            order: [['id', 'ASC']],

        });
        return res.json(players);
    },

    getAllTeams: async (_, res) => {
        // Méthode pour récupérer la liste de tous les utilisateur dont le userType est team

        const teams = await User.findAll({
            where: { userType: 'team' },
            include: ['rank', 'announcements'],
            order: [['id', 'ASC']],
        });
        return res.json(teams);
    },

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
