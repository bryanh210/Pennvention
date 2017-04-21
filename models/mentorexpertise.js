'use strict';
module.exports = function(sequelize, DataTypes) {
  var MentorExpertise = sequelize.define('MentorExpertise', {
    subject: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MentorExpertise;
};