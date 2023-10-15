const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const jsonwebtoken = require("jsonwebtoken");
const mysql = require("mysql");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const expressMongoSanitize = require("express-mongo-sanitize");
const expressRateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");
const validator = require("validator");

const app = express();

// Middleware
// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use cookie-parser middleware
app.use(cookieParser());

// Use multer middleware
const upload = multer();
app.use(upload.any());

// Remove the following lines because you don't need to use these packages as middleware:
// app.use(jsonwebtoken);
// app.use(mysql);
// app.use(mongoose);
// app.use(validator);
// app.use(validator());

// Use dotenv middleware
dotenv.config();

// Use CORS middleware
app.use(cors());

// Use express-mongo-sanitize middleware
app.use(expressMongoSanitize());

// Use express-rate-limit middleware
const rateLimit = expressRateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(rateLimit);

// Use helmet middleware
app.use(helmet());

// Use hpp middleware
app.use(hpp());


// Import the router from api.js
const apiRouter = require('./src/Routes/api');
app.use('/api', apiRouter); // This sets the base URL for routes

// Undefined route
app.use((req, res) => {
  res.status(404).json({ status: "error", message: "Route not found" });
});

module.exports = app;
