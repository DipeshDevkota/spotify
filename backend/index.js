const express = require("express");
const app =express();
const port=4000;
const jwt = require("jsonwebtoken");
const databaseConnection = require('./config/dbConnection');




app.use(express.json());
// app.use(cors());
databaseConnection();


app.get('/',(req,res)=>{
  res.send("Hellosss whatsup");
})


app.listen(port,(error)=>{
    if(!error){
        console.log("Server running on port"+port);
    }
    else{
        console.log('error'+ error);
    }
});
