'use strict';

/**
 * @ngdoc function
 * @name ngoConferenceCompanionApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the ngoConferenceCompanionApp
 */
angular.module('ngoConferenceCompanionApp')
  .controller('AppCtrl', function ($scope, $mdSidenav, sideNavMenu) {
    $scope.menu = sideNavMenu;

    $scope.toggleSidenav = function (menuId) {
      $mdSidenav(menuId).toggle();
    };
  });
