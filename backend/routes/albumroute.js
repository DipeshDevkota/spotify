const express = require('express')
const upload = require('../middlewares/multer')
const {addAlbum,listAlbum,removeAlbum} = require('../controllers/albumController')



const albumRouter= express.Router();


albumRouter.post('/add',upload.single('image'),addAlbum);

albumRouter.get('/list',listAlbum);

albumRouter.post('/remove',removeAlbum);


module.exports= albumRouter;