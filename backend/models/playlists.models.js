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
},{timestamps:true});


const Playlist = mongoose.model('Playlist',playlistSchema);

module.exports=Playlist;