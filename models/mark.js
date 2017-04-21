'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mark = sequelize.define('Mark', {
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Mark;
};