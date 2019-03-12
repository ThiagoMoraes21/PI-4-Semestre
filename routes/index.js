const express = require('express'),
      router  = express.Router();

// root route
router.get('/', (req, res) => {
    res.render('promo/index');
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
