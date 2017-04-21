'use strict';
module.exports = function(sequelize, DataTypes) {
  var SponsorAward = sequelize.define('SponsorAward', {
    amount: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return SponsorAward;
};