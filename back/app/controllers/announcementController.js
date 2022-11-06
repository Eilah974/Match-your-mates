const { Announcement } = require('../models');
const { ApiError } = require('../helpers/errorHandler');

const announcementController = {

    /**
     * méthode pour récupérer toutes les annonces d'une team
     * @param { object } req Express req object (pas utilisé)
     * @param { object } res Express res object
     * @returns réponse en JSON de l'API
     */
    getAll: async (req, res) => {
        const announcements = await Announcement.findAll({
            where: { user_id: +req.params.id },
            include: 'team',
        });
        return res.json(announcements);
    },

    /**
     * Méthode pour récupérer une annonce
     * @param { object } req Express req object (pas utilisé)
     * @param { object } res Express res object
     * @returns réponse en JSON de l'API
     */
    getOne: async (req, res) => {
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

    /**
     * Méthode pour créer une annonce
     * @param { object } req Express req object (pas utilisé)
     * @param { object } res Express res object
     * @returns réponse en JSON de l'API
     */
    create: async (req, res) => {
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

    /**
     * Méhtode pour mise à jour d'une annonce
     * @param { object } req Express req object (pas utilisé)
     * @param { object } res Express res object
     * @returns réponse en JSON de l'API
     */
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

    /**
     * Méthode pour suppression d'une annonce
     * @param { object } req Express req object (pas utilisé)
     * @param { object } res Express res object
     * @returns réponse en JSON de l'API
     */
    delete: async (req, res) => {
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
