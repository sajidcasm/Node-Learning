"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("user", "city", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn("user", "state", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("user", "city");

    await queryInterface.removeColumn("user", "state");
  },
};
