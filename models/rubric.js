'use strict';
module.exports = function(sequelize, DataTypes) {
  var Rubric = sequelize.define('Rubric', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    a: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Rubric.hasMany(models.Stage),
        Rubric.hasMany(models.Question)
      }
    }
  });
  return Rubric;
};
