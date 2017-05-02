'use strict';
module.exports = function(sequelize, DataTypes) {
  var QualifyingTeam = sequelize.define('QualifyingTeam', {
    a: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        QualifyingTeam.belongsTo(models.Team),
        QualifyingTeam.belongsTo(models.Stage)
      }
    }
  });
  return QualifyingTeam;
};
