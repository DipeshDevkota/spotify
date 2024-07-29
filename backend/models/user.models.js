const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
    name: {
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

