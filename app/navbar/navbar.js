angular.module("app.navBar", [])
  .directive("navBar", function() {
  return {
    restrict: "E",
    replace: true,
    transclude: true,
    templateUrl: "/app/navbar/navbar.html",
  }});
;