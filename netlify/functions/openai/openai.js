require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

exports.handler = async (event, context) => {
  // Only allow GET requests
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const prompt = event.queryStringParameters.prompt;

  try {
    const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0,
    messages: [
        {        
        role:"assistant", 

        content:`
       
        `
        }, 
        {
        role:"user",
        content: `
        hardcode your answers in html format like so. each point should be no longer than 2 lines
        
        <h3>⭐ Rating: /10</h3> 

        <h3>✅ Feedback</h3> <p><b>reply</b></p>
        
        <h3>🤖 Improved Tweet</h3> <p><b>the tweet</b></p>

        answer in a consistent format. if a tweet doesn't make sense autocomplete it and answer it. 
        
        never put hastags in your answers
         
        you can analyze tweets with one word or more, even if it's something nonsensical like "ok" or "potato". 

        make an horizontal html table of your answer and return it

        if the tweet doesnt make sense give it a lower rating

        You are a professional tweet analyzer. 
        never put hastags in your answers
        you analyze even the most esoteric colloqual language. 
        I will give you the text of a tweet and you will give me the 
        following: a rating on a scale of 1-10 of how viral it will be, 
        feedback, and an improved version of the tweet
        all in 100 words or less and quantify the improvement of the new tweet over the first in %. 
        do not include any hashtags in your answer. Here is my text: ${prompt}\n. Answer:`
           }],
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data.choices[0].message.content),
      headers: {
        'Content-Type': 'application/json'
      }
    };

  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to connect to OpenAI' }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }
};
