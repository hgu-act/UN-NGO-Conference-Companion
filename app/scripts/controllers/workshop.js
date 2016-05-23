'use strict';

/**
 * @ngdoc function
 * @name ngoConferenceCompanionApp.controller:WorkshopCtrl
 * @description
 * # WorkshopCtrl
 * Controller of the ngoConferenceCompanionApp
 */
angular.module('ngoConferenceCompanionApp')
  .controller('WorkshopCtrl', function (workshopValue) {
    var workshopVM = this;

    workshopVM.toolbarTitle = 'Workshops';
    workshopVM.sessions = workshopValue;
  });
