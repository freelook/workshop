(function () {
  'use strict';

  angular
    .module('frontend')
    .value('menu', {
      processes: ['tdd', 'bdd', 'agile', 'e2e'],
      frontend: ['angular', 'html', 'css', 'material'],
      backend: ['node', 'express', 'mean'],
      mobile: ['cordova', 'phonegap'],
      tools: ['git', 'webstorm', 'nmp', 'bower', 'gulp']
    });

})();
