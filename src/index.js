import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Add Express
const express = require("express");
// Initialize Express
const app = express();
// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;