'use strict';

/**
 * @ngdoc function
 * @name ngoConferenceCompanionApp.controller:TimetableCtrl
 * @description
 * # TimetableCtrl
 * Controller of the ngoConferenceCompanionApp
 */
angular.module('ngoConferenceCompanionApp')
  .controller('TimetableCtrl', function (timetableValue) {
    var timetableVM = this;

    timetableVM.day1 = timetableValue.day1;
    timetableVM.day2 = timetableValue.day2;
    timetableVM.day3 = timetableValue.day3;
    timetableVM.toolbarTitle = 'Timetable';
  });
