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

    function init() {
      workshops.one($routeParams.name).success(function (item) {
        vm.item = item;
      });
    }

    init();

  }
})();
