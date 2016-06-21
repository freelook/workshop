(function () {
  'use strict';

  describe('Workshops', function () {
    var workshops, $http, WORKSHOPS_URL;

    $http = {
      get: jasmine.createSpy()
    };

    beforeEach(function () {
      module('frontend');
      module(function ($provide) {
        $provide.value('$http', $http);
      });
    });

    beforeEach(inject(function (_workshops_, _WORKSHOPS_URL_) {
      workshops = _workshops_;
      WORKSHOPS_URL = _WORKSHOPS_URL_;
    }));

    it('should get workshops', function () {
      workshops.get();
      expect($http.get).toHaveBeenCalledWith(WORKSHOPS_URL + 'frontend/src/assets/json/workshops.json');
    });

    it('should get one workshop', function () {
      var name = 'name';
      workshops.one(name);
      expect($http.get).toHaveBeenCalledWith(WORKSHOPS_URL + 'frontend/src/assets/json/workshops/' + name + '.json');
    });
  });

})();
