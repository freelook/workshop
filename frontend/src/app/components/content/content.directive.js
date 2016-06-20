(function () {
  'use strict';

  angular
    .module('frontend')
    .directive('content', content);

  /** @ngInject */
  function content() {
    return {
      transclude: true,
      controller: 'ContentController',
      controllerAs: 'content',
      templateUrl: 'app/components/content/content.html'
    };
  }

})();
