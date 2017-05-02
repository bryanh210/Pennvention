'use strict';
module.exports = function(sequelize, DataTypes) {
  var Rubric = sequelize.define('Rubric', {
    a: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Rubric.hasMany(models.Stage),
        Rubric.hasMany(models.Question)
      }
    }
  });
  return Rubric;
};
