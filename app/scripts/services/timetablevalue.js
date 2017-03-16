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
      title: '04.27',
      schedules: [
        {
          id: 0,
          type: 'caucus',
          title: '등록',
          startDate: '2017-04-27T09:30+09:00',
          endDate: '',
          location: ''
        },
        {
          id: 1,
          type: 'caucus',
          title: 'A 세션',
          startDate: '2017-04-27T10:20+09:00',
          endDate: '2017-04-27T12:00+09:00',
          location: ''
        },
        {
          id: 2,
          type: 'caucus',
          title: '중식',
          startDate: '2017-04-27T12:00+09:00',
          endDate: '2017-04-27T13:10+09:00',
          location: ''
        },
        {
          id: 3,
          type: 'caucus',
          title: 'B 세션',
          startDate: '2017-04-27T13:10+09:00',
          endDate: '2017-04-27T14:50+09:00',
          location: ''
        },
        {
          id: 4,
          type: 'caucus',
          title: '개회식 - 기조/초청 강연',
          startDate: '2017-04-27T15:00+09:00',
          endDate: '2017-04-27T16:20+09:00',
          location: ''
        },
        {
          id: 5,
          type: 'caucus',
          title: '개회식 - 기조/초청 강연',
          startDate: '2017-04-27T15:00+09:00',
          endDate: '2017-04-27T16:20+09:00',
          location: ''
        },
        {
          id: 6,
          type: 'caucus',
          title: 'C 세션',
          startDate: '2017-04-27T16:30+09:00',
          endDate: '2017-04-27T18:10+09:00',
          location: ''
        },
        {
          id: 7,
          type: 'caucus',
          title: '리셉션',
          startDate: '',
          endDate: '',
          location: ''
        }
      ]
    },
   {
      title: '04.28',
      schedules: [
        {
          id: 0,
          type: 'caucus',
          title: '등록',
          startDate: '2017-04-28T09:20+09:00',
          endDate: '',
          location: ''
        },
        {
          id: 1,
          type: 'caucus',
          title: '한국시뮬레이션학회 :제 17회 한국 대학생 컴퓨터 시뮬레이션 경진대회',
          startDate: '2017-04-28T09:00+09:00',
          endDate: '2017-04-28T17:00+09:00',
          location: ''
        },
        {
          id: 2,
          type: 'caucus',
          title: 'D 세션',
          startDate: '2017-04-28T09:00+09:00',
          endDate: '2017-04-28T10:40+09:00',
          location: ''
        },
        {
          id: 3,
          type: 'caucus',
          title: 'Coffee Break',
          startDate: '2017-04-28T10:40+09:00',
          endDate: '2017-04-28T10:50+09:00',
          location: ''
        },
        {
          id: 4,
          type: 'caucus',
          title: 'E 세션',
          startDate: '2017-04-28T10:50+09:00',
          endDate: '2017-04-28T12:30+09:00',
          location: ''
        },
        {
          id: 5,
          type: 'caucus',
          title: '중식',
          startDate: '2017-04-28T12:30+09:00',
          endDate: '2017-04-28T13:30+09:00',
          location: ''
        },
        {
          id: 6,
          type: 'caucus',
          title: 'F 세션',
          startDate: '2017-04-28T13:30+09:00',
          endDate: '2017-04-28T15:10+09:00',
          location: ''
        },
        {
          id: 7,
          type: 'caucus',
          title: 'G 세션',
          startDate: '2017-04-28T15:20+09:00',
          endDate: '2017-04-28T17:00+09:00',
          location: ''
        }
       
      ]
    }
  ]);
