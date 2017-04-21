'use strict';
module.exports = function(sequelize, DataTypes) {
  var TechAward = sequelize.define('TechAward', {
    amount: DataTypes.INTEGER,
    place: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TechAward;
};