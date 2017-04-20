'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentMajors = sequelize.define('StudentMajors', {
    major: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return StudentMajors;
};