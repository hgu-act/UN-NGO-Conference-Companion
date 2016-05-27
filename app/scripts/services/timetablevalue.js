'use strict';

/**
 * @ngdoc service
 * @name ngoConferenceCompanionApp.timetableValue
 * @description
 * # timetableValue
 * Value in the ngoConferenceCompanionApp.
 */
angular.module('ngoConferenceCompanionApp')
  .value('timetableValue',[
    {
      title: '05.30',
      schedules: [
        {
          id: 1,
          type: 'caucus',
          title: 'Youth Caucus',
          startDate: '2016-05-30T08:30',
          endDate: '2016-05-30T09:45',
          place: '203'
        },
        {
          id: 2,
          type: 'opening',
          title: 'Opening Session',
          startDate: '2016-05-30T10:00',
          endDate: '2016-05-30T12:00',
          place: '300A\uFF65B'
        },
        {
          id: 3,
          type: 'lunch',
          title: 'Lunch',
          startDate: '2016-05-30T12:00',
          endDate: '2016-05-30T13:30',
          place: '2\uFF653F Meeting rooms and lobby'
        },
        {
          id: 4,
          type: 'roundtable',
          title: 'Roundtable 1',
          startDate: '2016-05-30T13:30',
          endDate: '2016-05-30T15:00',
          place: '300A\uFF65B'
        },
        {
          id: 5,
          type: 'roundtable',
          title: 'Roundtable 2',
          startDate: '2016-05-30T15:15',
          endDate: '2016-05-30T16:45',
          place: '300A\uFF65B'
        },
        {
          id: 6,
          type: 'townhall',
          title: 'Townhall Meeting 1',
          startDate: '2016-05-30T15:15',
          endDate: '2016-05-30T16:45',
          place: '205'
        },
        {
          id: 7,
          type: 'workshop',
          title: 'Workshop 1',
          startDate: '2016-05-30T17:30',
          endDate: '2016-05-30T18:45',
          place: '101 ~ 104, 106, 201 ~ 206, 300A\uFF65B'
        }
      ]
    },
    {
      title: '05.31',
      schedules: [
        {
          id: 1,
          type: 'caucus',
          title: 'Youth Caucus',
          startDate: '2016-05-31T07:30',
          endDate: '2016-05-31T08:45',
          place: '205'
        },
        {
          id: 2,
          type: 'workshop',
          title: 'Workshop 2',
          startDate: '2016-05-31T09:00',
          endDate: '2016-05-31T10:15',
          place: '101 ~ 104, 106, 201 ~ 206, 300A\uFF65B'
        },
        {
          id: 3,
          type: 'roundtable',
          title: 'Roundtable 3',
          startDate: '2016-05-31T15:15',
          endDate: '2016-05-31T16:45',
          place: '300A\uFF65B'
        },
        {
          id: 4,
          type: 'lunch',
          title: 'Lunch',
          startDate: '2016-05-31T12:00',
          endDate: '2016-05-31T13:45',
          place: '2\uFF653F Meeting rooms and lobby'
        },
        {
          id: 5,
          type: 'mentoring',
          title: 'Intergenerational Mentoring Event',
          startDate: '2016-05-31T12:00',
          endDate: '2016-05-31T13:35',
          place: '101'
        },
        {
          id: 6,
          type: 'roundtable',
          title: 'Roundtable 4',
          startDate: '2016-05-31T13:45',
          endDate: '2016-05-31T15:15',
          place: '300A\uFF65B'
        },
        {
          id: 7,
          type: 'townhall',
          title: 'Townhall Meeting 2',
          startDate: '2016-05-31T13:00',
          endDate: '2016-05-31T15:00',
          place: '205'
        },
        {
          id: 8,
          type: 'workshop',
          title: 'Workshop 3',
          startDate: '2016-05-31T15:45',
          endDate: '2016-05-31T17:00',
          place: '101 ~ 104, 106, 201 ~ 206, 300A\uFF65B'
        },
        {
          id: 9,
          type: 'roundtable',
          title: 'Special Roundtable',
          startDate: '2016-05-31T17:15',
          endDate: '2016-05-31T18:45',
          place: '300A\uFF65B'
        },
        {
          id: 10,
          type: 'reception',
          title: 'Reception',
          startDate: '2016-05-31T19:00',
          endDate: '2016-05-31T20:30',
          place: '2\uFF653F Meeting rooms and lobby'
        }
      ]
    },
    {
      title: '06.01',
      schedules: [
        {
          id: 1,
          type: 'caucus',
          title: 'Youth Caucus',
          startDate: '2016-06-01T07:30',
          endDate: '2016-06-01T08:45',
          place: '205'
        },
        {
          id: 2,
          type: 'workshop',
          title: 'Workshop 4',
          startDate: '2016-06-01T09:00',
          endDate: '2016-06-01T10:15',
          place: '101 ~ 104, 106, 201 ~ 206'
        },
        {
          id: 3,
          type: 'closing',
          title: 'Closing Session',
          startDate: '2016-06-01T10:30',
          endDate: '2016-06-01T12:30',
          place: '300A\uFF65B'
        }
      ]
    }
  ]);
