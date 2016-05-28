'use strict';

describe('Controller: ExhibitsCtrl', function () {

  // load the controller's module
  beforeEach(module('ngoConferenceCompanionApp'));

  var ExhibitsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExhibitsCtrl = $controller('ExhibitsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExhibitsCtrl.awesomeThings.length).toBe(3);
  });
});
