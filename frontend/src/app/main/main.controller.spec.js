(function () {
  'use strict';

  describe('MainController', function () {
    var vm, workshops, $location;

    $location = {
      path: jasmine.createSpy()
    };

    workshops = {
      get: jasmine.createSpy().and.returnValue({
        success: jasmine.createSpy()
      })
    };

    beforeEach(module('frontend'));
    beforeEach(inject(function (_$controller_) {

      vm = _$controller_('MainController', {
        $location: $location,
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

    it('should open workshop', function () {
      var name = 'name';
      vm.openWorkshop(name);
      expect($location.path).toHaveBeenCalledWith('name/' + name);
    });

  });
})();
