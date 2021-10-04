const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

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

module.exports = app

const articles = ['hello', 'world']