(function () {
  'use strict';

  angular
    .module('frontend')
    .factory('workshops', function ($http, WORKSHOPS_URL) {

      function get() {
        return $http.get(WORKSHOPS_URL + 'frontend/src/assets/json/workshops.json')
      }

      return {
        get: get
      }
    })
    .constant('WORKSHOPS_URL', 'https://raw.githubusercontent.com/freelook/workshop/master/');

})();
