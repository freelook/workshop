(function () {
  'use strict';

  describe('SidenavController', function () {
    var vm, $location;

    $location = {
      path: jasmine.createSpy()
    };

    beforeEach(module('frontend'));
    beforeEach(inject(function (_$controller_) {

      vm = _$controller_('SidenavController', {
        $location: $location
      });

    }));

    it('should have menu', function () {
      expect(vm.menu).toBeDefined();
    });

    it('should open main', function () {
      vm.main();
      expect($location.path).toHaveBeenCalledWith('/');
    });

  });
})();
