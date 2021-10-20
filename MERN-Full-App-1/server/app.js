const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// import connection from './db/conn';
//Hide Database Password and more 
dotenv.config({path:'./config.env'});
require('./db/conn');

const PORT = process.env.PORT;


const middleware =(req,res,next)=>{
    console.log("Hello My Middleware");
    next();
}
// middleware();

app.get('/',(req, res) => {
    res.send("Hello World");
});

app.get('/about',middleware,(req, res) => {
    res.send("About you?");
});

app.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT}`);
});