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
        title: "first article",
        entry: "slufgkejfdpihq", 
        postComments: [
            {comment: 'comment one', gifs: ['https://media.giphy.com/media/WVjmqI7jPwIUM/giphy.gif']},
            {comment: 'comment two', gifs: ['https://media.giphy.com/media/WVjmqI7jPwIUM/giphy.gif']},
            {comment: 'comment three', gifs: ['https://media.giphy.com/media/WVjmqI7jPwIUM/giphy.gif']}
        ], 
        emojis: {like: 1, heart: 2, fire: 3}
    }, 
    {
        id: 2,
        title: "second article",
        entry: "hello world", 
        postComments: [
            {comment: 'comment four', gifs: ['https://media.giphy.com/media/WVjmqI7jPwIUM/giphy.gif']},
            {comment: 'comment five', gifs: []},
            {comment: 'comment six', gifs: ['https://media.giphy.com/media/WVjmqI7jPwIUM/giphy.gif']}
        ], 
        gifs: ["gif1", "gif2"],
        emojis: {like: 1, heart: 2, fire: 3}
    }
]

app.use(cors());
app.listen(port, () =>{
    console.log(`app listening at https://localhost:${port}`)
});

app.get("/", (req, res) => res.send("Welcome to StreetHub"));

// returns all articles
app.get("/articles", (req, res) => res.json({results: articles}));

//returns an article by id 
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

// posts a new article
app.post("/entry", (req, res) => {
    try {
        let newEntry =  { id: articles.length+1, 
        title: req.body.title,
        entry: req.body.entry,
        postComments: req.body.postComments, 
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

// posts a new comment and attaches it to the article
app.post("/newcomment", (req, res) => {
    try{
        let newComment = req.body.postComments;
        articles[req.body.index].postComments.push(newComment);
        res.status(201).json({
            message: "Comment posted"
        });
    } catch(err) {
        res.status(500).json({
            message: "Error: Comment could not be posted"
        });
    }
});


// Delete an entry
app.delete("/articles/delete/:id" , (req, res) => {
    try {
        if(req.params.id > articles.length || req.params.id < 0){
            res.send('Please enter a number greater than 0.');
        } else { 
        delete articles[0].entry;
        res.status(204).json({
            message: "Article deleted"
        })}
        console.log(articles)
    } catch(err) {
        res.status(500).json({
            message: "Error: article could not be deleted."
        })
    }
})

module.exports = app;
