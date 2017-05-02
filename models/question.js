'use strict';
module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
    question: DataTypes.TEXT,
    maxScore: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Question.belongsTo(models.Rubric, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        }),
        Question.hasMany(models.Mark)
      }
    }
  });
  return Question;
};
