'use strict';
module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define('Team', {
    name: DataTypes.STRING,
    projectName: DataTypes.STRING,
    projectIdea: DataTypes.TEXT,
    deckLink: DataTypes.STRING,
    videoLink: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Team;
};