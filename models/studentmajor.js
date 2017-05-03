'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentMajor = sequelize.define('StudentMajor', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    major: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        StudentMajor.belongsTo(models.Student, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });
  return StudentMajor;
};
