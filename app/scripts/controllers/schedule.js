'use strict';

/**
 * @ngdoc function
 * @name ngoConferenceCompanionApp.controller:ScheduleCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the ngoConferenceCompanionApp
 */
angular.module('ngoConferenceCompanionApp')
  .controller('ScheduleCtrl', function ($scope) {
    $scope.toolbarTitle = 'Schedule';
    $scope.scheduleDay1 = [
      {
        id: 1,
        type: '',
        icon: 'record_voice_over',
        title: 'Opening Session',
        startDate: '10:00',
        endDate: '12:00',
        place: '300A+300B+300C',
        color: '#2196F3'
      },
      {
        id: 2,
        type: '',
        icon: 'local_dining',
        title: 'Lunch',
        startDate: '12:00',
        endDate: '13:30',
        place: 'Around HICO',
        color: '#F44336'
      },
      {
        id: 3,
        type: '',
        icon: 'event_seat',
        title: 'Special Roundtable',
        startDate: '13:30',
        endDate: '15:00',
        place: '300A+300B+300C',
        color: '#9C27B0'
      },
      {
        id: 4,
        type: '',
        icon: 'free_breakfast',
        title: 'Break',
        startDate: '15:00',
        endDate: '15:15',
        place: '',
        color: '#A1887F'
      },
      {
        id: 5,
        type: '',
        icon: 'event_seat',
        title: 'Roundtable(1)',
        startDate: '15:15',
        endDate: '16:45',
        place: '300A+300B',
        color: '#9C27B0'
      },
      {
        id: 6,
        type: '',
        icon: 'account_balance',
        title: 'Townhall Meeting(1)',
        startDate: '15:15',
        endDate: '16:45',
        place: '300C',
        color: '#009688'
      },
      {
        id: 7,
        type: '',
        icon: 'free_breakfast',
        title: 'Break',
        startDate: '16:45',
        endDate: '17:15',
        place: '',
        color: '#A1887F'
      },
      {
        id: 8,
        type: '',
        icon: 'build',
        title: 'Workshops(1)',
        startDate: '17:15',
        endDate: '18:30',
        place: '101 ~ 106, 201 ~ 205, 300C',
        color: '#EF6C00'
      }
    ];
    $scope.scheduleDay2 = [
      {
        id: 1,
        type: '',
        icon: 'record_voice_over',
        title: 'Opening Session',
        startDate: '10:00',
        endDate: '12:00',
        place: '300A+300B+300C',
        color: '#2196F3'
      },
      {
        id: 2,
        type: '',
        icon: 'local_dining',
        title: 'Lunch',
        startDate: '12:00',
        endDate: '13:30',
        place: 'Around HICO',
        color: '#F44336'
      },
      {
        id: 3,
        type: '',
        icon: 'event_seat',
        title: 'Special Roundtable',
        startDate: '13:30',
        endDate: '15:00',
        place: '300A+300B+300C',
        color: '#9C27B0'
      },
      {
        id: 4,
        type: '',
        icon: 'free_breakfast',
        title: 'Break',
        startDate: '15:00',
        endDate: '15:15',
        place: '',
        color: '#A1887F'
      },
      {
        id: 5,
        type: '',
        icon: 'event_seat',
        title: 'Roundtable(1)',
        startDate: '15:15',
        endDate: '16:45',
        place: '300A+300B',
        color: '#9C27B0'
      },
      {
        id: 6,
        type: '',
        icon: 'account_balance',
        title: 'Townhall Meeting(1)',
        startDate: '15:15',
        endDate: '16:45',
        place: '300C',
        color: '#009688'
      },
      {
        id: 7,
        type: '',
        icon: 'free_breakfast',
        title: 'Break',
        startDate: '16:45',
        endDate: '17:15',
        place: '',
        color: '#A1887F'
      },
      {
        id: 8,
        type: '',
        icon: 'build',
        title: 'Workshops(1)',
        startDate: '17:15',
        endDate: '18:30',
        place: '101 ~ 106, 201 ~ 205, 300C',
        color: '#EF6C00'
      }
    ];
    $scope.scheduleDay3 = [
      {
        id: 1,
        type: '',
        icon: 'record_voice_over',
        title: 'Opening Session',
        startDate: '10:00',
        endDate: '12:00',
        place: '300A+300B+300C',
        color: '#2196F3'
      },
      {
        id: 2,
        type: '',
        icon: 'local_dining',
        title: 'Lunch',
        startDate: '12:00',
        endDate: '13:30',
        place: 'Around HICO',
        color: '#F44336'
      },
      {
        id: 3,
        type: '',
        icon: 'event_seat',
        title: 'Special Roundtable',
        startDate: '13:30',
        endDate: '15:00',
        place: '300A+300B+300C',
        color: '#9C27B0'
      },
      {
        id: 4,
        type: '',
        icon: 'free_breakfast',
        title: 'Break',
        startDate: '15:00',
        endDate: '15:15',
        place: '',
        color: '#A1887F'
      },
      {
        id: 5,
        type: '',
        icon: 'event_seat',
        title: 'Roundtable(1)',
        startDate: '15:15',
        endDate: '16:45',
        place: '300A+300B',
        color: '#9C27B0'
      },
      {
        id: 6,
        type: '',
        icon: 'account_balance',
        title: 'Townhall Meeting(1)',
        startDate: '15:15',
        endDate: '16:45',
        place: '300C',
        color: '#009688'
      },
      {
        id: 7,
        type: '',
        icon: 'free_breakfast',
        title: 'Break',
        startDate: '16:45',
        endDate: '17:15',
        place: '',
        color: '#A1887F'
      },
      {
        id: 8,
        type: '',
        icon: 'build',
        title: 'Workshops(1)',
        startDate: '17:15',
        endDate: '18:30',
        place: '101 ~ 106, 201 ~ 205, 300C',
        color: '#EF6C00'
      }
    ];
  });
