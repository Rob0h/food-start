var appGreenAlert = angular.module("app.greenAlert", []);
appGreenAlert.directive("greenAlert", function() {
  return {
    restrict: "E",
    replace: true,
    transclude: true,
    templateUrl: "/app/alert/greenAlert.html",
  }
});