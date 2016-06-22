(function () {
  'use strict';

  describe('SidenavController', function () {
    var vm, sidenav;

    sidenav = {
      main: jasmine.createSpy(),
      tag: jasmine.createSpy()
    };

    beforeEach(module('frontend'));
    beforeEach(inject(function (_$controller_) {

      vm = _$controller_('SidenavController', {
        sidenav: sidenav
      });

    }));

    it('should have menu', function () {
      expect(vm.menu).toBeDefined();
    });

    it('should open main', function () {
      vm.main();
      expect(sidenav.main).toHaveBeenCalled();
    });

    it('should open tag', function () {
      vm.tag();
      expect(sidenav.tag).toHaveBeenCalled();
    });

  });
})();
