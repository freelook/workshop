(function () {
  'use strict';

  angular
    .module('frontend')
    .factory('metrica', function ($window, $rootScope, $location) {
      return {
        init: function () {
          (function (i, s, o, g, r, a, m) {
            i.GoogleAnalyticsObject = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments);
              };
            i[r].l = 1 * new Date();
            a = s.createElement(o);
            m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
          })($window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

          $window.ga('create', 'UA-80064844-1', 'auto');
          var route = $rootScope.$on('$routeChangeSuccess', function () {
            if ($window.ga) {
              $window.ga('send', 'pageview', {page: decodeURIComponent($location.url())});
            }
            $window.$.get('https://mc.yandex.ru/watch/38127630');
          });
          return route;
        }
      };
    })
    .controller('MetricaController', function ($window) {
      var vm = this;
      vm.open = function () {
        $window.open('https://metrika.yandex.com/stat/?id=38127630', '_blank');
      };
    })
    .directive('metrica', function () {
      return {
        restrict: 'E',
        controller: 'MetricaController',
        controllerAs: 'metrica',
        templateUrl: 'app/components/metrica/metrica.html'
      };
    });

})();
