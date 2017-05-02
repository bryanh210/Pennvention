'use strict';
module.exports = function(sequelize, DataTypes) {
  var Stage = sequelize.define('Stage', {
    name: DataTypes.STRING,
    dateToRevealInformation: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        Stage.belongsTo(models.Iteration, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        }),
        Stage.hasMany(models.TeamScore),
        Stage.belongsTo(models.Rubric, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });
  return Stage;
};
