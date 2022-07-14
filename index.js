const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const redditData = require('./data.json')

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.get('/', (req, res) => {
    res.render('home');
})

app.get('/cats', (req, res) => {
    const cats = ['Roger', 'Paul', 'Nomad', 'Bandit'];
    res.render('cats', { cats });
})

app.get('/random', (req, res) => {
    const number = (Math.floor(Math.random() * 10)) + 1;
    res.render('random', { number });
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if(data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit });
    }
    
})


/*app.use((req, res) => {
    console.log("Incoming request!");
    res.send("Request recieved!");
})*/

/*app.get('/', (req, res) => {
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

*/
app.get('*', (req, res) => {
    res.send("This page doesn't seem to exist. Sorry!");
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})