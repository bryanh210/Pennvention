'use strict';
module.exports = function(sequelize, DataTypes) {
  var SponsorAwards = sequelize.define('SponsorAwards', {
    amount: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return SponsorAwards;
};