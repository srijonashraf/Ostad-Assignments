const express = require('express');
const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Import the router from api.js
const apiRouter = require('./src/Routes/api');
app.use('/api', apiRouter); // This sets the base URL for routes

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app;
