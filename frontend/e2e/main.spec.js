'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should list more than 1 awesome workshop', function () {
    expect(page.workshopEls.count()).toBeGreaterThan(1);
  });

});
