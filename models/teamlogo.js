'use strict';
module.exports = function(sequelize, DataTypes) {
  var TeamLogo = sequelize.define('TeamLogo', {
    logoPicture: DataTypes.BLOB
  }, {
    classMethods: {
      associate: function(models) {
        TeamLogo.belongsTo(models.Team, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });
  return TeamLogo;
};
