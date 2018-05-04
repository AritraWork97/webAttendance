var mongoose = require('mongoose');
var passport = require('passport');
const validator = require('validator') 

var User = require('../models/user');



module.exports.register = (req, res) => {
    var newUser = new User({
        email : '',
        name : '',
        username : '',
        address : '',
        mobile : ''
    });
    newUser.email = req.body.email;
    newUser.name = req.body.name;
    newUser.username = req.body.username;
    newUser.address = req.body.address;
    newUser.mobile = req.body.mobile;
    newUser.setPassword(req.body.password);
    console.log(newUser);
    newUser.save((err) => {
        var token = newUser.generateJWT();
        res.status(200);
        res.json({
            "token" : token
        });
    }).catch((e) => {
        console.log(e);
    });
}

module.exports.login = (req, res) => {
    passport.authenticate('local', function(err, user, info){
        var token;
    
        // If Passport throws/catches an error
        if (err) {
          res.status(404).json(err);
          return;
        }
    
        // If a user is found
        if(user){
          token = user.generateJWT();
          res.status(200);
          res.json({
            "token" : token
          });
        } else {
          // If user is not found
          res.status(401).json(info);
        }
      })(req, res);
}

module.exports.profileRead = function(req, res) {
    if(!req.payload._id) {
        res.status(401).json({
            "message" : "UnauthorizedError: private profile"
        });
    }
    else {
        User.findById(req.payload._id).exec(function(err, user) {
            req.status(200).json(user)
        })
    }
}