var User = require('./users.js');

module.exports = {

  loginUser: function(user) {
    var user = new User({
      username: user.username,
      password: user.password,
    });
    return User.find({username: user.username})
    .then(function(found) {
      if(found.length > 0) {
        if(found[0].password === user.password) {
          return true;
        }
      } else {
        return false;
      }
    })
  },
  addUser: function(user) {
    var newUser = new User({
      username: user.username,
      // Password being saved as plain text- Opportunity for Improvement in the future
      password: user.password,
    });
    return User.find({username: newUser.username})
    .then(function(found) {
      if(found.length > 0) {
        return false;
      } else {
        return newUser.save()
        .then(function(res) {
          return true;
        });
      }
    })
  }
}