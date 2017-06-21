'use strict';
module.exports = function(sequelize, DataTypes) {
  var Admin = sequelize.define('Admin', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      //autoincrement value
      autoIncrement: true
    },
    securityQuestion: DataTypes.STRING,
    securityAnswer: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // association  where the foreign key for the one-to-one relation exists on the source model
        //Player.belongsTo(Team)
        Admin.belongsTo(models.User, {
          //Which means that when a Parent row is deleted (killed), no orphan row should stay alive in the Child table
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });
  return Admin;
};
