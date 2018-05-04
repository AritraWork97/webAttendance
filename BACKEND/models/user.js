var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,

    },
    email : {
        type : String,
       // required : true,
        unique : true,
    },
    username : {
        type : String,
        minlength : 4,
        unique : true,
        required : true
    },
    address : {
        type : String,
        minlength : 1,
        required : true
    },
    mobile : {
        type : String,
        required : true,
        minlength : 10
    },
    salt : String,
    hash : String
});

userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
}

userSchema.methods.validatePassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return hash === this.hash;
}

userSchema.methods.generateJWT = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      email: this.email,
      name: this.name,
      exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET");
}

var User = mongoose.model('User', userSchema);

module.exports = User;