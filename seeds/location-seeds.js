const { Location } = require('../models');

const locationData = [
    {
        location_name: 'London',
        description: 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.',
        language: 'English',
    },
    {
        location_name: 'Paris',
        description: 'Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis.',
        language: 'French',
    },
]

const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;