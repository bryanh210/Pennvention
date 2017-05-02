'use strict';
module.exports = function(sequelize, DataTypes) {
  var TeamMentorExpertiseRequested = sequelize.define('TeamMentorExpertiseRequested', {
    expertise: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        TeamMentorExpertiseRequested.belongsTo(models.Team)
      }
    }
  });
  return TeamMentorExpertiseRequested;
};
