# Deployed App https://tweetanalyzer.netlify.app/

# Codebender AI Starter Project - React version

This is a starter code you can clone to build your first AI project✊

- The frontend runs in React. The code lives in the `src/` folder.
- The backend runs in Nodejs. The code lives in `netlify/functions/openai/openai.js`. 
  However, I have also left the local server file. It's basically the same code but inside an express server: `index.mjs`.

## How to run the app

Create a `.env.local` file and add your API key there.
Simply write `OPENAI_API_KEY=<your_api_key>` (replace <your_api_key> with your key).

To setup the app run:

```
yarn global add netlify-cli
yarn
```

You will only need to do it the first time to install all the dependencies.

To run the app, you will need to create a netlify account, run 
```
netlify link
```
follow the steps and then
```
yarn start
```
This will open the app in development mode. Visit http://localhost:8888 to view it in your browser.

If you don't want to do create a netlify account, run 
```
yarn start:without-netlify
```
This will open the app in http://localhost:3000
