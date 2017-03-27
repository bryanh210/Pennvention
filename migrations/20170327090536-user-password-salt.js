'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return [
      queryInterface.addColumn(
        'Users',
        'hash',
        {
          type: Sequelize.STRING,
          allowNull: false
        }
      ),
      queryInterface.addColumn(
        'Users',
        'password',
        {
          type: Sequelize.STRING,
          allowNull: false
        }
      )
    ];
  },

  down: function(queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('Users', 'hash'),
      queryInterface.removeColumn('Users', 'password')
    ];
  }
};