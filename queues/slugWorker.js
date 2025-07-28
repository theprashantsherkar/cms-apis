// queues/slugWorker.js
import { Worker } from "bullmq";
import { generateSlug } from "../services/llm.js";
import { updateArticleSlug } from "../services/articleService.js";
import IORedis from "ioredis";

// Redis connection
const connection = new IORedis();

const worker = new Worker(
  "slug-queue",
  async (job) => {
    try {
      const { articleId, title, content } = job.data;

      console.log(`🔄 Processing slug job for article ID: ${articleId}`);

      const slug = await generateSlug(title, content);
      console.log(`✅ Generated slug: ${slug}`);

      await updateArticleSlug(articleId, slug);
      console.log(`✅ Slug updated in DB for article ${articleId}`);
    } catch (err) {
      console.error("❌ Error in slug worker:", err);
    }
  },
  {
    connection: {
      host: "localhost",
      port: 6379,
      maxRetriesPerRequest: null, // <- This is required
    },
  }
);

worker.on("completed", (job) => {
  console.log(`🎉 Job ${job.id} completed`);
});

worker.on("failed", (job, err) => {
  console.error(`❌ Job ${job.id} failed:`, err);
});
