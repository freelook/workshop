(function () {
  'use strict';

  angular
    .module('frontend')
    .controller('WorkshopController', WorkshopController);

  /** @ngInject */
  function WorkshopController($sce, $routeParams, index, workshops, sidenav) {

    var vm = this;

    vm.trust = $sce.trustAsResourceUrl;
    vm.tag = sidenav.tag;
    vm.tagHref = sidenav.tagHref;
    vm.open = sidenav.workshop;

    function init() {
      workshops.one($routeParams.name)
        .success(function (item) {
          index.init({
            title: item.title,
            description: item.description,
            keywords: (item.tags || []).join(',')
          });
          vm.item = item;
        })
        .error(function () {
          index.init();
        });
    }

    init();

  }
})();
