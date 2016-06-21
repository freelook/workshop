(function () {
  'use strict';

  angular
    .module('frontend')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/name/:name', {
        templateUrl: 'app/workshop/workshop.html',
        controller: 'WorkshopController',
        controllerAs: 'workshop'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
