'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentMajor = sequelize.define('StudentMajor', {
    major: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return StudentMajor;
};