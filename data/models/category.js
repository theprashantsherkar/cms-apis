import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {

    }
  }

  Category.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );

  return Category;
};
