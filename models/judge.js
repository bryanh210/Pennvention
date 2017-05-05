'use strict';
module.exports = function(sequelize, DataTypes) {
  var Judge = sequelize.define('Judge', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    approved: DataTypes.BOOLEAN,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    skypeUsername: DataTypes.STRING,
    biography: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Judge.belongsToMany(models.Team, {through: 'TeamJudge'}),
        Judge.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        }),
        Judge.hasMany(models.TeamScore),
        Judge.hasMany(models.JudgeExpertise),
        Judge.hasMany(models.TeamScore)
      }
    }
  });
  return Judge;
};
