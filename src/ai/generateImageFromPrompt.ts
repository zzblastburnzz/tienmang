import { Configuration, OpenAIApi } from "openai";

export async function generateImageFromPrompt(prompt, apiKey) {
  const configuration = new Configuration({ apiKey });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createImage({
    prompt,
    n: 1,
    size: "512x512"
  });

  return response.data.data[0].url;
}
