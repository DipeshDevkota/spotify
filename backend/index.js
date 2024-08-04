const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const jwt = require('jsonwebtoken');
const databaseConnection = require('./config/dbConnection');
const userroute = require('./routes/userroute');
const artistroute = require('./routes/artistroute');
const songroute = require('./routes/songroute');
const playlistRoutes = require('./routes/playlistroute');
const connectCloudinary = require('./config/cloudinary');
const albumRouter = require('./routes/albumroute');
app.use(express.json());
app.use(cors());
databaseConnection();
connectCloudinary();

app.get('/', (req, res) => {
    res.send("Hello, what's up");
});

app.listen(port, (error) => {
    if (!error) {
        console.log("Server running on port " + port);
    } else {
        console.log('Error: ' + error);
    }
});

// User routes
app.use('/api/users', userroute);

// Artist routes
app.use('/api/artists', artistroute);

// Song routes
app.use('/api/songs', songroute);

// Playlist routes
app.use('/api/playlists', playlistRoutes);

//album routes

app.use('/api/album',albumRouter)
