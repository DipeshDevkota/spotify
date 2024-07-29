const express = require('express');
const app = express();
const port = 4000;
const jwt = require('jsonwebtoken');
const databaseConnection = require('./config/dbConnection');
const userroute = require('./routes/userroute');
const artistroute = require('./routes/artistroute');
const songroute = require('./routes/songroute');
const playlistRoutes = require('./routes/playlistroute');

app.use(express.json());
// app.use(cors());
databaseConnection();

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
