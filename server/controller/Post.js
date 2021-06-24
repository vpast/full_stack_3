const Post = require("../model/mongo/Post")

const list = async (req, res) => {
  const criteria = {}
  if (req.query.userId) {
    criteria.userId = req.query.userId
  }
  res.json({
    items:await Post.find(criteria)
  });
}

const getById = async (req, res) => {
  res.json({
    item:await Post.findOne({id:req.params.id})
  })
}

module.exports = {list, getById}