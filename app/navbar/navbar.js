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

appNavBar.controller('navBarCtrl', function($scope, $location, $http) {
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

  $scope.signUpUser = function() {
    // password being saved in plain text
    var newUser = {
      username: $scope.username,
      password: $scope.password,
    }
    return $http({
      method: 'POST',
      dataType: 'json',
      data: newUser,
      url: 'http://localhost:1337/login'
    }).then(function(res) {
      if (res.status === 200) {
        console.log('user saved successfully');
      }
    })
  }

  $scope.removeRedAlert = function() {
    $scope.redAlert = false;
  }
  $scope.removeGreenAlert = function() {
    $scope.greenAlert = false;
  }

  // non-ideal implementation
  $scope.isActive = function (viewLocation) {
     var active = (viewLocation === $location.path());
     return active;
  };
});
