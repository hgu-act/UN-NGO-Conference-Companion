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
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/timeline', {
        templateUrl: 'views/timeline.html',
        controller: 'TimelineCtrl',
        controllerAs: 'timeline'
      })
      .when('/schedule', {
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleCtrl',
        controllerAs: 'schedule'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.definePalette('blue-ngo', {
      '50': 'E3F2FD',
      '100': 'BBDEFB',
      '200': '90CAF9',
      '300': '64B5F6',
      '400': '42A5F5',
      '500': '4F8FCC',
      '600': '1E88E5',
      '700': '1976D2',
      '800': '193C6C',
      '900': '0D47A1',
      'A100': '82B1FF',
      'A200': '448AFF',
      'A400': '2979FF',
      'A700': '2962FF',
      'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                          // on this palette should be dark or light
      'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
        '200', '300', '400', 'A100'],
      'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });
    $mdThemingProvider.theme('ngo')
      .primaryPalette('blue-ngo')
      .accentPalette('amber')
      .warnPalette('red')
      .backgroundPalette('grey');
  })
;
