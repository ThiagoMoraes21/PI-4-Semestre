const mongoose = require('mongoose');

// Setup schema
const postSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
    votes: Number,
    image: String,
    site: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

// create a model using postSchema
module.exports = mongoose.model('Post', postSchema);