const Playlist = require("../controllers/playListcontroller");
const asyncHandler = require("express-async-handler")



// @desc    Create a new playlist
// @route   POST /api/playlists
// @access  Private

const createPlaylist =  asyncHandler(async(rew,res)=>{
     
    const{name,description}= req.body;
    const userId = req.user._id;
    if(!name){
        
    }


})