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
      url: '',
      title: 'Timeline',
      icon: 'timeline'
    },
    {
      url: 'schedule',
      title: 'Schedule',
      icon: 'list'
    },
    {
      url: '#transportation',
      title: 'Transportation',
      icon: 'directions_bus'
    },
    {
      url: '#accommodation',
      title: 'Accommodation',
      icon: 'hotel'
    },
    {
      url: '#tourism',
      title: 'Tourism',
      icon: 'map'
    },
    {
      url: '#floor-plans',
      title: 'Floor Plans',
      icon: 'layers'
    },
    {
      url: '#visit-korea',
      title: 'Visit Korea ™',
      icon: 'link'
    },
    {
      url: '#1330-korea-travel-hotline',
      title: '1330 Korea Travel Hotline',
      icon: 'link'
    }
  ]);
