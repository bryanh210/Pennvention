'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mentor = sequelize.define('Mentor', {
    approved: DataTypes.BOOLEAN,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    skypeUsername: DataTypes.STRING,
    biography: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Mentor.belongsToMany(models.Team, {through: 'TeamMentor'}),
        Mentor.belongsTo(models.User),
        Mentor.hasMany(models.MentorExpertise)
      }
    }
  });
  return Mentor;
};
