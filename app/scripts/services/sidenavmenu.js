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
      title: '홈',
      icon: 'dashboard'
    },
    {
      url: 'timetable',
      title: '일정',
      icon: 'list'
    },
    {
      url: 'workshops/0',
      title: '트랙',
      icon: 'build'
    }
    // {
    //   url: 'concept-note',
    //   title: 'Concept Note',
    //   icon: 'event_note'
    // },
    // {
    //   url: 'roundtables',
    //   title: 'Insider Talk',
    //   icon: 'event_seat'
    // },
    // {
    //   url: 'exhibits',
    //   title: 'Exhibits',
    //   icon: 'local_activity'
    // },
    // {
    //   url: 'floor-plan',
    //   title: 'Floor Plan',
    //   icon: 'layers'
    // }
    // },
    // {
    //   url: 'socialize',
    //   title: '#UNNGO2016',
    //   icon: 'timeline'
    // }
  ]);
