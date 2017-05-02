'use strict';
module.exports = function(sequelize, DataTypes) {
  var TeamScore = sequelize.define('TeamScore', {
    comment: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        TeamScore.belongsTo(models.Judge),
        TeamScore.belongsTo(models.Team),
        TeamScore.belongsTo(models.Stage),
        TeamScore.hasMany(models.Mark)
      }
    }
  });
  return TeamScore;
};
