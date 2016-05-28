'use strict';

/**
 * @ngdoc function
 * @name ngoConferenceCompanionApp.controller:FloorplanCtrl
 * @description
 * # FloorplanCtrl
 * Controller of the ngoConferenceCompanionApp
 */
angular.module('ngoConferenceCompanionApp')
  .controller('FloorplanCtrl', function () {
    var floorVM = this;

    floorVM.toolbarTitle = 'Floor Plan';

    angular.element(document).ready(function () {
      angular.element("#lightgallery-1").lightGallery();
      angular.element("#lightgallery-2").lightGallery();
      angular.element("#lightgallery-3").lightGallery();
    });
  });
