angular.module('app', ['app.search', 'app.recipes', 'app.ingredients', 'app.navBar', 'app.services', 'app.redAlert', 'app.greenAlert', 'app.signUpSuccess' , 'app.signUpFailure', , 'app.logOutAlert', 'ngRoute', 'angularGrid'])
.config(function ($routeProvider, $httpProvider) {
  
  $httpProvider.defaults.headers.get = {'X-Mashape-Key': '4dGJ75wfGZmshHg96g2LjUoaqEsDp1cw7H3jsnG5dMs7RxDBa6'};

  // FUTURE IMPROVEMENTS
  // Add authentication gating between routes
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