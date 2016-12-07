var appSignUpSuccess = angular.module("app.signUpSuccess", []);
appSignUpSuccess.directive("signUpSuccess", function() {
  return {
    restrict: "E",
    replace: true,
    transclude: true,
    templateUrl: "/app/alert/signUpSuccess.html",
  }
});