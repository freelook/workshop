(function () {
  'use strict';

  angular
    .module('frontend')
    .config(config);

  /** @ngInject */
  function config($windowProvider, $locationProvider, $logProvider, toastrConfig) {

    var $window = $windowProvider.$get();
    if (/_escaped_fragment_/.test($window.location.search)) {
      $window.location.href = [$window.location.origin, '/#!', $window.location.search.split('_escaped_fragment_=').slice(1)[0].split('&')[0]].join('');
    }

    $locationProvider.hashPrefix('!');

    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
