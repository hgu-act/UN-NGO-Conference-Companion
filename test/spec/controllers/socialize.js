'use strict';

describe('Controller: SocializeCtrl', function () {

  // load the controller's module
  beforeEach(module('ngoConferenceCompanionApp'));

  var SocializeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SocializeCtrl = $controller('SocializeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SocializeCtrl.awesomeThings.length).toBe(3);
  });
});
