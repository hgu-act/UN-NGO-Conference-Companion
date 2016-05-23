'use strict';

describe('Controller: ConceptnoteCtrl', function () {

  // load the controller's module
  beforeEach(module('ngoConferenceCompanionApp'));

  var ConceptnoteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConceptnoteCtrl = $controller('ConceptnoteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ConceptnoteCtrl.awesomeThings.length).toBe(3);
  });
});
