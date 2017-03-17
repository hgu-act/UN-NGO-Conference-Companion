'use strict';

/**
 * @ngdoc function
 * @name ngoConferenceCompanionApp.controller:WorkshopCtrl
 * @description
 * # WorkshopCtrl
 * Controller of the ngoConferenceCompanionApp
 */
angular.module('ngoConferenceCompanionApp')
  .controller('WorkshopCtrl', function (workshopValue, activeTab) {
    var workshopVM = this;

    workshopVM.activeTab = activeTab;
    // workshopVM.toolbarTitle = 'Workshops';
    workshopVM.toolbarTitle = '트랙';
    workshopVM.sessions = workshopValue;
  });
