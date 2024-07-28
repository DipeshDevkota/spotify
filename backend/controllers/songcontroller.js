const Song =require("../models/song.models")
const asyncHandler = require("express-async-handler")



const SearchSong = asyncHandler(async(req,res)=>{
   
      const{title,artist,album,genre}= req.query;
      const query={}

      if(title){
        query.title={$regex:title, $options:'i'};
      }

      if(artist){
        query.artist={$regex:artist,$options:'i'};

      }
      if(album){
        query.album ={$regex:album, $options:'i'};
      }
      if(genre){
        query.genre ={$regex:genre, $options:'i'};
      }


      try{
       const songs= await Song.find(query);
       res.status(200).json(songs);

      }
      catch(err){
        res.status(500).json({message:err.message});
      }
      


});

// @desc    Delete a song based on search criteria
// @route   DELETE /api/songs
// @access  Public
const deleteSongSearch = asyncHandler(async (req, res) => {
    const { title, artist, album, genre } = req.body; // Using req.body to get search criteria
    const query = {};

    if (title) {
        query.title = { $regex: title, $options: 'i' };
    }
    if (artist) {
        query.artist = { $regex: artist, $options: 'i' };
    }
    if (album) {
        query.album = { $regex: album, $options: 'i' };
    }
    if (genre) {
        query.genre = { $regex: genre, $options: 'i' };
    }

    try {
        const song = await Song.findOneAndDelete(query);
        if (!song) {
            return res.status(404).json({ message: 'Song not found' });
        }
        res.status(200).json({ message: 'Song deleted successfully', song });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = {
    deleteSongSearch,SearchSong
};