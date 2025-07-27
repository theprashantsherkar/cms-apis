import { OpenAi } from "openapi";
import dotenv from "dotenv";

const openai = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateSlug(title, content) {
  const prompt = `Generate a concise and SEO-friendly slug for the following title and content:\n\nTitle: ${title}\nContent: ${content}\n\nSlug:`;
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });
    return response.choices[0].message.content
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");
  } catch (error) {
    console.error("Error generating slug:", error);
  }
}

export async function generateSummary(content) {
  const prompt = `Summarize this article content in 2–3 sentences:\n${content}`;
  try {
    const res = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });
    return res.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error generating summary:", error);
  }
}
