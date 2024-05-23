// const express = require("express")   //commonjs
// const app = express()
// const dotenv = require("dotenv").config()
import express from 'express';   //ES Module
import dotenv from 'dotenv';
import connectDB from './config/dbConnection.js'; 
import userRouter from './routes/userRouter.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Define port
const port = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());


connectDB()


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})


app.use("/user", userRouter)

export default app;


