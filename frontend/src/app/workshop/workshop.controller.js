(function () {
  'use strict';

  angular
    .module('frontend')
    .controller('WorkshopController', WorkshopController);

  /** @ngInject */
  function WorkshopController($routeParams, workshops) {

    function init() {
      workshops.one($routeParams.name);
    }

    init();

  }
})();
