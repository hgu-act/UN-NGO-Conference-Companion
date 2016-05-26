'use strict';

/**
 * @ngdoc function
 * @name ngoConferenceCompanionApp.controller:SocializeCtrl
 * @description
 * # SocializeCtrl
 * Controller of the ngoConferenceCompanionApp
 */
angular.module('ngoConferenceCompanionApp')
  .controller('SocializeCtrl', function () {
    var socializeVM = this;

    socializeVM.toolbarTitle = '#UNNGO2016';
    socializeVM.twitterOptions = {
      "chrome": "nofooter noheader",
      "aria-polite": "assertive",
      "width": "500",
      "height": "500"
    }
  });
