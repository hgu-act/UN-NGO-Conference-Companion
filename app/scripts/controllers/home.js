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
  });
