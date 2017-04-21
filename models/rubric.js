'use strict';
module.exports = function(sequelize, DataTypes) {
  var Rubric = sequelize.define('Rubric', {
    a: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Rubric;
};