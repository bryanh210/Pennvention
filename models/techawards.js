'use strict';
module.exports = function(sequelize, DataTypes) {
  var TechAwards = sequelize.define('TechAwards', {
    amount: DataTypes.INTEGER,
    place: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TechAwards;
};