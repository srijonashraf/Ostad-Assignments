const express = require("express");
const bodyParser = require("body-parser");
const jsonwebtoken = require("jsonwebtoken");
const mongoose = require("mongoose");
const nodeMailer = require("nodemailer");
const app = express();
const rateLimit = require("express-rate-limit");
const cors = require('cors');
require("dotenv").config();


// Middleware
// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cors());

// Request Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

// Mongo DB Database Connection
let URL = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.nakaabb.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;
let CONFIG = {
  user: process.env.USER,
  pass: process.env.PASS,
  autoIndex: true,
};

try {
  mongoose.connect(URL, CONFIG);
  console.log("DB Connected!");
} catch (err) {
  console.error(err);
}

// Routing Implement
const router = require("./src/routes/api");
app.use("/api/v1", router);

// Default route
app.use("/", (req, res) => {
  res.json({ message: "Hello From Express App!" });
});


// Undefined Route Implement
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not Found" });
});

module.exports = app;
