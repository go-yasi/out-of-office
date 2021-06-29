const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    budget: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total_travelers: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    restaurant_rec: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    culture: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sightseeing: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    active_activities: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    relaxing_activities: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shopping: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    allow_pets: {
        type: DataTypes.BOOLEAN,
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'location',
        key: 'id',
        },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trip',
  }
);

module.exports = Trip;