'use strict';
module.exports = function(sequelize, DataTypes) {
  var TeamLogo = sequelize.define('TeamLogo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
