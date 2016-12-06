var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
  id: Number,
  title: String,
  f2f_url: String,
  image_url: String,
});

module.exports = mongoose.model('Recipe', recipeSchema);
