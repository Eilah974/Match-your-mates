const announcementController = require('./announcementController');
const authController = require('./authController');
const profileController = require('./profileController');
const searchController = require('./searchController');
const userController = require('./userController');

const mainController = {
    home: (_, res) => {
        res.json({ message: 'Hello World' });
    },
};

module.exports = {
    announcementController,
    authController,
    profileController,
    searchController,
    userController,
    mainController,
};
