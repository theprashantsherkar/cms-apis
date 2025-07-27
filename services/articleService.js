// services/articleService.js
import Article from '../models/article.js' // Adjust the path if needed

export async function updateArticleSlug(articleId, slug) {
  try {
    const article = await Article.findByPk(articleId);
    if (!article) throw new Error("Article not found");

    article.slug = slug;
    await article.save();

    return article;
  } catch (err) {
    console.error("Error updating article slug:", err);
    throw err;
  }
}

