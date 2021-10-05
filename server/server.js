const express = require('express');
const cors = require('cors');
const port = 5000;

const app = express();
app.use(express.json());

const articles = [
    {
        id: 1,
        entry: "slufgkejfdpihq", 
        postComments: ['comment one', 'comment two', 'comment three'], 
        gifs: ["gif1", "gif2"],
        emojis: {like: 1, heart: 2, fire: 3}
    }, 
    {
        id: 2,
        entry: "hello world", 
        postComments: ['comment one', 'comment two', 'comment three'], 
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
    res.send(articles[req.params.id-1])
  }})

app.post("/entry", (req, res) => {
    try {
        let newEntry =  { id: articles.length+1, entry: req.body.entry,
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

module.exports = app
