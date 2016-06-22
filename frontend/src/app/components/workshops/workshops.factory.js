(function () {
  'use strict';

  angular
    .module('frontend')
    .factory('workshops', function ($http, WORKSHOPS_URL) {

      function _call(end) {
        return $http.get(WORKSHOPS_URL + end, {params: {timestamp: (new Date()).getTime().toString()}});
      }

      function get() {
        return _call('frontend/src/assets/json/workshops.json');
      }

      function one(name) {
        return _call('frontend/src/assets/json/workshops/' + name + '.json');
      }

      return {
        get: get,
        one: one
      }
    })
    .constant('WORKSHOPS_URL', 'https://raw.githubusercontent.com/freelook/workshop/master/');

})();
