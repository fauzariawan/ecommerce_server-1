'use strict';

const data = require('../product.json')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    data.forEach(data => {
      data.createdAt = new Date()
      data.updatedAt = new Date()
    })

    await queryInterface.bulkInsert("Products", data, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Products", null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
