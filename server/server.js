const express = require('express');
const dotenv = require('dotenv').config();
const axios = require('axios');
const cors = require('cors');
const port = 5000;

const app = express();
app.use(express.json());

const articles = [
    {
        id: 1,
        entry: "slufgkejfdpihq", 
        comments: ['comment one', 'comment two', 'comment three'], 
        gifs: ["gif1", "gif2"],
        emojis: {like: 1, heart: 2, fire: 3}
    }, 
    {
        id: 2,
        entry: "hello world", 
        comments: ['comment one', 'comment two', 'comment three'], 
        gifs: ["gif1", "gif2"],
        emojis: {like: 1, heart: 2, fire: 3}
    }
]

app.use(cors());
app.listen(port, () =>{
    console.log(`app listening at https://localhost:${port}`)
});

app.get("/", (req, res) => res.send("Welcome to StreetHub"));

app.get("/articles", (req, res) => res.json({results: articles}));

app.get("/articles/:id", (req, res) => {
    if(req.params.id > articles.length || req.params.id < 0){
    res.send('Please enter a number greater than 0.');
  } else {
    res.send(articles[req.params.id-1]);
}});

app.get("/gifs/:query", async (req, res) => {
    try {
        const searchGif = req.params.query;
        const apiKey = process.env.API_KEY;

        const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchGif}&limit=10&offset=0&rating=g&lang=en`);
	
		return res.json({
            success: true,
            output: response.data
        });
    } catch(err) {
        return res.status(500).json({
			success: false,
			error_message: err
		});
    }
});

app.post("/entry", (req, res) => {
    try {
        let newEntry =  { id: articles.length+1, entry: req.body.entry,
        comments: req.body.comments, 
        gifs: req.body.gifs,
        emojis: req.body.emojis };
        articles.push(newEntry);
        res.status(201).json({
            message: "Article added"
        });
    } catch(err) {
        res.status(500).json({
            message: "Error: Article not added"
        });
    }
});

module.exports = app
