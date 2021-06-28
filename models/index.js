const Location = require('./Location');
const Photos = require('./Photos');
const Trip = require('./Trip');
const User = require('./User');

User.belongsToMany(Location, {
    through: {
        model: Trip,
        unique: false
    },
    as: 'user_trips'
});

Location.belongsToMany(User, {
    through: {
        model: Trip,
        unique: false
    },
    as: 'location_users'
});

module.exports = { Location, Photos, Trip, User };