'use strict';
module.exports = function(sequelize, DataTypes) {
  var MentorExpertise = sequelize.define('MentorExpertise', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
