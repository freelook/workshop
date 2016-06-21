(function () {
  'use strict';

  angular
    .module('frontend')
    .directive('footer', footer);

  /** @ngInject */
  function footer() {
    return {
      controller: 'FooterController',
      controllerAs: 'footer',
      templateUrl: 'app/components/footer/footer.html'
    };
  }

})();
