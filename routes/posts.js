const express = require('express'),
      router = express.Router({ mergeParams: true }),
      Post    = require('../models/post'),
      Comment = require('../models/comments');
      

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
/*****************/
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
/*****************/
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
/*****************/

// edit page
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

// update router
router.put('/:id', (req, res) => {
  Post.findOneAndUpdate(req.params.id, req.body.post, (err, foundPost) => {
    if(!err) {
      // redirecio para a página do produto editado
      res.redirect(`/${req.params.id}`);
    } else {
      console.log(err);
    }
  });
});

/*****************
 *  DELETE ROUTE
/*****************/

// destroy router, delete a specific post
router.delete('/:id', (req, res) => {
  Post.findOneAndDelete(req.params.id, (err) => {
    if(!err) {
      console.log('Post was deleted...');
      res.redirect('/');
    } else {
      console.log(err);
    }
  });
});


/*********************
 *  COMMENTS ROUTERS
/********************/

// creating a new comment
router.post('/', (req, res) => {
  // install sanatizer later!
  //req.body.todo.text = req.sanitize(req.body.todo.text);
  var formData = req.body.post;
  Todo.create(formData, function (err, newComment) {
    if (err) {
      res.render("new");
      throw err;
    } else {
      res.json(newTodo);
    }
  });
});




module.exports = router;
