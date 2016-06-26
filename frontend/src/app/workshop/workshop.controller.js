(function () {
  'use strict';

  angular
    .module('frontend')
    .controller('WorkshopController', WorkshopController);

  /** @ngInject */
  function WorkshopController($sce, $routeParams, workshops, sidenav) {

    var vm = this;

    vm.trust = $sce.trustAsResourceUrl;
    vm.tag = sidenav.tag;
    vm.open = sidenav.workshop;

    function init() {
      workshops.one($routeParams.name).success(function (item) {
        vm.item = item;
      });
    }

    init();

  }
})();
