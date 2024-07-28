const Playlist = require("../controllers/playListcontroller");
const asyncHandler = require("express-async-handler")



// @desc    Create a new playlist
// @route   POST /api/playlists
// @access  Private

const createPlaylist = asyncHandler(async (rew, res) => {

    const { name, description } = req.body;
    const userId = req.user._id;
    if (!name) {
        return res.status(401).json({ message: "Field is required" });

    }

    try {
        const newPlaylist = new Playlist({
            name,
            description,
            user: userId,
        });

        const savedPlaylist = await new Playlist.save();

        res.status(201).json(savedPlaylist);
    }
    catch (err) {

        res.status(500).json({ message: err.message });
    }


});



// @desc    Get all playlists
// @route   GET /api/playlists
// @access  Public (or Private if you want to restrict access)
const checkPlaylist = asyncHandler(async (req, res) => {
    try {
        // Retrieve all playlists from the database
        const allPlaylists = await Playlist.find().populate('user songs');

        // Respond with the list of playlists
        res.status(200).json(allPlaylists);
    } catch (err) {
        // Handle errors
        res.status(500).json({ message: err.message });
    }
});




//@desc Delete the playlist
//@route POST/api/delete
//@access Private if you want




const deletePlaylist = asyncHandler(async (req, res) => {

    try {
        const playlistId = req.params.id;

        const deletedPlaylist = await Playlist.findByIdAndDelete(playlistId);

        if (!deletedPlaylist) {
            return res.status(404).json({ message: "Playlis not found" });

        }
        res.status(200).json({ message: 'Playlist deleted successfully', deletePlaylist });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }


});


module.exports = {
    createPlaylist,checkPlaylist,deletePlaylist
};


// const updatePlaylist = asyncHandler(async(req,res)=>{
//     try{
            
//         const playlistId = req.params.id;


//     }
// })