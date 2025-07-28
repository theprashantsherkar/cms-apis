"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Article_Categories", {
      articleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Articles", key: "id" },
        onDelete: "CASCADE",
        primaryKey: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Categories", key: "id" },
        onDelete: "CASCADE",
        primaryKey: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Article_Categories");
  },
};
