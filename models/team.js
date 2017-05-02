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
        Team.hasMany(models.Student),
        Team.belongsToMany(models.Judge, {through: 'TeamJudge'}),
        Team.belongsToMany(models.Mentor, {through: 'TeamMentor'}),
        Team.hasOne(models.TeamLogo),
        Team.belongsTo(models.Iteration, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        }),
        Team.hasMany(models.TeamStrength),
        Team.hasMany(models.TeamWeakness),
        Team.hasMany(models.TeamMentorExpertiseRequested),
        Team.hasMany(models.QualifyingTeam),
        Team.hasMany(models.SponsorAward),
        Team.hasOne(models.TechAward),
        Team.hasMany(models.QualifyingTeam)
      }
    }
  });
  return Team;
};
