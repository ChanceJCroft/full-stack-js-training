const express = require('express');
const app = express();
const port = 3000;


/*app.use((req, res) => {
    console.log("Incoming request!");
    res.send("Request recieved!");
})*/

app.get('/', (req, res) => {
    res.send("Welcome to the home page.");
})

app.get('/cats', (req, res) => {
    res.send("Meow");
})

app.post('/cats', (req, res) => {
    res.send("This is a Cats POST request");
})

app.get('/dogs', (req, res) => {
    res.send("Bow fucking wow biotch");
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`This is the ${subreddit} subreddit`);
})

app.get('/r/:subreddit/:postID', (req, res) => {
    const { subreddit, postID } = req.params;
    res.send(`This is the ${postID} Post ID of the ${subreddit} subreddit`);
})


app.get('/search', (req, res) => {
    const { q } = req.query;
    if(!q){
        res.send("Nothing found this time!");
    } else {
    console.log(q);
    res.send(`The query you are searching is: ${q}`);
}})


app.get('*', (req, res) => {
    res.send("This page doesn't seem to exist. Sorry!");
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})