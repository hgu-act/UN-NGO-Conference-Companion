'use strict';

/**
 * @ngdoc overview
 * @name ngoConferenceCompanionApp
 * @description
 * # ngoConferenceCompanionApp
 *
 * Main module of the application.
 */
angular
  .module('ngoConferenceCompanionApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'yaru22.angular-timeago'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'homeVM'
      })
      .when('/notice', {
        templateUrl: 'views/notice.html',
        controller: 'NoticeCtrl',
        controllerAs: 'noticeVM'
      })
      .when('/notice/:id', {
        templateUrl: 'views/noticedetail.html',
        controller: 'NoticeDetailCtrl',
        controllerAs: 'detailVM',
        resolve: {
          notice: function ($route, resource) {
            return resource.notice.get({
              id: $route.current.params.id
            }).$promise;
          }
        }
      })
      .when('/timetable', {
        templateUrl: 'views/timetable.html',
        controller: 'TimetableCtrl',
        controllerAs: 'timetableVM'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function ($mdThemingProvider) {
    var blueNgoMap = $mdThemingProvider.extendPalette('blue', {
      '500': '4F8FCC',
      '800': '193C6C'
    });
    $mdThemingProvider.definePalette('blue-ngo', blueNgoMap);
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-ngo', {
        'default': '800'
      })
      .accentPalette('amber')
      .warnPalette('red')
      .backgroundPalette('grey');
  })
  .config(function (timeAgoSettings) {
    var oneDay = 60*60*24;
    // timeAgoSettings.fullDateAfterSeconds = oneDay;
  });
