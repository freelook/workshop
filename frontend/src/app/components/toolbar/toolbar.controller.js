(function () {
  'use strict';

  angular
    .module('frontend')
    .controller('ToolbarController', ToolbarController);

  /** @ngInject */
  function ToolbarController($mdSidenav) {
    var vm = this;

    vm.toggleLeftMenu = function () {
      $mdSidenav('left').toggle();
    };

  }
})();
