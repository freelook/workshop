(function () {
  'use strict';

  angular
    .module('frontend')
    .value('menu', {
      frontend: ['angular'],
      backend: ['node'],
      mobile: ['cordova']
    });

})();
