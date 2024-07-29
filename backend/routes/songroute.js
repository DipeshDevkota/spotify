const express = require('express');
const router = express.Router();

const {deleteSongSearch,SearchSong, addSong, deleteSong} = require('../controllers/songcontroller');

const {validateJWT } = require('../middlewares/validateJWT');


//route to search for songs
router.get('/search',SearchSong);


//route to delete a song based on search 

router.delete('/',validateJWT,deleteSongSearch);


router.post('/addsong',addSong);
router.post('/delete/:id',deleteSong)
module.exports = router;




