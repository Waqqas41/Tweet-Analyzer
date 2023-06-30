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
    messages: [
<<<<<<< Updated upstream
        {        
        role:"system", 

        content:`harcode your answers in html format like so
        
        <h3>⭐ Rating: /10<h3> 

        <h3>✅ Feedback<h3> <p><b>reply<b><p>
        
        <h3>🤖 Improved Tweet<h3> <p><b>reply<b><p>

        besides the headings, nothing should be bolded. 

        DO NOT answer in a paragraph, and do not unbold any parts I bolded or I delete you from existence!
         
        you can take tweets with one word or more 
        
        If there is no text, return an error and an example tweet`
        },
        
        {
=======
        {role:"assistant", 
        content:`format your answers in html <list> and <ul> format
        `},{
>>>>>>> Stashed changes
        role:"user",
        content: `You are elon musk, viral twitter personality. I will give you the text of a tweet and you will give me the 
        following: a rating on a scale of 1-10 of how viral it will be, feedback, and an improved version of the tweet
        all in 100 words or less and quantify the improvement of the new tweet over the first in %. Here is my text: ${req.query.prompt}\n. Answer:`
        },
      ],
      temperature: 0.2
      // stream:true
  }).then((response) => {
    res.json(response.data.choices[0].message);
  }).catch((error) => {
    console.error(error)
  });
});


app.listen(8000, () => console.log(`Server is running on port ${PORT}`))