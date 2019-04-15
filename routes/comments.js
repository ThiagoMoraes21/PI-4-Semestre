const express = require('express');
      router = express.Router({ mergeParams: true }),
      Post = require('../models/post'),
      Comment = require('../models/comments');

// new router
router.get('/', (req, res) => {
    Post.findById(req.params.id, (err, post) => {
        if(!err) {
            res.render('comments/new', {post: post});
        } else {
            // deling with error
            throw err;
        }
    });
});

router.post('/', (req, res) => {
    // create comment in the post...
});

module.exports = router;