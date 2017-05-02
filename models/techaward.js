'use strict';
module.exports = function(sequelize, DataTypes) {
  var TechAward = sequelize.define('TechAward', {
    amount: DataTypes.INTEGER,
    place: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        TechAward.belongsTo(models.Iteration, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        }),
        TechAward.belongsTo(models.Team, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });
  return TechAward;
};
