var appRedAlert = angular.module("app.redAlert", []);
appRedAlert.directive("redAlert", function() {
  return {
    restrict: "E",
    replace: true,
    transclude: true,
    templateUrl: "/app/alert/redAlert.html",
  }
});

