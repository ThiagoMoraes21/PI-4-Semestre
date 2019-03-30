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


/*****************
 *  CREATE ROUTE 
/******************/
// new - show form to create a new post
router.get('/new', (req, res) => {
  res.render('promo/new');
});

// post - handle the post request on the client-side and create a new post 
router.post('/', (req, res) => {
  // get the data from the form and stored it in a object
  const newPost = {
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    site: req.body.site,
    description: req.body.desc
  }

  // creatinh a new Post in the DB
  Post.create(newPost, (err, createdPost) => {
    if(err) {
      console.log('Error trying to create the post');
      console.log(err);
      res.render('/promo/new');
    } else {
      // redirect to the new product page
      res.redirect(`/${createdPost._id}`);
    }
  });

});


/*****************
 *  READ ROUTE
/******************/
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

/*****************
 *  UPDATE ROUTE
/******************/

router.get('/:id/edit', (req, res) => {
  // res.render('edit');
  Post.findById(req.params.id, (err, foundPost) => {
    if(!err) {
      res.render('promo/edit', { post: foundPost });
    } else {
      console.log(err);
    }
  });
});


module.exports = router;
