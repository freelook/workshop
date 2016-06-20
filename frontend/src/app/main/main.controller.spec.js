(function () {
  'use strict';

  describe('MainController', function () {
    var vm, $http;

    $http = {
      get: jasmine.createSpy().and.returnValue({
        success: jasmine.createSpy()
      })
    };

    beforeEach(module('frontend'));
    beforeEach(inject(function (_$controller_) {

      vm = _$controller_('MainController', {
        $http: $http
      });

    }));

    it('should define vm', function () {
      expect(vm).toBeDefined();
    });

    it('should define menu', function () {
      expect(vm.menu).toBeDefined();
    });

    it('should get workshops', function () {
      expect($http.get).toHaveBeenCalled();
    });

  });
})();
