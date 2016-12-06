angular.module('app.search', [])
.controller('SearchController', function($scope, $http) {

  $scope.findRecipes = function() {
    // disabling to limit query usage
/*    var key = window.F2F_API_KEY;
    var q = $scope.inputFood;
    var url = 'https://community-food2fork.p.mashape.com/search?key=' + key;
    if (q !== undefined) {
      url = url + '&q=' + q;
    }

    $scope.recipes = [];

    return $http({
      method: 'GET', 
      dataType: 'json',
      url: url,
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

  //fill front page with recommended
  //$scope.findRecipes();
  $scope.recipes = homeData.recipes;

  $scope.show = true;

  $scope.saveForLater = function(event, context) {
    $(event.target).parent().css('display', 'none');
    console.log('clicked on', context);
    console.log(context.element);
    var recipe = {
      title: context.recipe.title,
      f2f_url: context.recipe.f2f_url,
      image_url: context.recipe.image_url,
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
