'use strict';
module.exports = function(sequelize, DataTypes) {
  var SponsorAward = sequelize.define('SponsorAward', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    amount: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        SponsorAward.belongsTo(models.Iteration, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        }),
        SponsorAward.belongsTo(models.Team, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });
  return SponsorAward;
};
