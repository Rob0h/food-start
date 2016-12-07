var User = require('./users.js');

module.exports = {

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