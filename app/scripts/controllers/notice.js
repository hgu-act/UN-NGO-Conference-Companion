'use strict';

/**
 * @ngdoc function
 * @name ngoConferenceCompanionApp.controller:NoticeCtrl
 * @description
 * # NoticeCtrl
 * Controller of the ngoConferenceCompanionApp
 */
angular.module('ngoConferenceCompanionApp')
  .controller('NoticeCtrl', function (notices, $log, timeAgo) {
    var noticeVM = this;

    noticeVM.toolbarTitle = 'Notices';
    noticeVM.list = notices;

    noticeVM.selected = noticeVM.list[0];
  });
