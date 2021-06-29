// seedLocations = require('./location-seeds');

// const sequelize = require('../config/connection');

// const seedAll = async () => {
//     await sequelize.sync({ force: true });
//     console.log('\n----- DATABASE SYNCED -----\n');

//     await seedLocations();
//     console.log('\n----- LOCATIONS SEEDED -----\n');

//     process.exit(0);
// };

// seedAll();

const sequelize = require('../config/connection');
const { Location } = require('../models');

const locationSeedData = require('./location-seeds.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Location.bulkCreate(locationSeedData, {
        individualHooks: true,
        returning: true,
    });
    console.log('\n----- LOCATIONS SEEDED -----\n');

    process.exit(0);
};

seedDatabase();
