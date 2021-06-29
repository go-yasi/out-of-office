// important to create in order of use
const Location = require('./Location');
const Photos = require('./Photos');
const User = require('./User');
const Trip = require('./Trip');

// TRIP - LOCATION association
Trip.belongsTo(Location, {
    foreignKey: 'trip_id',
});

Location.hasMany(Trip, {
    foreignKey: 'trip_id',
});

// TRIP - PHOTOS association
Trip.hasMany(Photos, {
    foreignKey: 'trip_id',
    onDelete: 'CASCADE',
});

Photos.belongsTo(Trip, {
    foreignKey: 'trip_id',
});

// USER - LOCATION association
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