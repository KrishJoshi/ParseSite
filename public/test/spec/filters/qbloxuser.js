'use strict';

describe('Filter: qbloxUser', function () {

  // load the filter's module
  beforeEach(module('tutrApp'));

  // initialize a new instance of the filter before each test
  var qbloxUser;
  beforeEach(inject(function ($filter) {
    qbloxUser = $filter('qbloxUser');
  }));

  it('should return the input prefixed with "qbloxUser filter:"', function () {
    var text = 'angularjs';
    expect(qbloxUser(text)).toBe('qbloxUser filter: ' + text);
  });

});
