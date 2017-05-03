'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mark = sequelize.define('Mark', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Mark.belongsTo(models.Question, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        }),
        Mark.belongsTo(models.TeamScore, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });
  return Mark;
};
