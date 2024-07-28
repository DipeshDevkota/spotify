const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const destinationPath = path.join(__dirname, '..', 'uploads');
        cb(null, destinationPath);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }

});

const upload = multer({ storage, limits: { fileSize: 50 * 1024 * 1024 } });
module.exports = upload;