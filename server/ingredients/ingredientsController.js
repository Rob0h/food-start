var Ingredient = require('./Ingredients.js');

module.exports = {

  addIngredient: function(ingredient) {
    var newIngredient = new Ingredient({
      snippet: ingredient.snippet,
      link: ingredient.link,
    });
    return newIngredient.save();
  },
  getFridge: function(req, res) {
    Ingredient.find()
    .then(function(found) {
      res.send(found);
    })
  },
  removeFromFridge: function(ingredient) {
    return Ingredient.remove({_id: ingredient._id});
  }
}