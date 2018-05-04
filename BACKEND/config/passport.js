var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

var User = require('../models/user');


passport.use(new localStrategy({
    usernameField : 'email'
}, function(username, password, done) {
            User.findOne({
                email : username
            }, (err, user) => {
                if(err) {
                    return done(err)
                } 
                if (!user) {
                    return done(null, false, {
                        message : 'User not found'
                    });
                }
                if(!user.validatePassword(password)) {
                    return done(null, false, {
                        message : 'Password is wrong'
                    });
                }
                return done(null, user);
            })
}))