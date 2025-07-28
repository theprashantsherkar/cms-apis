import db from "../data/models/index.js";
import { addSlugJob } from "../queues/slugQueue.js";


const { Article } = db;

export const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();
    if (!articles || articles.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No articles found",
      });   
    }
    res.status(200).json({
      success: true,
      message: "All articles fetched successfully",
      articles,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const createArticle = async (req, res) => {
  const id = req.user.id;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "you are not logged in",
    });
  }
  const { title, content } = req.body;

  const article = await Article.create({ title, content, authorId : id });

  await addSlugJob(article.id, title, content);

  res.status(201).json({
    message: "Article created. Slug generation in progress.",
    article,
  });
};

