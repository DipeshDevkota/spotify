const express = require('express');
const router= express.Router();
const { getPlaylistsByArtistName} = require("../controllers/artistcontroller")



router.post('/artist',getPlaylistsByArtistName);

module.exports= router;