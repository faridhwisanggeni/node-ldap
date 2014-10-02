var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    passport = require('passport');

// configure app

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(passport.initialize());

// routes

require('./routes/index')(app);
require('./routes/secret')(app);
require('./routes/oauth/ldap')(app);

// boot server

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});