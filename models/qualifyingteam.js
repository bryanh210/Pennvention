'use strict';
module.exports = function(sequelize, DataTypes) {
  var QualifyingTeam = sequelize.define('QualifyingTeam', {
    a: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return QualifyingTeam;
};