var appNavBar = angular.module("app.navBar", []);
appNavBar.directive("navBar", function() {
  return {
    restrict: "E",
    replace: true,
    transclude: true,
    scope: true,
    templateUrl: "/app/navbar/navbar.html",
    controller: "navBarCtrl",
  }});

appNavBar.controller('navBarCtrl', function($scope, $location) {
  $scope.redAlert = false;
  $scope.greenAlert = false;

  $scope.loginUser = function() {
    console.log($scope.username);
    console.log($scope.password);
    if($scope.username !== 'asdf' || $scope.password !== 'asdf') {
      $scope.redAlert = true;
    } else {
      $scope.greenAlert = true;
    }
  }
  $scope.removeRedAlert = function() {
    $scope.redAlert = false;
  }
  $scope.removeGreenAlert = function() {
    $scope.greenAlert = false;
  }
  $scope.doSomething = function() {
    console.log('doing something');
  }
  // non-ideal implementation
  $scope.isActive = function (viewLocation) {
     var active = (viewLocation === $location.path());
     return active;
  };
});
