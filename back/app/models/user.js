/* eslint-disable import/no-unresolved */
const Sequelize = require('sequelize');
const sequelize = require('../config/db');

class User extends Sequelize.Model {}

User.init({

    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    userType: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    avatar: Sequelize.STRING,
    age: Sequelize.INTEGER,
    description: Sequelize.STRING,
    availablityRecruitment: { type: Sequelize.BOOLEAN, defaultValue: 1 },
    search: Sequelize.STRING,

}, {
    sequelize,
    tableName: 'user',
    underscored: true,
});

module.exports = User;
