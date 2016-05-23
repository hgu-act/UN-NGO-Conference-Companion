'use strict';

describe('Service: workshopValue', function () {

  // load the service's module
  beforeEach(module('ngoConferenceCompanionApp'));

  // instantiate service
  var workshopValue;
  beforeEach(inject(function (_workshopValue_) {
    workshopValue = _workshopValue_;
  }));

  it('should do something', function () {
    expect(!!workshopValue).toBe(true);
  });

});
