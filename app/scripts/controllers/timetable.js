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

    timetableVM.activeTab;
    timetableVM.mapper = mapper;
    timetableVM.timetables = timetableValue;
    timetableVM.toolbarTitle = 'Timetable';
    
    function today() {
      var today = new Date();
    }
  });
