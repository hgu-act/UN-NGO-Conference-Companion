'use strict';

/**
 * @ngdoc function
 * @name ngoConferenceCompanionApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the ngoConferenceCompanionApp
 */
angular.module('ngoConferenceCompanionApp')
  .controller('AppCtrl', function ($mdSidenav, $location, sideNavMenu) {
    var appVM = this;
    appVM.menu = sideNavMenu;
    appVM.backgroundColors = '::{background: \'blue-grey-50\'}';

    appVM.toggleSidenav = function (menuId) {
      $mdSidenav(menuId).toggle();
    };

    appVM.routeAndClose = function (menuId, url) {
      $mdSidenav(menuId).close();
      // $scope.toolbarTitle = title;
      $location.path(url);
    };
  });
