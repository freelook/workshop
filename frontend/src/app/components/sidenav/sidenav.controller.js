(function () {
  'use strict';

  angular
    .module('frontend')
    .controller('SidenavController', SidenavController);

  /** @ngInject */
  function SidenavController($location, menu) {
    var vm = this;

    vm.menu = menu;
    vm.main = function () {
      $location.path('/');
    };

  }
})();
