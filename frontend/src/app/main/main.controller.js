(function () {
  'use strict';

  angular
    .module('frontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http, menu) {
    var vm = this;

    function init() {
      var url = 'https://raw.githubusercontent.com/freelook/workshop/dev/frontend/src/assets/json/workshops.json';
      $http.get(url).success(function (res) {
        vm.workshops = res.workshops;
      });
    }

    vm.menu = menu;

    init();
  }
})();
