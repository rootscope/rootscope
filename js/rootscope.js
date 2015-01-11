var app = angular.module("rootApp", []);

app.directive('scrollBlur', function($window){
  return {
    scope: {
      opacity: '=scrollBlur'
    },
    link: function(scope, element, attrs) {
      var handler = function() {
        scope.opacity = $window.scrollY / 420;
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

var ui = (function($){
  var $e = {
    window: $(window),
    //splash_bg: $('.img-src'),
    splash_title: $('#splash-title')
  };
  var laxSplash = function(o){
    //$e.splash_bg.css('margin-top', -0.07*o + 'px');
    $e.splash_title.css('margin-top', -0.84*o + 'px');
    $e.splash_title.css('margin-left', -0.19*o + 'px');
    console.log('wtf');
  };
  var init = function(){
    $e.window.scroll(function(e){
      laxSplash(window.pageYOffset);
    });
  }
  return{
    init: init
  };
})(jQuery);

$(document).ready(function(){
  ui.init();
});

