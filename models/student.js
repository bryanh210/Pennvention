'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
        Student.belongsTo(models.Team, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        }),
        Student.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        }),
        Student.hasMany(models.StudentMajor)
      }
    }
  });
  return Student;
};
