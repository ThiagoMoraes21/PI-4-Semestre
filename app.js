const express           = require('express'),
      app               = express(),
      bodyParser        = require('body-parser'),
      mongoose          = require('mongoose'),
      seedDB            = require('./seeds'),
      methodOverride    = require('method-override'),
      expressSanitizer  = require('express-sanitizer'),
      User              = require('./models/user'),
      passport          = require('passport'),
      LocalStrategy     = require('passport-local'),
      flash             = require('connect-flash'),
      port              = process.env.PORT || 3000,
      url               = process.env.DATABASEURL || 'mongodb://localhost/black_bird';


// requesting routes
const indexRoutes = require('./routes/posts');
const commentsRoutes = require('./routes/comments');

// setup database
// command line: export DATABASEURL=mongodb://localhost/black_bird
// mongoose.connect('mongodb://thiagoMoraes:323Sowhatthiago@ds259586.mlab.com:59586/epromo', {useNewUrlParser: true}); // test
mongoose.connect(url, {useNewUrlParser: true});

// testing db connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('DB connected!');
    seedDB();
});

//  setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(expressSanitizer());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(flash());

// setup user authentication
app.use(require('express-session')({
    // passport config
    secret: 'Bob is the best dog of the world',
    resave: false,
    saveUninitialized: false
}));

// get the credential of the current user
// app.use(function(req, res, next) {
//     res.locals.currentUser = req.user;
//     res.locals.error = req.flash('error');
//     res.locals.success = req.flash('success');
//     next();
// });

// init passport
app.use(passport.initialize());
app.use(passport.session());

// require passport methods for authentication
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// config path routes
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
