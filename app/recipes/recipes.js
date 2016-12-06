angular.module('app.recipes', [])
.controller('RecipesController', function($scope, $http) {

  $scope.getAllRecipes = function() {
    $http({
      method: 'GET',
      dataType: 'json',
      url: 'http://localhost:1337/getRecipes'
    }).then(function(res) {
      console.log('got all recipes');
      $scope.storedRecipes = res.data;
    }, function(err) {
      console.log(err);
    });
  }

  $scope.getAllRecipes();

  $scope.removeFromList = function(context) {
    var self = this;
    console.log('removing', context.recipe);
    $http({
      method: 'POST',
      dataType: 'json',
      data: context.recipe,
      url: 'http://localhost:1337/removeRecipe',
    }).then(function(res) {
      $scope.getAllRecipes();
    }, function(err) {
      console.log(err);
    })
  }
});