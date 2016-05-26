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
    'yaru22.angular-timeago',
    'ngtweet',
    'ezfb'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'homeVM'
      })
      .when('/notices', {
        templateUrl: 'views/notice.html',
        controller: 'NoticeCtrl',
        controllerAs: 'noticeVM'
      })
      .when('/notices/:id', {
        templateUrl: 'views/noticedetail.html',
        controller: 'NoticeDetailCtrl',
        controllerAs: 'detailVM',
        resolve: {
          noticeObj: function ($route, resource) {
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
      .when('/concept-note', {
        templateUrl: 'views/conceptnote.html',
        controller: 'ConceptNoteCtrl',
        controllerAs: 'conceptVM'
      })
      .when('/roundtables', {
        templateUrl: 'views/roundtable.html',
        controller: 'RoundtableCtrl',
        controllerAs: 'roundtableVM'
      })
      .when('/roundtables/:id', {
        templateUrl: 'views/roundtabledetail.html',
        controller: 'RoundtabledetailCtrl',
        controllerAs: 'roundtableDetailVM',
        resolve: {
          roundtableObj: function ($route, roundtableValue) {
            return roundtableValue.find(function (roundtable) {
              return roundtable.id == $route.current.params.id;
            });
          }
        }
      })
      .when('/workshops', {
        templateUrl: 'views/workshop.html',
        controller: 'WorkshopCtrl',
        controllerAs: 'workshopVM'
      })
      .when('/workshops/:id', {
        templateUrl: 'views/workshopdetail.html',
        controller: 'WorkshopdetailCtrl',
        controllerAs: 'workshopDetailVM',
        resolve: {
          workshopObj: function ($route, workshopDetailValue) {
            return workshopDetailValue.find(function (workshop) {
              return workshop.id == $route.current.params.id;
            });
          }
        }
      })
      .when('/socialize', {
        templateUrl: 'views/socialize.html',
        controller: 'SocializeCtrl',
        controllerAs: 'socializeVM'
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
  })
  .config(function (ezfbProvider) {
    ezfbProvider.setInitParams({
      appId: '1151504634917069',
      version: 'v2.6'
    })
  });
