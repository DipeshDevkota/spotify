const express = require("express");
const app =express();
const port=4000;
const jwt = require("jsonwebtoken");
const databaseConnection = require('./config/dbConnection');
const userroute= require('./routes/userroute')
const artistroute = require('./routes/artistroute')
const songroute = require('./routes/songroute')
const playlistRoutes = require('./routes/playlistroute')
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



//user routes 

app.use('/api/users',userroute);


//artistroutes

app.use('/api/artists',artistroute);


//songroute

app.use('/songs',songroute);


//playlistroute

app.use('/api/playlists',playlistRoutes);