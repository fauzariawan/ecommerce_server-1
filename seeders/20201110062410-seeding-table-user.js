'use strict';
const { hashPassword } = require('../helpers/bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = hashPassword('12345')
    const data = {
      email: "admin@gmail.com",
      role: "admin",
      password: password,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    await queryInterface.bulkInsert('Users', [data], {})

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
};