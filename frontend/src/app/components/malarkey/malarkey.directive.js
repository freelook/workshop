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

    function loop(values, typist) {
      angular.forEach(values, function (value) {
        if (angular.isArray(value)) {
          loop(value.sort(function () {
            return 0.5 - Math.random();
          }), typist);
        } else {
          typist.type(value).pause().delete();
        }
      });
    }

    function linkFunc(scope, el) {

      var values = scope.values,
        isLoop = !angular.isString(values),
        typist = malarkey(el[0], {
          typeSpeed: 50,
          deleteSpeed: 50,
          pauseDelay: 3000,
          loop: isLoop,
          postfix: ''
        });

      el.addClass('acme-malarkey');

      if (isLoop) {
        loop(values, typist);
      } else {
        typist.type(scope.values).pause();
      }
    }

  }

})();
