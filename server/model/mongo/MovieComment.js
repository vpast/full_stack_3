const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieCommentSchema = new Schema({
    name: String,
    movie_id: Schema.Types.ObjectId
});

const model = mongoose.model('MovieComment', MovieCommentSchema, 'movie-comments');

module.exports = model;