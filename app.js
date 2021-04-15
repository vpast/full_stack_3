require("dotenv").config()
require("./model/mongo/db")
const cors = require("cors")
const UserController = require("./controller/User")
const PostController = require("./controller/Post")
const CommentController = require("./controller/Comment")
const express = require('express');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.static('public'));

// Users
app.get('/users', UserController.list);

app.get('/users/:id', UserController.getById)


//Post
app.get('/posts', PostController.list);

app.get('/posts/:id', PostController.getById)

//Comments
app.get('/comments', CommentController.list);

app.get('/comments/:id', CommentController.getById)

app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
});