(function () {
  'use strict';

  angular
    .module('frontend')
    .factory('sidenav', function ($location) {

      function _path(path, search) {
        return $location.path(path).search(search || {});
      }

      function main() {
        return _path('/');
      }

      function tag(tag) {
        return _path('/', {tag: tag});
      }

      function tagHref(tag) {
        return ['#', '?tag='].join('/') + tag;
      }

      function workshop(name) {
        return _path(['name', name].join('/'));
      }

      function workshopHref(name) {
        return ['#', 'name', name].join('/');
      }

      return {
        main: main,
        tag: tag,
        tagHref: tagHref,
        workshop: workshop,
        workshopHref: workshopHref
      }
    });

})();
