var Recipe = require('./recipes.js');

module.exports = {

  addRecipe: function(recipe) {
    var newRecipe = new Recipe({
      title: recipe.title,
      f2f_url: recipe.f2f_url,
      image_url: recipe.image_url,
    });
    newRecipe.save()
    .then(function(res) {
      console.log('New Recipe has been saved!');
    });
  },

  getRecipes: function(req, res) {
    Recipe.find()
    .then(function(found) {
      console.log(found);
      res.send(found);
    });
  },

  removeRecipe: function(recipe) {
    return Recipe.remove({_id: recipe._id});
  }
}