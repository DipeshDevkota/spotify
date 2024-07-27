const mongoose = require("mongoose");
require('dotenv').config();

const databaseConnection = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to the database successfully!");
        console.log("Host:", connection.connection.host);
        console.log("Port:", connection.connection.port);
    } catch (err) {
        console.error("Connection to the database couldn't be made:", err);
    }
};

module.exports = databaseConnection;