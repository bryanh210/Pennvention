'use strict';
module.exports = function(sequelize, DataTypes) {
  var TeamWeakness = sequelize.define('TeamWeakness', {
    weakness: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TeamWeakness;
};