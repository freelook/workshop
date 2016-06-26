(function () {
  'use strict';

  angular
    .module('frontend')
    .directive('sidenav', sidenav);

  /** @ngInject */
  function sidenav() {
    return {
      restrict: 'E',
      controller: 'SidenavController',
      controllerAs: 'sidenav',
      templateUrl: 'app/components/sidenav/sidenav.html'
    };
  }

})();
