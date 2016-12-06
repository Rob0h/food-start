angular.module('app.services', [])
.factory('recipeFactory', function($http) {

  var findRecipes = function(query) {
/*    var key = window.F2F_API_KEY;
    var q = query;
    var url = 'https://community-food2fork.p.mashape.com/search?key=' + key;
    if (q !== undefined) {
      url = url + '&q=' + q;
    }

    var recipes = [];

    return $http({
      method: 'GET', 
      dataType: 'json',
      url: url,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
    })
    .then(function(res) {
      return res.data.recipes;
    }, function(err) {
      console.log(err);
    });*/
    $scope.recipes = exampleData.recipes;
  }

  return {
    findRecipes: findRecipes
  }
})