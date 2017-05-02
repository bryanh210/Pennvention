'use strict';
module.exports = function(sequelize, DataTypes) {
  var Iteration = sequelize.define('Iteration', {
    competitionPeriod: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Iteration.hasMany(models.Stage),
        Iteration.hasMany(models.SponsorAward),
        Iteration.hasMany(models.TechAward),
        Iteration.hasMany(models.Rubric)
      }
    }
  });
  return Iteration;
};
