var Recipe = require('./recipes.js');

module.exports = {

  addRecipe: function(recipe) {
    var newRecipe = new Recipe({
      name: recipe.name,
      url: recipe.url,
    });
    newRecipe.save()
    .then(function(res) {
      console.log('New Recipe has been saved!', res);
    });
  },

  getRecipes: function(req, res) {
    console.log('YOOOOO');
    
  }
}