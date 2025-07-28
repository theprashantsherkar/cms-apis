
import { OpenAI } from "openai"; 
const openai = new OpenAI({
  apiKey:
    process.env.OPENAI_API_KEY ||
    "REMOVED",
});

export const generateSlug = async (title, content) => {
  const prompt = `Generate a short, URL-friendly slug for this article based on its title and content.\n\nTitle: ${title}\n\nContent: ${content}\n\nSlug:`;
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }],
  });

  let slug = response.choices[0].message.content.trim();
  slug = slug
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

  return slug;
};

export const generateSummary = async (title, content) => {
  const prompt = `Write a short 2–3 sentence summary for the following article.\n\nTitle: ${title}\n\nContent:\n${content}\n\nSummary:`;
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content.trim();
};
