const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 }));

let URL = `mongodb://localhost:27017/SalesReport`;

try {
  mongoose.connect(URL);
  console.log("DB Connected!");
} catch (err) {
  console.error(err);
}

const router = require("./src/routes/api");
app.use("/api/v1", router);

app.use("/", (req, res) => {
  res.status(200).json({ message: "Hello From Express App!" });
});

app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not Found" });
});

module.exports = app;
