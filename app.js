const User = require("./model/User")
const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/users', (req, res) => {
  res.json({
    item:User.list()
  });
});

app.get('/users/:id', (req, res) => {
  res.json({
    item:User.getById(req.params.id)
  })
})


app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
});