const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    id: String,
    description: String
});

const News = mongoose.model('News', NewsSchema);

module.exports = News;