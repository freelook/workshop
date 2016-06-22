(function () {
  'use strict';

  describe('SidenavFactory', function () {
    var sidenav, $location;

    $location = {
      path: jasmine.createSpy().and.returnValue({
        search: jasmine.createSpy()
      })
    };

    beforeEach(function () {
      module('frontend');
      module(function ($provide) {
        $provide.value('$location', $location);
      });
    });

    beforeEach(inject(function (_sidenav_) {
      sidenav = _sidenav_;
    }));

    it('should open main', function () {
      sidenav.main();
      expect($location.path).toHaveBeenCalledWith('/');
    });

    it('should open tag', function () {
      sidenav.tag();
      expect($location.path).toHaveBeenCalledWith('/');
    });

    it('should open workshop', function () {
      var name = 'name';
      sidenav.workshop(name);
      expect($location.path).toHaveBeenCalledWith('name/' + name);
    });

  });
})();
