'use strict';
module.exports = function(sequelize, DataTypes) {
  var TeamLogo = sequelize.define('TeamLogo', {
    logoPicture: DataTypes.BLOB
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TeamLogo;
};