const express = require('express');
const bodyParser = require('body-parser');
const jsonwebtoken = require("jsonwebtoken");
const mongoose = require('mongoose');
const nodeMailer = require("nodemailer");
const app = express();
const rateLimit =require('express-rate-limit');


// Middleware
// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


// Request Rate Limit
const limiter=rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)


// Mongo DB Database Connection
let URI="mongodb+srv://<username>:<password>@cluster0.nakaabb.mongodb.net/TaskManager?retryWrites=true&w=majority";
let OPTION={user:'srijontestdb',pass:'srijon1234',autoIndex:true}
mongoose.connect(URI,OPTION);


// Routing Implement
const router =require('./src/routes/api');
app.use("/api/v1",router)


// Undefined Route Implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})


module.exports=app;
