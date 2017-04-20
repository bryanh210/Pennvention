'use strict';
module.exports = function(sequelize, DataTypes) {
  var QualifyingTeams = sequelize.define('QualifyingTeams', {
    
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return QualifyingTeams;
};