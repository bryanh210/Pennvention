'use strict';
module.exports = function(sequelize, DataTypes) {
  var Admin = sequelize.define('Admin', {
    securityQuestion: DataTypes.STRING,
    securityAnswer: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Admin.belongsTo(models.User, {
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
