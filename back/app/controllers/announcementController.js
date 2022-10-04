const { Announcement } = require('../models');
const { ApiError } = require('../helpers/errorHandler');

const announcementController = {
    getAll: async (req, res) => {
        // méthode pour récupérer toutes les annonces d'une team
        const announcements = await Announcement.findAll({
            where: { user_id: +req.params.id },
        });
        return res.json(announcements);
    },

    getOne: async (req, res) => {
        // Méthode pour récupérer une annonce
        const announcementId = +req.params.announcementId;
        const announcement = await Announcement.findByPk(announcementId, {
            include: 'team',
        });

        // Si pas d'annonce
        if (!announcement) {
            throw new ApiError('offer not found', { statusCode: 404 });
        }
        return res.json(announcement);
    },

    create: async (req, res) => {
        // Méthode pour créer une annonce

        // On vérifie si les champs sont remplis
        const { title, description, searchProfile } = req.body;
        if (!title) {
            throw new ApiError('Mandatory title field', { statusCode: 400 });
        }
        if (!description) {
            throw new ApiError('Mandatory description field', { statusCode: 400 });
        }
        if (!searchProfile) {
            throw new ApiError('Mandatory search profile field', { statusCode: 400 });
        }

        // Si tout est rempli alors
        const data = {
            title,
            description,
            searchProfile,
            user_id: req.user.id,
        };

        const newAnnouncement = await Announcement.create(data);
        return res.json(newAnnouncement);
    },

    update: async (req, res) => {
        const announcementId = +req.params.announcementId;
        const announcement = await Announcement.findByPk(announcementId, {
            where: { user_id: req.user.id },
        });
        // On vérifie si l'annonce existe bien pour cet utilisateur
        if (!announcement) {
            throw new ApiError('Offer not found', { statusCode: 404 });
        }

        const { title, description, searchProfile } = req.body;
        if (title) {
            announcement.title = title;
        }

        if (description) {
            announcement.description = description;
        }

        if (searchProfile) {
            announcement.searchProfile = searchProfile;
        }
        // On sauvegarde les modifs
        const announcementSave = await announcement.save();
        return res.json(announcementSave);
    },

    delete: async (req, res) => {
        // Méthode pour suppression d'une annonce
        const announcementId = +req.params.announcementId;
        const announcement = await Announcement.findByPk(announcementId, {
            where: { user_id: req.user.id },
        });
        // On vérifie si l'annonce existe bien pour cet utilisateur
        if (!announcement) {
            throw new ApiError('Offer not found', { statusCode: 404 });
        }

        // sinon, on supprime
        await announcement.destroy();
        return res.status(200).json('Offer deleted');
    },

};

module.exports = announcementController;
