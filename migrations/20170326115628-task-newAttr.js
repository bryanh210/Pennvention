'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn('Tasks', "completed", {
      type: Sequelize.BOOLEAN,
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.removeColumn('Tasks', "completed");
  }
};