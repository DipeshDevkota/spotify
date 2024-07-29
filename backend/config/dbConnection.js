const mongoose = require('mongoose');
require('dotenv').config(); // Add this line to load environment variables

const databaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            // No need to specify useNewUrlParser and useUnifiedTopology anymore
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = databaseConnection;
