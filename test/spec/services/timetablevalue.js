'use strict';

describe('Service: timetableValue', function () {

  // load the service's module
  beforeEach(module('ngoConferenceCompanionApp'));

  // instantiate service
  var timetableValue;
  beforeEach(inject(function (_timetableValue_) {
    timetableValue = _timetableValue_;
  }));

  it('should do something', function () {
    expect(!!timetableValue).toBe(true);
  });

});
