var logOutAlert = angular.module("app.logOutAlert", []);
logOutAlert.directive("logOutAlert", function() {
  return {
    restrict: "E",
    replace: true,
    transclude: true,
    templateUrl: "/app/alert/logOutAlert.html",
  }
});