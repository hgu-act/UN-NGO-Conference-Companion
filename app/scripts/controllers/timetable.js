'use strict';

/**
 * @ngdoc function
 * @name ngoConferenceCompanionApp.controller:TimetableCtrl
 * @description
 * # TimetableCtrl
 * Controller of the ngoConferenceCompanionApp
 */
angular.module('ngoConferenceCompanionApp')
  .controller('TimetableCtrl', function (timetableValue, mapper) {
    var timetableVM = this;

    timetableVM.activeTab = today();
    timetableVM.mapper = mapper;
    timetableVM.timetables = timetableValue;
    timetableVM.toolbarTitle = '일정';

    function today() {
      var today = new Date();
      if (today.getDate() === 30) {
        return 0;
      } else if (today.getDate() === 31) {
        return 1;
      } else if (today.getDate() === 1) {
        return 2;
      } else {
        return 0;
      }
    }
  });
