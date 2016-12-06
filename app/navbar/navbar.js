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

appNavBar.controller('navBarCtrl', function($scope) {
  $scope.redAlert = false;
  $scope.greenAlert = false;

  $scope.login = function() {
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
});



//???????????????????????????????
/*appNavBar.directive('bsActiveLink', ['$location', function ($location) {
  return {
    restrict: 'A', //use as attribute 
    replace: false,
    link: function (scope, elem) {
        //after the route has changed
        scope.$on("$routeChangeSuccess", function () {
            var hrefs = ['/#' + $location.path(),
                         '#' + $location.path(), //html5: false
                         $location.path()]; //html5: true
            angular.forEach(elem.find('a'), function (a) {
                a = angular.element(a);
                if (-1 !== hrefs.indexOf(a.attr('href'))) {
                    a.parent().addClass('active');
                } else {
                    a.parent().removeClass('active');   
                };
            });     
        });
    }
  }
}]);
*/