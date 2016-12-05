angular.module('app.ingredients', [])
.controller('IngredientsController', function($scope, $http) {
  
  delete $http.defaults.headers.common['X-Requested-With'];
  $scope.findRecipes = function(query) {
    // disabling to limit query usage
/*    var key = window.F2F_API_KEY;
    var q = $scope.inputFood;
    return $http({
      method: 'GET', 
      dataType: 'json',
      url: 'https://community-food2fork.p.mashape.com/search?key=' + key + '&q=' + q,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
    })
    .then(function(res) {
      $scope.recipes = res.recipes;
    }, function(err) {
      console.log(err);*/
    $scope.recipes = exampleData.recipes;
  }

  $scope.saveForLater = function(context) {
    console.log('saving', context.recipe.title);
    console.log('with url', context.recipe.source_url);
  }
});
