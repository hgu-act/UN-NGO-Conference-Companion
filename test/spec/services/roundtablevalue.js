'use strict';

describe('Service: roundtableValue', function () {

  // load the service's module
  beforeEach(module('ngoConferenceCompanionApp'));

  // instantiate service
  var roundtableValue;
  beforeEach(inject(function (_roundtableValue_) {
    roundtableValue = _roundtableValue_;
  }));

  it('should do something', function () {
    expect(!!roundtableValue).toBe(true);
  });

});
