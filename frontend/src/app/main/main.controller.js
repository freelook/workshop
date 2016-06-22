(function () {
  'use strict';

  angular
    .module('frontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($routeParams, workshops, sidenav, menu) {
    var vm = this;

    vm.tag = $routeParams.tag;

    function init() {
      workshops.get().success(function (workshops) {
        vm.workshops = workshops;
      });
    }

    vm.menu = menu;
    vm.clear = sidenav.main;
    vm.openTag = sidenav.tag;
    vm.openWorkshop = sidenav.workshop;

    init();

  }
})();
