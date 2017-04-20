'use strict';
module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
    question: DataTypes.STRING,
    outOf: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Question;
};