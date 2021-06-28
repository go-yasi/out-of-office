seedLocations = require('./location-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedLocations();
    console.log('\n----- LOCATIONS SEEDED -----\n');

    process.exit(0);
};

seedAll();