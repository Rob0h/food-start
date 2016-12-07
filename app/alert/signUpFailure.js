var appSignUpFailure = angular.module("app.signUpFailure", []);
appSignUpFailure.directive("signUpFailure", function() {
  return {
    restrict: "E",
    replace: true,
    transclude: true,
    templateUrl: "/app/alert/signUpFailure.html",
  }
});