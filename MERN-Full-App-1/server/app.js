const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Hide Database Password and more 
dotenv.config({path:'./config.env'});


const DB = process.env.DATABASE;
mongoose.connect(DB,{
    useNewUrlParser:true,//Alwasy false
}).then(()=> {
    console.log("Connection Done")
}).catch((err) => {
    console.log("Error: " + err)
    console.log("Connection Fail");
});

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

let port = 8000;
app.listen(port,()=>{
    console.log(`Server is Running on ${port}`);
});