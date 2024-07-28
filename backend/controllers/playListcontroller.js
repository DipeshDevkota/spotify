const Playlist = require('../models/playlistModel');
const asyncHandler = require('express-async-handler');

// @desc    Create a new playlist
// @route   POST /api/playlists
// @access  Private
const createPlaylist = asyncHandler(async (req, res) => {
    const { name, description } = req.body;
    const userId = req.user._id;

    if (!name) {
        return res.status(400).json({ message: "Field 'name' is required" });
    }

    try {
        const newPlaylist = new Playlist({
            name,
            description,
            user: userId,
        });

        const savedPlaylist = await newPlaylist.save();
        res.status(201).json(savedPlaylist);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @desc    Get all playlists
// @route   GET /api/playlists
// @access  Public (or Private if you want to restrict access)
const checkPlaylist = asyncHandler(async (req, res) => {
    try {
        const allPlaylists = await Playlist.find().populate('user songs');
        res.status(200).json(allPlaylists);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @desc    Delete the playlist
// @route   DELETE /api/playlists/:id
// @access  Private
const deletePlaylist = asyncHandler(async (req, res) => {
    try {
        const playlistId = req.params.id;

        const deletedPlaylist = await Playlist.findByIdAndDelete(playlistId);

        if (!deletedPlaylist) {
            return res.status(404).json({ message: "Playlist not found" });
        }
        res.status(200).json({ message: 'Playlist deleted successfully', deletedPlaylist });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = {
    createPlaylist,
    checkPlaylist,
    deletePlaylist,
};
