(function () {
  'use strict';

  /**
   * @todo Complete the test
   * This example is not perfect.
   * The `link` function is not tested.
   * (malarkey usage, addClass, $watch, $destroy)
   */
  describe('directive malarkey', function () {
    var vm;
    var el;

    beforeEach(module('frontend'));
    beforeEach(inject(function ($compile, $rootScope) {
      el = angular.element('<acme-malarkey values="[\'Poney\', \'Monkey\']"></acme-malarkey>');
      $compile(el)($rootScope.$new());
      $rootScope.$digest();
      vm = el.isolateScope();
    }));

    it('should be compiled', function () {
      expect(el.html()).not.toEqual(null);
    });

    it('should have isolate scope object with instanciate values', function () {
      expect(vm).toEqual(jasmine.any(Object));
      expect(vm.values).toEqual(jasmine.any(Array));
      expect(vm.values.length).toEqual(2);
    });
  });
})();
