'use strict';

describe('Service: tutor', function () {

  // load the service's module
  beforeEach(module('tutrApp'));

  // instantiate service
  var tutor;
  beforeEach(inject(function (_tutor_) {
    tutor = _tutor_;
  }));

  it('should do something', function () {
    expect(!!tutor).toBe(true);
  });

});
