const Song = require("../models/song.models");
const asyncHandler = require("express-async-handler");
const cloudinary = require('cloudinary').v2;

const addSong = asyncHandler(async (req, res) => {
  try {
    const { name, desc, album } = req.body;
    const audioFile = req.files.audio[0];
    const imageFile = req.files.image[0];

    const audioUpload = await cloudinary.uploader.upload(audioFile.path, { resource_type: "video" });
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
     
    const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(audioUpload.duration % 60)}`;

    const songsData = {
      name,
      desc,
      album,
      image: imageUpload.secure_url,
      file: audioUpload.secure_url,
      duration
    };

    const song = new Song(songsData);
    await song.save();

    res.json({ success: true, message: "Song Added" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});

const deleteSong = asyncHandler(async (req, res) => {
  // const { id } = req.params;
  try {
    const song = await Song.findByIdAndDelete(req.body.id);
    // if (!song) {
    //   return res.status(404).json({ message: "Song not found" });
    // }
    res.status(200).json({ message: "Song deleted successfully", song });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const searchSong = asyncHandler(async (req, res) => {
  const { title, artist, album, genre } = req.query;
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
    const songs = await Song.find(query);
    res.status(200).json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
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

const listSong = asyncHandler(async (req, res) => {
  try {
    const allSongs = await Song.find({});
    res.json({ success: true, songs: allSongs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});

module.exports = {
  deleteSongSearch,
  searchSong,
  addSong,
  deleteSong,
  listSong
};
