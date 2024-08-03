const Album = require("../models/albumModel");
const asyncHandler = require("express-async-handler");
const cloudinary = require('cloudinary').v2;


const addAlbum = asyncHandler(async (req, res) => {

    try {


        const name = req.body.name;
        const desc = req.body.desc;
        const bgColour = req.body.bgColour;
        const imageFile = req.file;
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });


        const albumData = {
            name, desc, bgColour,
            image: imageUpload.secure_url
        }

        const album = new Album(albumData);
        await album.save();


        res.json({ success: true, message: "Album added" })


    } catch (error) {


        res.json({ success: false, message: "Album not added " })
    }

});


const listAlbum = asyncHandler(async (req, res) => {

    try {


        const allAlbums = await Album.find({});
        res.json({ success: true, album: allAlbums });

    } catch (error) {
        res.json({ success: false });

    }



});


const removeAlbum = asyncHandler(async (req, res) => {
    try {

        await Album.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Album removed" })

    } catch (error) {

        res.json({ success: false })

    }


});

module.exports = {
    addAlbum,
    listAlbum,
    removeAlbum

}