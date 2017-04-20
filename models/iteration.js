'use strict';
module.exports = function(sequelize, DataTypes) {
  var Iteration = sequelize.define('Iteration', {
    competitionPeriod: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Iteration;
};