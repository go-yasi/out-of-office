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
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    budget: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_travelers: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    restaurant_rec1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    restaurant_rec2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    restaurant_rec3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hotel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    culture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    active_activities: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    relaxing_activities: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    shopping: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    allow_pets: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
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