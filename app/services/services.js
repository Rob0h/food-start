angular.module('app.services', [])
.factory('recipeFactory', function($http) {

  var findRecipes = function(query) {
    var key = window.F2F_API_KEY;
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
    });
  };

  var saveLater = function(recipe) {
    return $http({
      method: 'POST',
      dataType: 'json',
      data: recipe,
      url: 'http://localhost:1337/addRecipe',
    })
    .then(function(res) {
      console.log('getting here');
      $scope.show = !$scope.show;
    }, function(err) {
      console.log(err);
    });
  };

  return {
    findRecipes: findRecipes,
    saveLater: saveLater
  }
})