'use strict';
module.exports = function(sequelize, DataTypes) {
  var TeamWeakness = sequelize.define('TeamWeakness', {
    weakness: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        TeamWeakness.belongsTo(models.Team, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });
  return TeamWeakness;
};
