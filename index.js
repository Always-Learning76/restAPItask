const { json } = require('express');
let express = require('express');
let app = express();
let fs = require('fs')
let users = require('./posts.json')

app.use(express.json());
app.use(express.urlencoded({}))




// POST /posts to create a new post

app.post('/', function (req, res) {
  res.send('this is a post')
})
//GET /posts to fetch all posts
app.get('/users', (req, res) => {

 return res.json({ users })
})

app.post('/users', (req, res) => {
    console.log(req.body)
    //create a new user from client request
    //save new user to database
    //send back response to client
})

app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    let foundUser = users.find(user => {
        return String(user.id) === id
    })
    return res.status(200).json({user: foundUser})
})

app.put('/users/:id', (req, res) => {
    let id = req.params.id;
   let foundUsers = users.find(user=>{
        return String(user.id) === req.params.id
        })
    users.push(req.body.users)
    console.log({users:id})
    let userIndex = users.indexOf(foundUsers);
     users[userIndex].title = req.body.title
     users[userIndex].body = req.body.body
     fs.writeFile('posts.json', vari, function(err) {
         if(err) {
             return res.status(500).json({message: err})
         }
     })   
         return res.status(200).json({message: "new title and body created"})
     })
     let vari = JSON.stringify(users, null, 2)

let port = app.listen(3000, (req, res) => {
    console.log("I am listening now")
});