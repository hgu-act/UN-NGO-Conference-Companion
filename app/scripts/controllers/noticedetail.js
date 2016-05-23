'use strict';

/**
 * @ngdoc function
 * @name ngoConferenceCompanionApp.controller:NoticedetailCtrl
 * @description
 * # NoticedetailCtrl
 * Controller of the ngoConferenceCompanionApp
 */
angular.module('ngoConferenceCompanionApp')
  .controller('NoticeDetailCtrl', function (noticeObj, $location, timeAgo) {
    var detailVM = this;

    detailVM.goBack = goBack;
    detailVM.notice = noticeObj;
    detailVM.toolbarTitle = 'Notice';

    function goBack() {
      $location.path('/notice');
    }
  });
