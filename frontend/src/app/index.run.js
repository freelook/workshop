(function () {
  'use strict';

  angular
    .module('frontend')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $window) {

    $log.debug('run: workshop');

    // production redirect
    if ($window.location.host === 'freelook.github.io') {
      $window.location.href = 'http://workshop.freelook.info/';
    }

  }

})();
