import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({ apiKey: process.env.OAI_TOKEN });

const openai = new OpenAIApi(config);

export default async function getCopy(prompt: string): Promise<string> {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `write an engaging copy for facebook, in spanish, and linkedIn and twitter, in English, for the following blog post summary: ${prompt}`,
      temperature: 0.5,
      max_tokens: 1000,
    });
    const resp = completion.data.choices[0].text;
    return resp ? resp : "can't generate";
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      return error.response.status;
    } else {
      console.log(error.message);
      return error.message;
    }
  }
}
