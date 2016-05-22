'use strict';

/**
 * @ngdoc function
 * @name ngoConferenceCompanionApp.controller:NoticeCtrl
 * @description
 * # NoticeCtrl
 * Controller of the ngoConferenceCompanionApp
 */
angular.module('ngoConferenceCompanionApp')
  .controller('NoticeCtrl', function (resource, $log, timeAgo) {
    var noticeVM = this;

    noticeVM.toolbarTitle = 'Notice';
    noticeVM.list = resource.notice.query();
  });
