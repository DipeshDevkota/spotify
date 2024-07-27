const mongoose = require('mongoose');

const artistSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    bio: {
        type:
            String
    },

    genres:
        [String],


}, { timestamps: true });

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
