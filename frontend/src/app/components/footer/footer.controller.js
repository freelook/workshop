(function () {
  'use strict';

  angular
    .module('frontend')
    .controller('FooterController', FooterController);

  /** @ngInject */
  function FooterController() {
    var vm = this;

    vm.link = 'http://about.freelook.info/';

  }
})();
