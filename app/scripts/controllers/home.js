'use strict';

/**
 * @ngdoc function
 * @name ngoConferenceCompanionApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the ngoConferenceCompanionApp
 */
angular.module('ngoConferenceCompanionApp')
  .controller('HomeCtrl', function (resource, $log, timeAgo, mapper, timetableValue) {
    var homeVM = this;

    homeVM.toolbarTitle = 'Home';
    homeVM.cardImgTextStyle = {
      'color': 'white',
      'padding': '16px'
    };
    homeVM.currentEvent = timetableValue[0].schedules[0];
    homeVM.nextEvent = timetableValue[0].schedules[1];
    homeVM.list = resource.notice.query();
    homeVM.mapper = mapper;

    var currentDiff = Date.parse(homeVM.currentEvent.endDate) - Date.parse(homeVM.currentEvent.startDate);
    var nextDiff = Date.parse(homeVM.nextEvent.endDate) - Date.parse(homeVM.nextEvent.startDate);

    homeVM.currentDuration = currentDiff / 1000 / 60;
    homeVM.nextDuration = nextDiff / 1000 / 60;
  });
