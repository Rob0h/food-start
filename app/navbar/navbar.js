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
  $scope.signUpAlert = false;
  $scope.signUpFailure = false;
  $scope.loggedIn = false;
  $scope.logOutAlert = false;

  $scope.loginUser = function() {
    var user = {
      username: $scope.username,
      password: $scope.password,
    }
    return $http({
      method: 'POST',
      dataType: 'json',
      data: user,
      url: 'http://localhost:1337/login'
    }).then(function(res) {
      if (res.data) {
        console.log('user logged in successfully');
        $scope.greenAlert = true;
        $scope.loggedIn = true;
      } else {
        $scope.redAlert = true;
      }
    })
  }

  $scope.logOut = function() {
    $scope.loggedIn = false;
    $scope.logOutAlert = true;
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
      url: 'http://localhost:1337/signUp'
    }).then(function(res) {
      if (res.data) {
        console.log('user saved successfully');
        $scope.signUpAlert = true;
      } else {
        $scope.signUpFailure = true;
      }
    })
  }

  // non-ideal implementation
  $scope.removeRedAlert = function() {
    $scope.redAlert = false;
  }
  $scope.removeGreenAlert = function() {
    $scope.greenAlert = false;
  }
  $scope.removeSuccessAlert = function() {
    $scope.signUpAlert = false;
  }
  $scope.removeFailureAlert = function() {
    $scope.signUpFailure = false;
  }
  $scope.removeLogOutAlert = function() {
    $scope.logOutAlert = false;
  }

  // non-ideal implementation
  $scope.isActive = function (viewLocation) {
     var active = (viewLocation === $location.path());
     return active;
  };
});
