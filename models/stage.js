'use strict';
module.exports = function(sequelize, DataTypes) {
  var Stage = sequelize.define('Stage', {
    name: DataTypes.STRING,
    dateToRevealInformation: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        Stage.belongsTo(models.Iteration),
        Stage.hasMany(models.TeamScore),
        Stage.belongsTo(models.Rubric)
      }
    }
  });
  return Stage;
};
