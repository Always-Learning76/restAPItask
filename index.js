let express = require('express');
let app = express();
let users = require('./posts.json')






// POST /posts to create a new post

app.post('/', function (req, res) {
  res.send('this is a psot')
})
//GET /posts to fetch all posts
app.get('/users', (req, res) => {

 return res.json({ users })
})

let port = app.listen(3000, (req, res) => {
    console.log("I am listening now")
});