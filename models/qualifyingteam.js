'use strict';
module.exports = function(sequelize, DataTypes) {
  var QualifyingTeam = sequelize.define('QualifyingTeam', {
    a: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        QualifyingTeam.belongsTo(models.Team, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        }),
        QualifyingTeam.belongsTo(models.Stage, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });
  return QualifyingTeam;
};
