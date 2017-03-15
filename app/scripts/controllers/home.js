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
    var events = timetableValue[0].schedules.concat(timetableValue[1].schedules, timetableValue[2].schedules);
    var today = new Date('1970-01-01');
    var now = today.getTime();
    homeVM.currentEvents = [];

    homeVM.toolbarTitle = 'Home';
    homeVM.cardImgTextStyle = {
      'color': 'white',
      'padding': '16px'
    };
    // homeVM.currentEvent = getCurrentEvent();
    // homeVM.currentEventTwo = getCurrentEventTwo(homeVM.currentEvent);
    // homeVM.currentEventThree = getCurrentEventThree(homeVM.currentEvent, homeVM.currentEventTwo);
    homeVM.nextEvents = [];
    homeVM.list = resource.notice.query();
    homeVM.mapper = mapper;

    // homeVM.currentDuration = getDuration(homeVM.currentEvent);
    // homeVM.currentTwoDuration = getDuration(homeVM.currentEventTwo);
    // homeVM.currentThreeDuration = getDuration(homeVM.currentEventThree);
    // homeVM.nextDuration = getDuration(homeVM.nextEvent);

    angular.forEach(events, function (event) {
      if (now >= Date.parse(event.startDate) && now <= Date.parse(event.endDate))
        this.push(event)
    }, homeVM.currentEvents);

    angular.forEach(events, function (event) {
      if (now < Date.parse(event.startDate) && now < Date.parse(event.endDate))
        this.push(event)
    }, homeVM.nextEvents);

    // function getDuration(event) {
    //   if (event !== undefined)
    //     return (Date.parse(event.endDate) - Date.parse(event.startDate)) / 1000 / 60;
    // }
  });
