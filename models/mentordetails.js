'use strict';
module.exports = function(sequelize, DataTypes) {
  var MentorDetails = sequelize.define('MentorDetails', {
    approved: DataTypes.BOOLEAN,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    skype: DataTypes.STRING,
    bio: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MentorDetails;
};