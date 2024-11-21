import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import cors from 'cors';

dotenv.config();

const app = express();
const apiKey = process.env.NYT_API_KEY

app.use(
    cors({
        origin: "http://localhost:3001"
    })
)

app.get("/api/articles", async(req,res) => {
    const { query } = req.query;

    const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`);
    const data = await response.json();
    res.json(data);
})

app.listen(3000, () => console.log("Server is running on port 3000"));