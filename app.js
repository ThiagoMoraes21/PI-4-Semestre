const express = require('express'),
      app     = express(),
      port    = process.env.PORT || 3000,
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      url = process.env.DATABASEURL || 'mongodb://localhost/black_bird',
      seedDB = require('./seeds'),
      methodOverride = require('method-override');


// requesting routes
const indexRoutes = require('./routes/posts');
const commentsRoutes = require('./routes/comments');

// setup database
mongoose.connect(url, {useNewUrlParser: true});
console.log(process.env.DATABASEURL);

// testing db connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('DB connected!');
    //seedDB();
});

//  setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

app.use('/', indexRoutes);
app.use('/promocao', indexRoutes);

// Page not found
app.get('*', (req, res) => {
    res.send('404 page not found!');
});

// starts server
app.listen(port, process.env.IP, () => {
    console.log(`Server is running at port: ${port}`);
});
