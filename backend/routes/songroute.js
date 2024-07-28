const express = require('express');
const router = express.Router();

const {deleteSongSearch,SearchSong} = require('../controllers/songcontroller');

const {validateJWT } = require('../middlewares/validateJWT');


//route to search for songs
router.get('/search',SearchSong);


//route to delete a song based on search 

router.delete('/',validateJWT,deleteSongSearch);

module.exports = router;




