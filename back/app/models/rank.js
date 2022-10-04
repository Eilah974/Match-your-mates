/* eslint-disable import/no-unresolved */
const Sequelize = require('sequelize');
const sequelize = require('../config/db');

class Rank extends Sequelize.Model {}

Rank.init({

    type: Sequelize.STRING,

}, {
    sequelize,
    tableName: 'rank',
    underscored: true,
});

module.exports = Rank;
