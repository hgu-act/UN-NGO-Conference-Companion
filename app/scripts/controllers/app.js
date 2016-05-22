'use strict';

/**
 * @ngdoc function
 * @name ngoConferenceCompanionApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the ngoConferenceCompanionApp
 */
angular.module('ngoConferenceCompanionApp')
  .controller('AppCtrl', function ($scope, $mdSidenav, $location, sideNavMenu) {
    $scope.menu = sideNavMenu;
    $scope.toolbarTitle = 'Home';

    $scope.toggleSidenav = function (menuId) {
      $mdSidenav(menuId).toggle();
    };

    $scope.routeAndClose = function (menuId, url) {
      $mdSidenav(menuId).close();
      // $scope.toolbarTitle = title;
      $location.path(url);
    };
  });
