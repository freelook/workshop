(function () {
  'use strict';

  angular
    .module('frontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($location, workshops, menu) {
    var vm = this;

    function init() {
      workshops.get().success(function (workshops) {
        vm.workshops = workshops;
      });
    }

    vm.menu = menu;
    vm.openWorkshop = function(name){
      $location.path(['name', name].join('/'));
    };

    init();

  }
})();
