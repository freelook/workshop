(function () {
  'use strict';

  angular
    .module('frontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($routeParams, index, workshops, sidenav, menu) {
    var vm = this;

    vm.tag = $routeParams.tag;

    function init() {
      index.init();
      workshops.get().success(function (workshops) {
        vm.workshops = workshops;
      });
    }

    vm.menu = menu;
    vm.clear = sidenav.main;
    vm.openTag = sidenav.tag;
    vm.tagHref = sidenav.tagHref;
    vm.openWorkshop = sidenav.workshop;
    vm.workshopHref = sidenav.workshopHref;

    init();

  }
})();
