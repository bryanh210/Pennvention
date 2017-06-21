'use strict';
module.exports = function(sequelize, DataTypes) {
  var TeamStrength = sequelize.define('TeamStrength', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    strength: DataTypes.STRING
  }, {
    classMethods: {
      //classmethod, on the other hand, is a method that gets passed the class it was called on, or the class of the instance it was called on, as first argument.
      associate: function(models) {
        TeamStrength.belongsTo(models.Team)
      }
    }
  });
  return TeamStrength;
};
