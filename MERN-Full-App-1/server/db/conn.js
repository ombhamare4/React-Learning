const mongoose = require('mongoose');


const DB = process.env.DATABASE;

 mongoose.connect(DB,{
    useNewUrlParser:true,//Alwasy false
}).then(()=> {
    console.log("Connection Done")
}).catch((err) => {
    console.log("Error: " + err)
    console.log("Connection Fail");
});

