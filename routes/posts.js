const express   = require('express'),
      router    = express.Router({ mergeParams: true }),
      Post      = require('../models/post'),
      Comment   = require('../models/comments'),
      passport  = require('passport'),
      User      = require('../models/user');
let   pageId    = "";

/*****************
 *  MIDDLEWERES
/*****************/
function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}


/*****************
 *  INDEX ROUTE
/*****************/
// root route
router.get('/', (req, res) => {
    Post.find({}, (err, allPosts) => {
      if(err) {
        console.log('Error trying to find posts');
        console.log(err); 
      } else {
        res.render('promo/index', {posts: allPosts, currentUser: req.user, currentPage: req.url});
      }
    });
});

/*******************
 *  REGISTER ROUTE
/*******************/

// register page
router.get('/register', (req, res) => {
  res.render('authentication/register', { currentUser: req.user, currentPage: req.url });
});

// register logic
router.post('/register', (req, res) => {
  let newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, (err, user) => {
    if(!err) {
      passport.authenticate('local')(req, res, function(){
        console.log(`New user ${ user.username }`);
        res.redirect('/');
      });
    } else {
      console.log('Error: ');
      console.log(err);
      res.render('authentication/register');
    }
  });
});

/*******************
 *  LOGIN ROUTE
/*******************/

// render the login page
router.get('/login', (req, res) => {
  res.render('authentication/login', { currentUser: req.user, currentPage: req.url });
});

// handle the login logic
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}),
  (req, res) => {
    req.flash('sucess', `Bem vindo, ${ req.body.username }!`);
    console.log(`Novo usuário logado: ${ req.body.username }`);
  });

// logout logic route
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success', `Até mais, ${ req.body.username }!`);
  res.redirect('/');
});


/*****************
 *  CREATE ROUTE 
/*****************/
// new - show form to create a new post
router.get('/new', isLoggedIn, (req, res) => {
  res.render('promo/new', { currentUser: req.user});
});

// post - handle the post request on the client-side and create a new post 
router.post('/', (req, res) => {
  // get the data from the form and stored it in a object
  const newPost = {
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    site: req.body.site,
    category: req.body.category,
    description: req.body.desc
  }

  // creatinh a new Post in the DB
  Post.create(newPost, (err, createdPost) => {
    if(err) {
      console.log('Error trying to create the post');
      console.log(err);
      res.render('/promo/new', { currentUser: req.user });
    } else {
      // redirect to the new product page
      res.redirect(`/${createdPost._id}`);
    }
  });

});


/*****************
 *  SHOW ROUTE
/*****************/

// show - promotion page information
router.get('/:id', (req, res) => {
  pageId = req.params.id;
  // find post with the provided Id
  Post.findById(req.params.id).populate('comments').exec((err, postFound) => {
    if(err) {
      console.log('Error trying to find the post');
      console.log(err);
    } else {
      // render show template 
      res.render('promo/show', { post: postFound, currentUser: req.user });
    }
  });
});

/*****************
 *  UPDATE ROUTE
/*****************/

// edit page
router.get('/:id/edit', isLoggedIn, (req, res) => {
  // res.render('edit');
  Post.findById(req.params.id, (err, foundPost) => {
    if(!err) {
      res.render('promo/edit', { post: foundPost, currentUser: req.user });
    } else {
      console.log(err);
    }
  });
});

// update router
router.put('/:id', (req, res) => {
  console.log(req.body);
  var postId = req.body.cardId; // get the card's id

  if(req.body.like) { // check if the request came from the like button
    var vote = req.body.votes;
    vote = (parseInt(vote) + 1); // increse vote number
    req.body.votes = vote;

  } else if(req.body.dislike) { // check if the request came from the dislike button
    var vote = req.body.votes;
    vote = (parseInt(vote) - 1); // decrese vote number
    req.body.votes = vote;
  }

  // declare the  query
  var query = { _id: postId };

  // find the post by the provided id and updates it's points
  Post.findOneAndUpdate(query, { votes: req.body.votes }, (err, foundPost) => {
    if(!err) {
      // redirects to the home page
      res.json(foundPost);
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

//creating a new comment
router.post('/:id/comments', isLoggedIn, (req, res) => {
  // create new comment 
  Comment.create(req.body.comment, (err, comment) => {
    if(!err) {
        // sent the json containing the form input content
        res.json(comment);

        // check if the comment text exists before save it in the database
        if(comment.text != '' && comment.text != undefined && comment.text != null) {
          // try to save the new comment and then push it to the current post
          comment.save();

          // associates the comment with the current product in the DB
          Post.findById(pageId, (err, post) => {
            if(!err) {
              //console.log(comment);
              post.comments.push(comment);
              post.save();
            } else {
              console.log(err);
            }
          });
        }
    } else {
      console.log(err);
      res.redirect('back');
    }
  });
});

module.exports = router;
