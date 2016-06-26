(function () {
  'use strict';

  angular
    .module('frontend')
    .factory('index', IndexFactory)
    .constant('INDEX', {
      title: 'javascript full stack | мастерская',
      description: 'мастерская javascript full stack',
      keywords: 'mongo,express,angular,node'
    });

  /** @ngInject */
  function IndexFactory($rootScope, INDEX) {

    function init(_index) {
      var index = _index || {};
      index.title = index.title ? [index.title, INDEX.description].join(' | ') : INDEX.title;
      index.description = index.description ? index.description : INDEX.description;
      index.keywords = index.keywords ? index.keywords : INDEX.keywords;
      $rootScope.index = index;
    }

    return {
      init: init
    };

  }
})();
