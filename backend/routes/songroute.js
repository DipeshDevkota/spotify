const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer'); // Corrected import path
const { deleteSongSearch, searchSong, addSong, listSong, deleteSong } = require('../controllers/songcontroller');
const { validateJWT } = require('../middlewares/validateJWT');

// Route to search for songs
router.get('/search', searchSong);

// Route to delete a song based on search
router.delete('/', validateJWT, deleteSongSearch);

// Route to add a song with image and audio
router.post('/addsong', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'audio', maxCount: 1 }]), addSong);

// Route to list songs
router.get('/list', listSong);

// Route to delete a song by ID
router.post('/delete', deleteSong);

module.exports = router;
