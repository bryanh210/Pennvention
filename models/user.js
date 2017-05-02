'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: 'email',
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    hash: DataTypes.STRING,
    salt: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM('student', 'judge', 'mentor', 'admin'),
      allowNull: false,
      // type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasOne(models.Student),
        User.hasOne(models.Mentor),
        User.hasOne(models.Judge),
        User.hasOne(models.Admin)
      }
    }
  });
  return User;
};
