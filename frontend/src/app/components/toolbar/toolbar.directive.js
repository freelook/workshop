(function () {
  'use strict';

  angular
    .module('frontend')
    .directive('toolbar', toolbar);

  /** @ngInject */
  function toolbar() {
    return {
      restrict: 'E',
      controller: 'ToolbarController',
      controllerAs: 'toolbar',
      templateUrl: 'app/components/toolbar/toolbar.html'
    };
  }

})();
