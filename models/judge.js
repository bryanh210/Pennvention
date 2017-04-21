'use strict';
module.exports = function(sequelize, DataTypes) {
  var Judge = sequelize.define('Judge', {
    approved: DataTypes.BOOLEAN,
    phoneNumber: DataTypes.STRING,
    biography: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Judge;
};