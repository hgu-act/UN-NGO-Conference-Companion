'use strict';

/**
 * @ngdoc function
 * @name ngoConferenceCompanionApp.controller:RoundtableCtrl
 * @description
 * # RoundtableCtrl
 * Controller of the ngoConferenceCompanionApp
 */
angular.module('ngoConferenceCompanionApp')
  .controller('RoundtableCtrl', function (roundtableValue) {
    var roundtableVM = this;

    roundtableVM.toolbarTitle = 'Roundtables';
    roundtableVM.lists = roundtableValue;
  });
