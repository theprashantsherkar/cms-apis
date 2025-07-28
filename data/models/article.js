import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Article extends Model {
    static associate(models) {
      // define association here
    }
  }

  Article.init(
    {
      title: DataTypes.STRING,
      slug: DataTypes.STRING,
      content: DataTypes.TEXT,
      summary: DataTypes.TEXT,
      status: DataTypes.STRING,
      publishedAt: DataTypes.DATE,
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Article",
    }
  );

  return Article;
};
