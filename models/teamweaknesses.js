'use strict';
module.exports = function(sequelize, DataTypes) {
  var TeamWeaknesses = sequelize.define('TeamWeaknesses', {
    weakness: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TeamWeaknesses;
};