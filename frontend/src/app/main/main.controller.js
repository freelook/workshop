(function() {
  'use strict';

  angular
    .module('frontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($mdSidenav) {
    var vm = this;

    vm.toggleLeftMenu = function(){
      $mdSidenav('left').toggle();
    };
  }
})();
