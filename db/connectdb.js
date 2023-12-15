const mongoose = require('mongoose'); // import mongoose

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}; // create a function to connect to the database

module.exports = connectDB; // export the connectDB function
