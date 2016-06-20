(function () {
  'use strict';

  describe('MainController', function () {
    var vm, workshops;

    workshops = {
      get: jasmine.createSpy().and.returnValue({
        success: jasmine.createSpy()
      })
    };

    beforeEach(module('frontend'));
    beforeEach(inject(function (_$controller_) {

      vm = _$controller_('MainController', {
        workshops: workshops
      });

    }));

    it('should define vm', function () {
      expect(vm).toBeDefined();
    });

    it('should define menu', function () {
      expect(vm.menu).toBeDefined();
    });

    it('should get workshops', function () {
      expect(workshops.get).toHaveBeenCalled();
    });

  });
})();
