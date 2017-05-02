'use strict';
module.exports = function(sequelize, DataTypes) {
  var MentorExpertise = sequelize.define('MentorExpertise', {
    subject: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        MentorExpertise.belongsTo(models.Mentor, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });
  return MentorExpertise;
};
