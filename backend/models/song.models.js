const mongoose = require("mongoose");

const { Schema } = mongoose;

const songSchema = new Schema({
    title:{
        type:String,
        required:true,

    },
    artist:{
        type:String,
        required:true,
    },
    album:{
        type:String,
    },
    duration:{
        type:Number,
    },
    genre:{
        type:String,
    },
    url:{
        type:String,
        required:true,
    },

},{
    timestamps:true
});


const Song = mongoose.model('Song',songSchema);

module.exports= Song;