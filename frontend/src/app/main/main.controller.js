(function () {
  'use strict';

  angular
    .module('frontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(workshops, menu) {
    var vm = this;

    function init() {
      workshops.get().success(function (workshops) {
        vm.workshops = workshops;
      });
    }

    vm.menu = menu;

    init();

  }
})();
