'use strict';

describe('Service: workshopDetailValue', function () {

  // load the service's module
  beforeEach(module('ngoConferenceCompanionApp'));

  // instantiate service
  var workshopDetailValue;
  beforeEach(inject(function (_workshopDetailValue_) {
    workshopDetailValue = _workshopDetailValue_;
  }));

  it('should do something', function () {
    expect(!!workshopDetailValue).toBe(true);
  });

});
