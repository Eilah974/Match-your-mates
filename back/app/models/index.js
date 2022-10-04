const Announcement = require('./announcement');
const GameRole = require('./gameRole');
const Rank = require('./rank');
const User = require('./user');

// Pour les user
// un user a un rang
User.belongsTo(Rank, {
    foreignKey: 'rank_id',
    as: 'rank',
});

// un rang a plusieurs users:
Rank.hasMany(User, {
    foreignKey: 'rank_id',
    as: 'users',
});

// un user (player) a un rôle en jeu
User.belongsTo(GameRole, {
    foreignKey: 'game_role_id',
    as: 'game_role',
});

// un rôle en jeu a plusieurs users (player):
GameRole.hasMany(User, {
    foreignKey: 'game_role_id',
    as: 'players',
});

// un user (team) a plusieurs annonce:
User.hasMany(Announcement, {
    foreignKey: 'user_id',
    as: 'announcements',
    onDelete: 'cascade',
    hooks: true,
});

// une annonce a un user (team):
Announcement.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'team',
});

module.exports = {
    Announcement, GameRole, Rank, User,
};
