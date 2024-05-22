import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import route from './routes/userrouts.js';

// Initialize dotenv to use environment variables
dotenv.config();

// Initialize express
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Port and MongoDB URL from environment variables
const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL || "mongodb://127.0.0.1:27017/Userdata";

// Connect to MongoDB
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use("/api", route);