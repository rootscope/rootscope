var app = angular.module("rootApp", []);

app.directive('scrollPosition', function($window) {
  return {
    scope: {
      scroll: '=scrollPosition'
    },
    link: function(scope, element, attrs) {
      var handler = function() {
        scope.scroll = $window.scrollY;
      }
      angular.element($window).on('scroll', scope.$apply.bind(scope, handler));
      handler();
    }
  };
});

app.controller("rootAppCtrl", function($scope){
  $scope.scroll = 0;
});
