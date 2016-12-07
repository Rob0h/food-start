var Ingredient = require('./Ingredients.js');

module.exports = {

  // Adds ingredient to db
  addIngredient: function(ingredient) {
    var newIngredient = new Ingredient({
      snippet: ingredient.snippet,
      link: ingredient.link,
    });
    return newIngredient.save();
  },

  // Returns db contents of ingredients
  getFridge: function(req, res) {
    Ingredient.find()
    .then(function(found) {
      res.send(found);
    })
  },

  // Removes ingredient from db
  removeFromFridge: function(ingredient) {
    return Ingredient.remove({_id: ingredient._id});
  }
}