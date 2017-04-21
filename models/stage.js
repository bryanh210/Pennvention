'use strict';
module.exports = function(sequelize, DataTypes) {
  var Stage = sequelize.define('Stage', {
    name: DataTypes.STRING,
    dateToRevealInformation: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Stage;
};