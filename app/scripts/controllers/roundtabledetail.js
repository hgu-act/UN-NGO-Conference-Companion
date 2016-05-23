'use strict';

/**
 * @ngdoc function
 * @name ngoConferenceCompanionApp.controller:RoundtabledetailCtrl
 * @description
 * # RoundtabledetailCtrl
 * Controller of the ngoConferenceCompanionApp
 */
angular.module('ngoConferenceCompanionApp')
  .controller('RoundtabledetailCtrl', function (roundtableObj, $location) {
    var roundtableDetailVM = this;

    roundtableDetailVM.goBack = goBack;
    roundtableDetailVM.files = roundtableObj.files;
    roundtableDetailVM.roundtableObj = roundtableObj;
    roundtableDetailVM.toolbarTitle = roundtableDetailVM.roundtableObj.title;
    
    function goBack() {
      $location.path('/roundtables');
    }
  });
