'use strict';
module.exports = function(sequelize, DataTypes) {
  var TeamStrength = sequelize.define('TeamStrength', {
    strength: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TeamStrength;
};