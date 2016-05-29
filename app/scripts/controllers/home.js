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
    var today = new Date();
    var now = today.getTime();

    homeVM.toolbarTitle = 'Home';
    homeVM.cardImgTextStyle = {
      'color': 'white',
      'padding': '16px'
    };
    homeVM.currentEvent = getCurrentEvent();
    homeVM.currentEventTwo = getCurrentEventTwo(homeVM.currentEvent);
    homeVM.currentEventThree = getCurrentEventThree(homeVM.currentEvent, homeVM.currentEventTwo);
    homeVM.nextEvent = getNextEvent();
    homeVM.list = resource.notice.query();
    homeVM.mapper = mapper;

    homeVM.currentDuration = getDuration(homeVM.currentEvent);
    homeVM.currentTwoDuration = getDuration(homeVM.currentEventTwo);
    homeVM.currentThreeDuration = getDuration(homeVM.currentEventThree);
    homeVM.nextDuration = getDuration(homeVM.nextEvent);

    function getCurrentEvent() {
      return events.find(function (event) {
        return now >= Date.parse(event.startDate) && now <= Date.parse(event.endDate);
      });
    }

    function getCurrentEventTwo(eventOne) {
      return events.find(function (event) {
        return now >= Date.parse(event.startDate) && now <= Date.parse(event.endDate) && !isEqual(event, eventOne);
      });
    }

    function getCurrentEventThree(eventOne, eventTwo) {
      return events.find(function (event) {
        return now >= Date.parse(event.startDate) && now <= Date.parse(event.endDate) && !isEqual(event, eventOne) && !isEqual(event, eventTwo);
      });
    }

    function getNextEvent() {
      return events.find(function (event) {
        return now < Date.parse(event.startDate) && now < Date.parse(event.endDate);
      });
    }

    function getDuration(event) {
      if (event !== undefined)
        return (Date.parse(event.endDate) - Date.parse(event.startDate)) / 1000 / 60;
    }

    function isEqual(event1, event2) {
      return event1.id === event2.id;
    }
  });
