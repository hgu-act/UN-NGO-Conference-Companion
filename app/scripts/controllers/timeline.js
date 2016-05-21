'use strict';

/**
 * @ngdoc function
 * @name ngoConferenceCompanionApp.controller:TimelineCtrl
 * @description
 * # TimelineCtrl
 * Controller of the ngoConferenceCompanionApp
 */
angular.module('ngoConferenceCompanionApp')
  .controller('TimelineCtrl', function ($scope, timeAgo) {
    $scope.toolbarTitle = 'Timeline';

    timeAgo.settings.allowFuture = true;

    $scope.nextEvent = {
      title: 'Lunch',
      type: 'lunch',
      startDate: '2016-05-31T12:00',
      endDate: '2016-05-31T13:30',
      duration: '90\'',
      place: '',
      imgSrc: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/lunch.png'
    };
    $scope.currentEvent = {
      title: 'Opening Session',
      type: 'opening',
      startDate: '2016-05-31T10:00',
      endDate: '2016-05-31T12:00',
      duration: '120\'',
      place: '300A+300B+300C',
      imgSrc: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/opening-session.png'
    };
  });
