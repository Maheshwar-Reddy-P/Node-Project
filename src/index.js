import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.post("/", (req, res) => {
    res.send(`Hello ${req.body.name}`);
});

app.listen(PORT, () => {
    console.log("Server is running...");
});