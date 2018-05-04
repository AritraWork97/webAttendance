var express = require('express');
var jwt = require('express-jwt');
var router = express.Router();

var auth = require('../config/auth');

var check = jwt({
  secret : 'MY_SECRET',
  userProperty : 'payload'
})

router.post('/register', auth.register);
router.post('/login', auth.login);
router.get('/profile', check, auth.profileRead )


module.exports = router;
