angular.module('app', ['app.ingredients', 'ngRoute'])
.config(function ($routeProvider, $httpProvider) {
  
  $httpProvider.defaults.headers.get = {'X-Mashape-Key': '4dGJ75wfGZmshHg96g2LjUoaqEsDp1cw7H3jsnG5dMs7RxDBa6'};

  $routeProvider
    .when('/', {
      templateUrl: 'app/ingredients/ingredients.html',
      controller: 'IngredientsController',
    })
    .when('/recipes', {
      templateUrl: 'app/recipes/recipes.html',
      controller: 'RecipesController',
    });
});