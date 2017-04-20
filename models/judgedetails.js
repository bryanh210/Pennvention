'use strict';
module.exports = function(sequelize, DataTypes) {
  var JudgeDetails = sequelize.define('JudgeDetails', {
    approved: DataTypes.BOOLEAN,
    phoneNumber: DataTypes.STRING,
    bio: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return JudgeDetails;
};