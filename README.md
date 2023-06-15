# Codebender AI Starter Project - React version

This is a starter code you can clone to build your first AI project✊

- The frontend runs in React. The code lives in the `src/` folder.
- The backend runs in Nodejs. The code lives in the `index.mjs` file.

## How to run the app

Create a `.env.local` file and add your API key there.
Simply write `OPENAI_API_KEY=<your_api_key>` (replace <your_api_key> with your key).

To setup the app run:

```
yarn && yarn start
```

You will only need to do it the first time to install all the dependencies.
Next time you want to run the app, simply enter:

```
yarn start
```

This will open the app in development mode. Visit http://localhost:3000 to view it in your browser.

I personally prefer to run the backend and frontend separately so that I have them in two different terminal tabs (it helps to print logs, etc.):

1. Run `yarn start:backend`
2. Open a new terminal tab
3. Run `yarn start:frontend`
