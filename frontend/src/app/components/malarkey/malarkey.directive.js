(function () {
  'use strict';

  angular
    .module('frontend')
    .directive('acmeMalarkey', acmeMalarkey);

  /** @ngInject */
  function acmeMalarkey(malarkey) {
    var directive = {
      restrict: 'E',
      scope: {
        values: '='
      },
      template: '',
      link: linkFunc
    };

    return directive;

    function linkFunc(scope, el) {

      var typist = malarkey(el[0], {
        typeSpeed: 50,
        deleteSpeed: 50,
        pauseDelay: 3000,
        loop: true,
        postfix: ''
      });

      el.addClass('acme-malarkey');

      angular.forEach(scope.values, function (value) {
        typist.type(value).pause().delete();
      });
    }

  }

})();
