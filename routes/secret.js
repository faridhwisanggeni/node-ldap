var passport = require('passport');

module.exports = function(app) {

  app.get('/secret', passport.authenticate('ldapauth', { failureRedirect: '/oauth/ldap' }), function(req, res) {
    res.render('secret')
  });

}