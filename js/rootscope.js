var app = angular.module("rootApp", []);

app.directive('scrollBlur', function($window){
  return {
    scope: {
      opacity: '=scrollBlur'
    },
    link: function(scope, element, attrs) {
      var handler = function() {
        scope.opacity = $window.scrollY / 420;
        console.log(scope.opacity);
      }
      angular.element($window).on('scroll', scope.$apply.bind(scope, handler));
      handler();
    }
  };
});

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

app.controller("rootAppCtrl", function($scope, $window){
  $scope.scroll = 0;
  $scope.opacity = 0;
  $scope.margin = 0;
});
