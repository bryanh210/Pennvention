'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mark = sequelize.define('Mark', {
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Mark.belongsTo(models.Question),
        Mark.belongsTo(models.TeamScore)
      }
    }
  });
  return Mark;
};
