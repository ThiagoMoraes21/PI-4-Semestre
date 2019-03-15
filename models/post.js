const mongoose = require('mongoose');

// Setup schema
const postSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
    votes: Number,
    image: String,
    site: String
});

// create a model using postSchema
module.exports = mongoose.model('Post', postSchema);