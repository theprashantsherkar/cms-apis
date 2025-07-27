import { Worker } from "bullmq";
import { generateSlug } from "../services/llm.js"; 
import { updateArticleSlug } from "../services/articleService.js"; 

new Worker("slug-queue", async (job) => {
  const { articleId, title, content } = job.data;
  const slug = await generateSlug(title, content);
  await updateArticleSlug(articleId, slug);
});
