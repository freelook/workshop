(function () {
  'use strict';

  describe('WorkshopController', function () {
    var vm, name, workshops, $routeParams;

    name = 'name';
    workshops = {
      one: jasmine.createSpy().and.returnValue({
        success: jasmine.createSpy()
      })
    };

    $routeParams = {
      name: name
    };

    beforeEach(module('frontend'));
    beforeEach(inject(function (_$controller_) {

      vm = _$controller_('WorkshopController', {
        $routeParams: $routeParams,
        workshops: workshops
      });

    }));

    it('should define vm', function () {
      expect(vm).toBeDefined();
    });

    it('should call one', function () {
      expect(workshops.one).toHaveBeenCalledWith(name);
    });

  });
})();
