(function () {
  'use strict';

  angular
    .module('frontend')
    .controller('SidenavController', SidenavController);

  /** @ngInject */
  function SidenavController(menu, sidenav) {
    var vm = this;

    vm.menu = menu;
    vm.main = sidenav.main;
    vm.tag = sidenav.tag;

  }
})();
