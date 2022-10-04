const Sequelize = require('sequelize');
const sequelize = require('../config/db');

class GameRole extends Sequelize.Model {}

GameRole.init({

    type: Sequelize.STRING,

}, {
    sequelize,
    tableName: 'game_role',
    underscored: true,
});

module.exports = GameRole;
