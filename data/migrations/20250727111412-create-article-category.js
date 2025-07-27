'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Article_Categories", {
      articleId: {
        type: Sequelize.INTEGER,
        references: { model: "Articles", key: "id" },
        onDelete: "CASCADE",
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: { model: "Categories", key: "id" },
        onDelete: "CASCADE",
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
