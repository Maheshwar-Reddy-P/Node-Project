import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import greetRoute from '../greet/greet.route.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use('/api',greetRoute);

//Response Handler Middleware
app.use((obj,req,res,next) => {
    const statusCode = obj.status || 500;
    const message = obj.message || "Something went wrong";
    res.status(statusCode).json({
        success: [200,201,204].some(code => code === obj.status) ? true : false,
        status: statusCode,
        message: message,
        data: obj.data
    });
});

// Error handler middleware
app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    const errorMessage = err.message || "Something went Wrong";
    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: errorMessage,
        stack: err.stack
    });
});

app.listen(PORT, () => {
    console.log("Server is running...");
});