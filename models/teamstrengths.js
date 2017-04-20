'use strict';
module.exports = function(sequelize, DataTypes) {
  var TeamStrengths = sequelize.define('TeamStrengths', {
    strength: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TeamStrengths;
};