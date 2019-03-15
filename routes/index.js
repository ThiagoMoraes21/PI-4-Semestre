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

// CREATE POST

// new - show form to create a new post
router.get('/new', (req, res) => {
  res.render('promo/new');
});

// post - handle the post request on the client-side and create a new post 
router.post('/', (req, res) => {
  // get the data from the form
  const name = req.body.name,
        price = req.body.price,
        image = req.body.image,
        site = req.body.site,
        description = req.body.desc;

  // creating a obj to store the from data
  const newPost = {
    name: name,
    price: price,
    image: image,
    site: site,
    description: description
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
