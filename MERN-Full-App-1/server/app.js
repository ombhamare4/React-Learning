const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send("Hello World");
});

let port = 8000;
app.listen(port,()=>{
    console.log(`Server is Running on ${port}`);
});