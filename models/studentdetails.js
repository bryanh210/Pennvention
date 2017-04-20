'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentDetails = sequelize.define('StudentDetails', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    skype: DataTypes.STRING,
    typeOfStudent: DataTypes.STRING,
    school: DataTypes.STRING,
    expectedYearOfGraduation: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return StudentDetails;
};