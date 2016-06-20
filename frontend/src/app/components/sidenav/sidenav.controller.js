(function () {
  'use strict';

  angular
    .module('frontend')
    .controller('SidenavController', SidenavController);

  /** @ngInject */
  function SidenavController(menu) {
    var vm = this;

    vm.menu = menu;

  }
})();
