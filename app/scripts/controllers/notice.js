'use strict';

/**
 * @ngdoc function
 * @name ngoConferenceCompanionApp.controller:NoticeCtrl
 * @description
 * # NoticeCtrl
 * Controller of the ngoConferenceCompanionApp
 */
angular.module('ngoConferenceCompanionApp')
  .controller('NoticeCtrl', function () {
    var noticeVM = this;
    noticeVM.toolbarTitle = 'Home';
    noticeVM.cardImgTextStyle = {
      "color": "white",
      "padding": "16px"
    };

    noticeVM.currentEvent = {
      title: 'Opening Session',
      type: 'opening',
      startDate: '2016-05-31T10:00',
      endDate: '2016-05-31T12:00',
      duration: '120\'',
      place: '300A+300B+300C',
      backgroundStyle: {
        "background": "url('https://s3.ap-northeast-2.amazonaws.com/ngo-app/opening-session.png') center / cover",
        "height": "176px"
      }
    };

    noticeVM.nextEvent = {
      title: 'Lunch',
      type: 'lunch',
      startDate: '2016-05-31T12:00',
      endDate: '2016-05-31T13:30',
      duration: '90\'',
      place: 'Around HICO',
      backgroundStyle: {
        "background": "url('https://s3.ap-northeast-2.amazonaws.com/ngo-app/lunch.png') center / cover",
        "height": "176px"
      }
    };
  });
