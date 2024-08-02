const mongoose = require("mongoose");

const { Schema } = mongoose;

const songSchema = new Schema({

    name:{
        type:String,
        required:true,

    },
    desc:{
        type:String,
        required:true,
    },
    album:{
        type:String,
        required:true,

    },
    duration:{
        type:String,
        required:true,

    },
    image:{
        type:String,
        required:true,

    },
    file:{
        type:String,
        required:true,
    },

},{
    timestamps:true
});


const Song = mongoose.model('Song',songSchema);

module.exports= Song;