angular.module('app', ['app.search', 'app.recipes', 'app.ingredients', 'app.navBar', 'app.services', 'ngRoute', 'angularGrid'])
.config(function ($routeProvider, $httpProvider) {
  
  $httpProvider.defaults.headers.get = {'X-Mashape-Key': '4dGJ75wfGZmshHg96g2LjUoaqEsDp1cw7H3jsnG5dMs7RxDBa6'};

  $routeProvider
    .when('/', {
      templateUrl: 'app/search/search.html',
      controller: 'SearchController',
    })
    .when('/recipes', {
      templateUrl: 'app/recipes/recipes.html',
      controller: 'RecipesController',
    })
    .when('/ingredients', {
      templateUrl: 'app/ingredients/ingredients.html',
      controller: 'IngredientsController',
    })
    .when('/search', {
      templateUrl: 'app/search/search.html',
      controller: 'SearchController',
    });
});