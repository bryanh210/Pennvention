'use strict';
module.exports = function(sequelize, DataTypes) {
  var TechAward = sequelize.define('TechAward', {
    amount: DataTypes.INTEGER,
    place: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        TechAward.belongsTo(models.Iteration),
        TechAward.belongsTo(models.Team)
      }
    }
  });
  return TechAward;
};
