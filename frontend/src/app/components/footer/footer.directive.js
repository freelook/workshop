(function () {
  'use strict';

  angular
    .module('frontend')
    .directive('footer', footer);

  /** @ngInject */
  function footer() {
    return {
      restrict: 'E',
      controller: 'FooterController',
      controllerAs: 'footer',
      templateUrl: 'app/components/footer/footer.html'
    };
  }

})();
