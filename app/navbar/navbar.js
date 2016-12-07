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

  // FUTURE IMPROVEMENT- logged in view does not persist when page is changed
  // Sets all alerts to false (no-view)
  $scope.redAlert = false;
  $scope.greenAlert = false;
  $scope.signUpAlert = false;
  $scope.signUpFailure = false;
  $scope.loggedIn = false;
  $scope.logOutAlert = false;

  // Logs in user
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

  // FUTURE IMPROVEMENT - implement token add/remove system 
  // Currently sets interface to allow log in
  $scope.logOut = function() {
    $scope.loggedIn = false;
    $scope.logOutAlert = true;
  }

  // FUTURE IMPROVEMENT - hash password client side to increase security
  // Registers new user and prevents users with the same username to register
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

  // non-ideal implementation - could be improved with further research into ng-if
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
