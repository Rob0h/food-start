angular.module('app.search', [])
.controller('SearchController', function($scope, $http, recipeFactory) {

  // Uses recipeFactory to query F2F for recipes
  $scope.findRecipes = function() {
    recipeFactory.findRecipes($scope.inputFood)
    .then(function(recipes) {
      $scope.recipes = recipes;
    });
  }

  // Uses recipeFactory to save recipe to db
  $scope.saveLater = function(context) {
    console.log('clicked on', context);
    var recipe = {
      title: context.recipe.title,
      f2f_url: context.recipe.f2f_url,
      image_url: context.recipe.image_url,
    }
    recipeFactory.saveLater(recipe);
  }

  // Fill with live data when no data has been searched for
  // MUST BE AFTER FUNCTIONS - not hoisting to the top
  if (!$scope.recipes) {
    $scope.findRecipes();
  }

});
