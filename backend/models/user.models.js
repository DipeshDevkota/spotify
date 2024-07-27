const mongoose = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },
    playlists:[{
        type:Schema.Types.ObjectId,
        ref:'Playlists'
    }],
    likedSongs:
    [{
        type:Schema.Types.ObjectId,
        ref:'Song'
    }]

},{timestamps:true});

const User = mongoose.model('User',userSchema);

module.exports=User;

