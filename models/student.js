'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    skypeUsername: DataTypes.STRING,
    typeOfStudent: DataTypes.STRING,
    school: DataTypes.STRING,
    expectedYearOfGraduation: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Student.belongsTo(models.Team),
        Student.belongsTo(models.User),
        Student.hasMany(models.StudentMajor)
      }
    }
  });
  return Student;
};
