var config       = require('../../configs/ldap'),
    passport     = require('passport'),
    LDAPStrategy = require('passport-ldapauth').Strategy;

// Use the LDAPStrategy within Passport.
passport.use(
  new LDAPStrategy(config, function(user, done) {
    return done(null, user);
  })
);

passport.serializeUser(function(user,done) {
  done(null, user);
});

passport.deserializeUser(function(user,done) {
  done(null, user);
});

module.exports = function (app) {

  app.get('/oauth/ldap', function(req, res) {
    res.render('oauth/ldap');
  });

};
