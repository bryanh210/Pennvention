'use strict';
module.exports = function(sequelize, DataTypes) {
  var TeamScore = sequelize.define('TeamScore', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    comment: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        TeamScore.belongsTo(models.Judge, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        }),
        TeamScore.belongsTo(models.Team, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        }),
        TeamScore.belongsTo(models.Stage, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        }),
        TeamScore.hasMany(models.Mark)
      }
    }
  });
  return TeamScore;
};
