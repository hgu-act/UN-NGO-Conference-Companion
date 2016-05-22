'use strict';

/**
 * @ngdoc service
 * @name ngoConferenceCompanionApp.sideNavMenu
 * @description
 * # sideNavMenu
 * Value in the ngoConferenceCompanionApp.
 */
angular.module('ngoConferenceCompanionApp')
  .value('sideNavMenu', [
    {
      url: 'home',
      title: 'Home',
      icon: 'home'
    },
    {
      url: 'timetable',
      title: 'Timetable',
      icon: 'list'
    },
    {
      url: 'concept-note',
      title: 'Concept Note',
      icon: 'event_note'
    },
    {
      url: 'roundtable',
      title: 'Roundtable',
      icon: 'event_seat'
    },
    {
      url: 'workshop',
      title: 'Workshop',
      icon: 'build'
    },
    {
      url: 'exhibits',
      title: 'Exhibits',
      icon: 'local_activity'
    },
    {
      url: 'visit-korea',
      title: 'Visit Korea ™',
      icon: 'map'
    }
  ]);
