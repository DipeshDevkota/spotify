const express = require('express');
const router = express.Router();
const upload = '../middlewares/multer.js'
const {deleteSongSearch,SearchSong, addSong,listSong, deleteSong} = require('../controllers/songcontroller');

const {validateJWT } = require('../middlewares/validateJWT');


//route to search for songs
router.get('/search',SearchSong);


//route to delete a song based on search 

router.delete('/',validateJWT,deleteSongSearch);


router.post('/addsong',upload.files([{name:'image',maxCount:1},{name:'audio',maxCount:1}]),addSong);

router.get('/list',listSong);
router.post('/delete/:id',deleteSong)
module.exports = router;




