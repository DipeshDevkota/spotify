const express = require('express');
const router = express.Router();
const {createPlaylist,checkPlaylist,deletePlaylist} = require("../controllers/playListcontroller");
const {validateJWT} = require('../middlewares/validateJWT');

// Route to create a new playlist
router.post('/create', validateJWT, createPlaylist);

// Route to get all playlists
router.get('/check', checkPlaylist);

// Route to delete a playlist by ID
router.delete('/:id', validateJWT, deletePlaylist);

module.exports = router;