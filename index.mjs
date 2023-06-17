import { Configuration, OpenAIApi } from "openai";
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv'

const PORT = 8000;
dotenv.config();
dotenv.config({ path: `.env.local`, override: true });

const app = express();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(cors());

app.get('/openai', (req,res) => {
  openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{
      role: "user",
      // content: 'context paragraph: ${req.query.prompt}'\n,
      content: `You are a twitter analyzer, and you analyze tweets. I will give you the text of a tweet and you will give me the 
      following in bullet point form. when you answer skip a line for each bullet like so: 
      - point \n
      - point \n
      - point \n :
                a rating on a scale of 1-10 of how viral it will be, feedback, and suggestions to improve it 
                Here is my text: ${req.query.prompt}\n`,
    }],
  }).then((response) => {
    res.json(response.data.choices[0].message);
  }).catch((error) => {
    console.error(error)
  });
});


app.listen(8000, () => console.log(`Server is running on port ${PORT}`))