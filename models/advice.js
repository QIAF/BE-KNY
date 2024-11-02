'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Advice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Advice.init({
    name: DataTypes.STRING,
    solia_age: DataTypes.STRING,
    job: DataTypes.STRING,
    workplace: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Advice',
  });
  return Advice;
};