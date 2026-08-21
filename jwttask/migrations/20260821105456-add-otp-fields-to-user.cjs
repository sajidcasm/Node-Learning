'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("user", "is_verified", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
    await queryInterface.addColumn("user", "otp_code", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("user", "otp_expires_at", {
      type: Sequelize.DATE,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("user", "is_verified");
    await queryInterface.removeColumn("user", "otp_code");
    await queryInterface.removeColumn("user", "otp_expires_at");
  },
};
