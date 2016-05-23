'use strict';

describe('Controller: RoundtableCtrl', function () {

  // load the controller's module
  beforeEach(module('ngoConferenceCompanionApp'));

  var RoundtableCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RoundtableCtrl = $controller('RoundtableCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RoundtableCtrl.awesomeThings.length).toBe(3);
  });
});
