'use strict';

describe('Controller: TutorsCtrl', function () {

  // load the controller's module
  beforeEach(module('tutrApp'));

  var TutorsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TutorsCtrl = $controller('TutorsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TutorsCtrl.awesomeThings.length).toBe(3);
  });
});
