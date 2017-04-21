'use strict';
module.exports = function(sequelize, DataTypes) {
  var TeamScore = sequelize.define('TeamScore', {
    comment: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TeamScore;
};