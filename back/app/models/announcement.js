const Sequelize = require('sequelize');
const sequelize = require('../config/db');

class Announcement extends Sequelize.Model {}

Announcement.init({

    title: Sequelize.STRING,
    description: Sequelize.STRING,
    searchProfile: Sequelize.STRING,

}, {
    sequelize,
    tableName: 'announcement',
    underscored: true,
});

module.exports = Announcement;
