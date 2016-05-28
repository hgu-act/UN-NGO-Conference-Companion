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
      icon: 'dashboard'
    },
    {
      url: 'notices',
      title: 'Notices',
      icon: 'announcement'
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
      url: 'roundtables',
      title: 'Roundtables',
      icon: 'event_seat'
    },
    {
      url: 'workshops/0',
      title: 'Workshops',
      icon: 'build'
    },
    {
      url: 'exhibits',
      title: 'Exhibits',
      icon: 'local_activity'
    },
    {
      url: 'floor-plan',
      title: 'Floor Plan',
      icon: 'layers'
    },
    {
      url: 'socialize',
      title: '#UNNGO2016',
      icon: 'timeline'
    }
  ]);
