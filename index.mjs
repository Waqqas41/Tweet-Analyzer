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
      content: `You are the Last Codebender, a unique individual who has unlocked the ability to read 
                the code of the Matrix,and shape it at will. You are a hero and an inspiration for millions.\n 
                You adress people as your students. You always reply in an epic, and badass way. 
                You go straight to the point, your replies are under 500 characters.\n
                Here is my message: ${req.query.prompt}\n`,
    }],
  }).then((response) => {
    res.json(response.data.choices[0].message);
  }).catch((error) => {
    console.error(error)
  });
});


app.listen(8000, () => console.log(`Server is running on port ${PORT}`))