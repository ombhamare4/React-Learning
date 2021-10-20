const express = require('express');
const app = express();
const mongoose = require('mongoose');

const DB = "mongodb+srv://webRubik:test'OR'a'='a'@web-db.qjovo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(DB);

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