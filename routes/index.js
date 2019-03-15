const express = require('express'),
      router  = express.Router(),
      Post    = require('../models/post');
      

// root route
router.get('/', (req, res) => {
    Post.find({}, (err, allPosts) => {
      if(err) {
        console.log('Error trying to find posts');
        console.log(err); 
      } else {
        res.render('promo/index', {posts: allPosts});
      }
    });
});

// new - show form to create a new post
router.get('/new', (req, res) => {
  res.render('promo/new');
});

// show - promotion page information
router.get('/:id', (req, res) => {
  // find post with the provided Id
  Post.findById(req.params.id, (err, postFound) => {
    if(err) {
      console.log('Error trying to find the post');
      console.log(err);
    } else {
      // render show template 
      res.render('promo/show', {post: postFound});
    }
  });
});


module.exports = router;
