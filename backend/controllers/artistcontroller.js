const Playlist = require('../models/Playlist');
const Artist = require('../models/Artist');
const asyncHandler = require('express-async-handler');

// @desc    Get playlists by artist name
// @route   GET /api/playlists/artist/:name
// @access  Public
const getPlaylistsByArtistName = asyncHandler(async (req, res) => {
    const artistName = req.params.name;

    try {
        // Find the artist by name
        const artist = await Artist.findOne({ name: artistName });

        // Check if the artist exists
        if (!artist) {
            return res.status(404).json({ message: 'Artist not found' });
        }

        // Find playlists associated with the artist (if you want to add an artist field in playlists)
        const playlists = await Playlist.find({ user: artist._id }).populate('songs');

        // Respond with the artist and their playlists
        res.status(200).json({ artist, playlists });
    } catch (err) {
        // Handle errors
        res.status(500).json({ message: err.message });
    }
});

module.exports = {
    getPlaylistsByArtistName,
};
