// services/articleService.js
import prisma from "../data/prisma/prismaClient.js"; // adjust path to your Prisma client



export const updateArticleSlug = async (articleId, slug) => {
  return await prisma.article.update({
    where: { id: articleId },
    data: { slug },
  });
};

export const updateArticleSummary = async (articleId, summary) => {
  return await prisma.article.update({
    where: { id: articleId },
    data: { summary },
  });
};
