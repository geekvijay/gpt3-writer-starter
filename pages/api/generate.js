import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = "";

const generateAction = async (req, res) => {
  const prompt = `${basePromptPrefix}${req.body.text}`;
  console.log(`API: ${prompt}`);

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0.7,
    max_tokens: 250,
  });

  const output = baseCompletion.data.choices.pop();

  res.status(200).json({ output });
};

export default generateAction;
