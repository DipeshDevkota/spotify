const mongoose = require("mongoose");

const playlistSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    songs:[{
        type:Schema.Types.ObjectId,
        ref:'Song',
    }],
    isPublic:{
        type:Boolean,
        default:false
    },
    artist:{
        type:Schema.Types.ObjectId,
        ref:'Artist',
        required:true,
    },
},{timestamps:true});


const Playlist = mongoose.model('Playlist',playlistSchema);

module.exports=Playlist;