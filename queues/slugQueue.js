// queues/slugQueue.js
import { Queue } from "bullmq";
import IORedis from "ioredis";

const connection = new IORedis();
const slugQueue = new Queue("slug-queue", { connection });

export const addSlugJob = async (articleId, title, content) => {
  await slugQueue.add("generate-slug", {
    articleId,
    title,
    content,
  });
};


