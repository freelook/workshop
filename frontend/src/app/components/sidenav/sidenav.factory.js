(function () {
  'use strict';

  angular
    .module('frontend')
    .factory('sidenav', function ($location) {

      var HASH = '#!';

      function _path(path, search) {
        return $location.path(path).search(search || {});
      }

      function main() {
        return _path('/');
      }

      function mainHref() {
        return HASH + '/';
      }

      function tag(tag) {
        return _path('/', {tag: tag});
      }

      function tagHref(tag) {
        return [HASH, '?tag='].join('/') + tag;
      }

      function workshop(name) {
        return _path(['name', name].join('/'));
      }

      function workshopHref(name) {
        return [HASH, 'name', name].join('/');
      }

      return {
        main: main,
        mainHref: mainHref,
        tag: tag,
        tagHref: tagHref,
        workshop: workshop,
        workshopHref: workshopHref
      }
    });

})();
