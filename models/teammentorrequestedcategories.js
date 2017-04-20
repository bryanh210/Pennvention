'use strict';
module.exports = function(sequelize, DataTypes) {
  var TeamMentorRequestedCategories = sequelize.define('TeamMentorRequestedCategories', {
    category: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TeamMentorRequestedCategories;
};