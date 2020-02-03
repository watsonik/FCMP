const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  id: Number,
  author: String,
  author_id: String,
  title: String,
  content: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: {type: Date, default: Date.now}
});

const News = mongoose.model('News', NewsSchema);

module.exports = News;
