var Recipe = require('./recipes.js');

module.exports = {

  // Adds recipe to db
  addRecipe: function(recipe) {
    var newRecipe = new Recipe({
      title: recipe.title,
      f2f_url: recipe.f2f_url,
      image_url: recipe.image_url,
    });
    return newRecipe.save()
    .then(function(res) {
      console.log('New Recipe has been saved!');
    });
  },

  // Returns all recipes from db
  getRecipes: function(req, res) {
    Recipe.find()
    .then(function(found) {
      res.send(found);
    });
  },

  // Removes recipe from db
  removeRecipe: function(recipe) {
    return Recipe.remove({_id: recipe._id});
  }
}