var router = require('express').Router();
var passport = require('passport')

// The root route renders our only view
router.get('/', function(req, res) {
  res.redirect('/students');
});

//Add login Route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/students',
    failureRedirect : '/students'
  }
))

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/students');
});

module.exports = router;