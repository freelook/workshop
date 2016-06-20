(function () {
  'use strict';

  describe('controllers', function () {
    var vm, $mdSidenav;

    $mdSidenav = jasmine.createSpy().and.returnValue({
      toggle: jasmine.createSpy()
    });

    beforeEach(module('frontend'));
    beforeEach(inject(function (_$controller_) {

      vm = _$controller_('MainController', {
        $mdSidenav: $mdSidenav
      });

    }));

    it('should toggle left menu', function () {
      vm.toggleLeftMenu();
      expect($mdSidenav).toHaveBeenCalledWith('left');
    });

  });
})();
