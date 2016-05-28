'use strict';

/**
 * @ngdoc function
 * @name ngoConferenceCompanionApp.controller:ExhibitsCtrl
 * @description
 * # ExhibitsCtrl
 * Controller of the ngoConferenceCompanionApp
 */
angular.module('ngoConferenceCompanionApp')
  .controller('ExhibitsCtrl', function () {
    var exhibitsVM = this;
    exhibitsVM.toolbarTitle = 'Exhibits';

    angular.element(document).ready(function () {
      angular.element("#lightgallery").lightGallery();
    });
  });
