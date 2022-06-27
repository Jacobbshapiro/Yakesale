var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
  res.redirect('/items');
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/items',
    failureRedirect: '/items'
  }
));

router.get('/logout', function(req, res) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/items')
  })
})

module.exports = router;
