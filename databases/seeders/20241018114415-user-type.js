"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("user_types", [
      {
        type: "Seller",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Customer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_types", null, {});
  },
};
