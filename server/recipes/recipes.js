var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
  id: Number,
  name: String,
  image_url: String,
  url: String,
});

module.exports = mongoose.model('Recipe', recipeSchema);