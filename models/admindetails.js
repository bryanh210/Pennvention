'use strict';
module.exports = function(sequelize, DataTypes) {
  var AdminDetails = sequelize.define('AdminDetails', {
    securityQuestion: DataTypes.STRING,
    securityAnswer: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return AdminDetails;
};