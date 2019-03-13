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
  res.render('promo/show');
});


module.exports = router;
