'use strict';
module.exports = function(sequelize, DataTypes) {
  var JudgeExpertise = sequelize.define('JudgeExpertise', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    subject: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        JudgeExpertise.belongsTo(models.Judge, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });
  return JudgeExpertise;
};
