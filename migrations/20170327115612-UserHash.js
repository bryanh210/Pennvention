'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.renameColumn('Users', 'hash', 'salt')
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.renameColumn('Users', 'salt', 'hash')
  }
};
