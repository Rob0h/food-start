var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;

var userSchema = mongoose.Schema({
  id: Number,
  username: String,
  password: String,
});

module.exports = mongoose.model('User', userSchema);