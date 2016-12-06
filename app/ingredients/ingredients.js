angular.module('app.ingredients', [])
.controller('IngredientsController', function($scope, $http) {
  $scope.searchedIngredient = null;

  $scope.findIngredient = function() {
    var q = $scope.inputIngredient;
    return $http({
      method: 'GET',
      dataType: 'json',
      url: 'https://www.googleapis.com/customsearch/v1?cx=009407302250325958776:7xs2zpwdaho&imgSize=medium&key=AIzaSyCA-Jl3awY6NWedMUb6_Ey6DzRphlPtJjw&q=' + q + '&searchType=image'
    })
    .then(function(res) {
      console.log(res);
      $scope.searchedIngredient = res.data.items[0];
    })
  }

  $scope.getFridge = function() {
    return $http({
      method: 'GET',
      dataType: 'json',
      url: 'http://localhost:1337/getFridge',
    })
    .then(function(res) {
      $scope.fridge = res.data;
    });
  }

  $scope.getFridge();

  $scope.addIngredient = function() {
    var newIngredient = {
      snippet: $scope.searchedIngredient.snippet,
      link: $scope.searchedIngredient.link,
    }
    return $http({
      method: 'POST',
      dataType: 'json',
      url: 'http://localhost:1337/addToFridge',
      data: newIngredient,
    })
    .then(function(res) {
      console.log(res);
      $scope.getFridge();
    });
  }

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
});