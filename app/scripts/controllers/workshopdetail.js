'use strict';

/**
 * @ngdoc function
 * @name ngoConferenceCompanionApp.controller:WorkshopdetailCtrl
 * @description
 * # WorkshopdetailCtrl
 * Controller of the ngoConferenceCompanionApp
 */
angular.module('ngoConferenceCompanionApp')
  .controller('WorkshopdetailCtrl', function (workshopObj, $location, sessionId, mapper) {
    var workshopDetailVM = this;

    workshopDetailVM.goBack = goBack;
    workshopDetailVM.files = workshopObj.files;
    workshopDetailVM.workshopObj = workshopObj;
    workshopDetailVM.toolbarTitle = 'Workshop Info';
    workshopDetailVM.mapper = mapper;

    function goBack() {
      $location.path('/workshops/' + sessionId);
    }
  });
