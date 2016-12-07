angular.module('app.ingredients', [])
.controller('IngredientsController', function($scope, $http, recipeFactory) {
  $scope.searchedIngredient = null;

  // Queries google image search for image of ingredient
  $scope.findIngredient = function() {
    var q = $scope.inputIngredient;
    var key = window.GS_API_KEY;
    return $http({
      method: 'GET',
      dataType: 'json',
      url: 'https://www.googleapis.com/customsearch/v1?cx=009407302250325958776:7xs2zpwdaho&imgSize=medium&key=' + key + '&q=' + q + '&searchType=image'
    })
    .then(function(res) {
      console.log(res);
      $scope.searchedIngredient = {
        snippet: $scope.inputIngredient,
        link: res.data.items[0].link,
      }
    })
  }

  // Returns db contents of ingredients
  $scope.getFridge = function() {
    return $http({
      method: 'GET',
      dataType: 'json',
      url: 'http://localhost:1337/getFridge',
    })
    .then(function(res) {
      $scope.fridge = res.data;
      console.log($scope.fridge);
    });
  }

  $scope.getFridge();

  // Adds ingredient to ingredient db
  $scope.addIngredient = function() {
    var newIngredient = {
      snippet: $scope.inputIngredient,
      link: $scope.searchedIngredient.link,
    }
    return $http({
      method: 'POST',
      dataType: 'json',
      url: 'http://localhost:1337/addToFridge',
      data: newIngredient,
    })
    .then(function(res) {
      $scope.getFridge();
    });
  }

  // Removes ingredient from ingredient db
  $scope.removeIngredient = function(context) {
    return $http({
      method: 'POST',
      dataType: 'json',
      url: 'http://localhost:1337/removeFromFridge',
      data: context.ingredient,
    })
    .then(function(res) {
      $scope.getFridge();
    }, function(err) {
      console.log(err);
    });
  }

  // Joins the available fridge ingredients together and queries F2F
  $scope.findFridgeRecipe = function() {
    var joinedFridgeString = '';
    $scope.fridge.forEach(function(ingredient, i) {
      if (i !== 0) {
        joinedFridgeString += ', ';
      }
      joinedFridgeString += ingredient.snippet;
    });
    recipeFactory.findRecipes(joinedFridgeString)
    .then(function(recipes) {
      $scope.recipes = recipes;
    })
  }

  // Saves recipe, similar to in search.js
  $scope.saveLater = function(context) {
    console.log('clicked on', context);
    var recipe = {
      title: context.recipe.title,
      f2f_url: context.recipe.f2f_url,
      image_url: context.recipe.image_url,
    }
    recipeFactory.saveLater(recipe);
  }
});