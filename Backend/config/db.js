const mongoose = require('mongoose');

const db = async () => {
    const url = process.env.db_url; // Ensure this is your MongoDB connection string
    console.log(url);

    try {
        // Connect to MongoDB
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB connected successfully");

        // Add any additional logic or operations here
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }

    // Optionally listen for connection events
    mongoose.connection.on('connected', () => {
        console.log("Mongoose connected to MongoDB");
    });

    mongoose.connection.on('error', (err) => {
        console.error("Mongoose connection error:", err);
    });

    mongoose.connection.on('disconnected', () => {
        console.log("Mongoose disconnected from MongoDB");
    });
};


module.exports=db