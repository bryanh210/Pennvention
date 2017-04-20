'use strict';
module.exports = function(sequelize, DataTypes) {
  var Rubric = sequelize.define('Rubric', {
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Rubric;
};