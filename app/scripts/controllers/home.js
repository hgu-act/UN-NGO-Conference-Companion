'use strict';

/**
 * @ngdoc function
 * @name ngoConferenceCompanionApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the ngoConferenceCompanionApp
 */
angular.module('ngoConferenceCompanionApp')
  .controller('HomeCtrl', function (resource, $log, timeAgo) {
    var homeVM = this;

    homeVM.toolbarTitle = 'Home';
    homeVM.cardImgTextStyle = {
      'color': 'white',
      'padding': '16px'
    };
    homeVM.currentEvent = {
      title: 'Opening Session',
      type: 'opening',
      startDate: '2016-05-31T10:00',
      endDate: '2016-05-31T12:00',
      duration: '120\'',
      place: '300A+300B+300C',
      backgroundStyle: {
        'background': 'url("https://s3.ap-northeast-2.amazonaws.com/ngo-app/opening-session.jpg") center / cover',
        'height': '176px'
      }
    };
    homeVM.nextEvent = {
      title: 'Lunch',
      type: 'lunch',
      startDate: '2016-05-31T12:00',
      endDate: '2016-05-31T13:30',
      duration: '90\'',
      place: 'Around HICO',
      backgroundStyle: {
        'background': 'url("https://s3.ap-northeast-2.amazonaws.com/ngo-app/lunch.jpg") center / cover',
        'height': '176px'
      }
    };
    homeVM.list = resource.notice.query();
  });
