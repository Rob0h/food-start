angular.module('app.ingredients', [])
.controller('IngredientsController', function($scope, $http) {
    
    $scope.findRecipes = function(query) {
    // disabling to limit query usage
/*    var key = window.F2F_API_KEY;
    var q = $scope.inputFood;
    $scope.recipes = [];
    return $http({
      method: 'GET', 
      dataType: 'json',
      url: 'https://community-food2fork.p.mashape.com/search?key=' + key + '&q=' + q,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
    })
    .then(function(res) {
      $scope.recipes = res.data.recipes;
    }, function(err) {
      console.log(err);
    });*/
    $scope.recipes = exampleData.recipes;
  }

  $scope.saveForLater = function(context) {
    console.log('clicked on', context.recipe);
    var recipe = {
      name: context.recipe.title,
      image_url: context.recipe.image_url,
      url: context.recipe.source_url,
    }
    return $http({
      method: 'POST',
      dataType: 'json',
      data: recipe,
      url: 'http://localhost:1337/addRecipe',
    })
    .then(function(res) {

    }, function(err) {
      console.log(err);
    });
  }

});
