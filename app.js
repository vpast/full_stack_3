require("dotenv").config()
require("./model/mongo/db")
const cors = require("cors")
const User = require("./model/mongo/User")
const Post = require("./model/mongo/Post")
const Comment = require("./model/mongo/Comment")
const express = require('express');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.static('public'));

// Users
app.get('/users', async (req, res) => {
  res.json({
    items:await User.find()
  });
});

app.get('/users/:id', async (req, res) => {
  res.json({
    item:await User.findOne({id:req.params.id})
  })
})


//Post
app.get('/posts', async (req, res) => {
  const criteria = {}
  if (req.query.userId) {
    criteria.userId = req.query.userId
  }
  res.json({
    items:await Post.find(criteria)
  });
});

app.get('/posts/:id', async (req, res) => {
  res.json({
    item:await Post.findOne({id:req.params.id})
  })
})

//Comments
app.get('/comments', async (req, res) => {
  const criteria = {}
  if (req.query.postId) {
    criteria.postId = req.query.postId
  }
  res.json({
    items:await Comment.find(criteria)
  });
});

app.get('/comments/:id', async (req, res) => {
  res.json({
    item:await Comment.findOne({id:req.params.id})
  })
})

app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
});