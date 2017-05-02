'use strict';
module.exports = function(sequelize, DataTypes) {
  var Judge = sequelize.define('Judge', {
    approved: DataTypes.BOOLEAN,
    phoneNumber: DataTypes.STRING,
    biography: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Judge.belongsToMany(models.Team, {through: 'TeamJudge'}),
        Judge.belongsTo(models.User),
        Judge.hasMany(models.TeamScore),
        Judge.hasMany(models.JudgeExpertise),
        Judge.hasMany(models.TeamScore)
      }
    }
  });
  return Judge;
};
