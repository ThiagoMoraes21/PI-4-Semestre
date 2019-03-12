const express = require('express'),
      app     = express(),
      port    = process.env.PORT || 3000,
      bodyParser = require('body-parser');


// requesting routes
const indexRoutes = require('./routes/index');

//  setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

// declaring routes
app.use('/', indexRoutes);

// Page not found
app.get('*', (req, res) => {
    res.send('404 page not found!');
});

// starts server
app.listen(port, process.env.IP, () => {
    console.log(`Server is running at port: ${port}`);
});
