var root = angular.module("rootApp", [])

root.directive("scrollPos", function($window){
  return {
    scope: {
      scroll: '=scrollPos'
    },
    link: function(scope, element, attrs) {
      var windowEl = angular.element($window);
      var handler = function(){
        scope.scroll = windowEl.scrollTop();
      }
      windowEl.on('scroll', scope.$apply.bind(scope, handler));
      handler();
    }
  };
});

root.controller("rootAppCtrl", function($scope, $window){
  $scope.scroll = 0;
});

/*
$(window).scroll(function(e) {
  opacity = ($(window).scrollTop() / 170);
  $(".blur").css("opacity", opacity);
});
*/