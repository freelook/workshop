(function () {
  'use strict';

  describe('MainController', function () {
    var vm;

    beforeEach(module('frontend'));
    beforeEach(inject(function (_$controller_) {

      vm = _$controller_('MainController', {});

    }));

    it('should define vm', function () {
      expect(vm).toBeDefined();
    });

    it('should define menu', function () {
      expect(vm.menu).toBeDefined();
    });

  });
})();
