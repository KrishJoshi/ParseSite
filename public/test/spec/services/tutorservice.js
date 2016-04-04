'use strict';

describe('Service: tutorService', function () {

  // load the service's module
  beforeEach(module('tutrApp'));

  // instantiate service
  var tutorService;
  beforeEach(inject(function (_tutorService_) {
    tutorService = _tutorService_;
  }));

  it('should do something', function () {
    expect(!!tutorService).toBe(true);
  });

});
