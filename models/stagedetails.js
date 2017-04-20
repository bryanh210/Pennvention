'use strict';
module.exports = function(sequelize, DataTypes) {
  var StageDetails = sequelize.define('StageDetails', {
    name: DataTypes.STRING,
    dateToRevealInfo: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return StageDetails;
};