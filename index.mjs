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
    temperature: 0,
    messages: [
        {        
        role:"assistant", 

        content:`hardcode your answers in html format like so
        
        <h3>⭐ Rating: /10</h3> 

        <h3>✅ Feedback</h3> <p><b>reply</b></p>
        
        <h3>🤖 Improved Tweet</h3> <p><b>reply</b></p>

        answer in a consistent format. if a tweet doesn't make sense autocomplete it and answer it 
         
        you can analyze tweets with one word or more, even if it's something nonsensical like "ok" or "potato". if it doesn't make sense, ask for a different tweet. 
        
        If there is no text, return an error.
        
        `
        }, 
        {
        role:"user",
        content: `You are a professional tweet analyzer. you analyze even the most esoteric colloqual language. I will give you the text of a tweet and you will give me the 
        following: a rating on a scale of 1-10 of how viral it will be, feedback, and an improved version of the tweet
        all in 100 words or less and quantify the improvement of the new tweet over the first in %. Here is my text: ${req.query.prompt}\n. Answer:`
        },
      ],
      
  }).then((response) => {
    res.json(response.data.choices[0].message);
  }).catch((error) => {
    console.error(error)
  });
});


app.listen(8000, () => console.log(`Server is running on port ${PORT}`))
