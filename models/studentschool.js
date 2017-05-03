'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentSchool = sequelize.define('StudentSchool', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    school: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        StudentSchool.belongsTo(models.Student, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });
  return StudentSchool;
};
