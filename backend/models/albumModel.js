const mongoose = require('mongoose');
const { Schema } = mongoose;


const albumSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    bgColour:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
})
const Album = mongoose.model('Album',albumSchema);

module.exports= Album;