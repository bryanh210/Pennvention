'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.renameColumn('Users', 'password', 'salt')
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.renameColumn('Users', 'salt', 'password')
  }
};
