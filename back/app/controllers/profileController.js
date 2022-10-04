const bcrypt = require('bcrypt');
const { User } = require('../models');
const { ApiError } = require('../helpers/errorHandler');

const profileController = {
    getProfile: async (req, res) => {
        // Méthode pour récuper les infos pour le profil
        const profile = await User.findOne({
            where: { id: req.user.id },
            include: ['rank', 'game_role', 'announcements'],
        });
        if (!profile) {
            throw new ApiError({ statusCode: 500 });
        }

        return res.json(profile);
    },

    update: async (req, res) => {
        // Méthode pour mettre à jour son profile
        const profile = await User.findOne({
            where: { id: req.user.id },
            include: ['rank', 'game_role', 'announcements'],
        });
        if (!profile) {
            throw new ApiError({ statusCode: 500 });
        }
        const {
            avatar, age, description, availablityRecruitment, search, rank, gameRole,
        } = req.body;
        if (req.user.userType === 'player') {
            if (age) {
                profile.age = age;
            }
            if (search) {
                profile.search = search;
            }
            if (gameRole) {
                profile.game_role_id = gameRole;
            }
        }

        if (avatar) {
            profile.avatar = avatar;
        }

        if (description) {
            profile.description = description;
        }

        if (availablityRecruitment) {
            profile.availablityRecruitment = availablityRecruitment;
        }

        if (rank) {
            profile.rank_id = rank;
        }

        const profileSaved = await profile.save();
        return res.json(profileSaved);
    },

    changePassword: async (req, res) => {
        // Méthode pour le changement de mot de passe
        const profile = await User.findOne({
            where: { id: req.user.id },
        });
        if (!profile) {
            throw new ApiError({ statusCode: 500 });
        }

        // Vérification si les champs sont bien remplis
        const { oldPassword, newPassword, newPasswordConfirm } = req.body;

        if (!oldPassword) {
            throw new ApiError('No old password', { statusCode: 400 });
        }

        if (!newPassword) {
            throw new ApiError('No new password', { statusCode: 400 });
        }

        if (!newPasswordConfirm) {
            throw new ApiError('No new password confirm', { statusCode: 400 });
        }

        // On vérifie si l'ancien mot de passe correspond à celui en BDD
        const oldPassIsGood = await bcrypt.compare(oldPassword, profile.password);
        if (!oldPassIsGood) {
            throw new ApiError('Invalid old password', { statusCode: 400 });
        }

        // On vérifie si le nouveau mot de passe correspond à sa confirmation
        if (newPassword !== newPasswordConfirm) {
            throw new ApiError("News passwords don't match ", { statusCode: 400 });
        }

        // On supprime passwordConfirm du req.body
        delete req.body.newPasswordConfirm;

        // On hash le mot de passe avant d'insérer les données en BDD
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        req.body.newPassword = hashedPassword;

        profile.password = req.body.newPassword;

        // On sauvegarde le changement
        await profile.save();
        return res.status(200).json('Password Changed');
    },

    delete: async (req, res) => {
        const profile = await User.findOne({
            where: { id: req.user.id },
        });
        if (!profile) {
            throw new ApiError({ statusCode: 500 });
        }

        await profile.destroy();
        return res.status(200).json('Account deleted');
    },
};

module.exports = profileController;
