(function () {
  'use strict';

  angular
    .module('frontend')
    .value('menu', {
      processes: ['tdd', 'bdd', 'e2e', 'agile', 'scrum'],
      frontend: ['angular', 'html', 'css', 'material'],
      backend: ['node', 'express', 'mean'],
      mobile: ['cordova', 'phonegap'],
      tools: ['git', 'webstorm', 'npm', 'bower', 'gulp']
    });

})();
