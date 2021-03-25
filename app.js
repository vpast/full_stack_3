const cors = require("cors")
const User = require("./model/User")
const Post = require("./model/Post")
const Comment = require("./model/Comment")
const express = require('express');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.static('public'));

// Users
app.get('/users', (req, res) => {
  res.json({
    items:User.list()
  });
});

app.get('/users/:id', (req, res) => {
  res.json({
    item:User.getById(req.params.id)
  })
})


//Post
app.get('/posts', (req, res) => {
  res.json({
    items:Post.list(req.query.userId)
  });
});

app.get('/posts/:id', (req, res) => {
  res.json({
    item:Post.getById(req.params.id)
  })
})

//Comments
app.get('/comments', (req, res) => {
  res.json({
    items:Comment.list(req.query.postId)
  });
});

app.get('/comments/:id', (req, res) => {
  res.json({
    item:Comment.getById(req.params.id)
  })
})

app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
});