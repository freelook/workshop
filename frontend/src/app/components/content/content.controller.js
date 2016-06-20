(function () {
  'use strict';

  angular
    .module('frontend')
    .controller('ContentController', ContentController);

  /** @ngInject */
  function ContentController(menu) {
    var vm = this;

    vm.menu = menu;

  }
})();
