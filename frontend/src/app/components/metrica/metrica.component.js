(function () {
  'use strict';

  angular
    .module('frontend')
    .factory('metrica', function ($window, $rootScope) {
      return {
        init: function () {
          var route = $rootScope.$on('$routeChangeSuccess', function () {
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
        controller: 'MetricaController',
        controllerAs: 'metrica',
        templateUrl: 'app/components/metrica/metrica.html'
      };
    });

})();
