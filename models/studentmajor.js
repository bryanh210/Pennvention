'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentMajor = sequelize.define('StudentMajor', {
    major: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        StudentMajor.belongsTo(models.Student)
      }
    }
  });
  return StudentMajor;
};
