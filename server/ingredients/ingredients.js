var mongoose = require('mongoose');

var ingredientSchema = mongoose.Schema({
  id: Number,
  snippet: String,
  link: String,
});

module.exports = mongoose.model('Ingredient', ingredientSchema);
