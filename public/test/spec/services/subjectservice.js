'use strict';

describe('Service: subjectService', function () {

  // load the service's module
  beforeEach(module('tutrApp'));

  // instantiate service
  var subjectService;
  beforeEach(inject(function (_subjectService_) {
    subjectService = _subjectService_;
  }));

  it('should do something', function () {
    expect(!!subjectService).toBe(true);
  });

});
