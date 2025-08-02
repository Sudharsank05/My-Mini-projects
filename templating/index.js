const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: true }))
app.use(express.json())


app.set('views', path.join(__dirname,'/views'));
app.set('view engine','ejs');

app.get('/r/:subreddit',(req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit',{ subreddit });
})

// app.get('/sud', (req, res) => {
//     res.send("Hello")
// })

app.get('/rand',(req, res) => {
    const num = Math.floor(Math.random() * 100);
    res.render('rand',{ num });
})

app.post('/sud', (req,res) => {
    console.log(req.body)
    res.send("success");
})

app.get('/',(req,res) => {
res.render('home')
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})