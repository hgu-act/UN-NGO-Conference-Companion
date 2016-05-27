'use strict';

/**
 * @ngdoc service
 * @name ngoConferenceCompanionApp.mapper
 * @description
 * # mapper
 * Value in the ngoConferenceCompanionApp.
 */
angular.module('ngoConferenceCompanionApp')
  .value('mapper', {
    opening: {
      icon: 'record_voice_over',
      avatarColor: '#192546',
      cardImgUrl: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/assets/opening-session.png'
    },
    caucus: {
      icon: 'forum',
      avatarColor: '#F7D669',
      cardImgUrl: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/assets/youth-caucus.png'
    },
    lunch: {
      icon: 'restaurant',
      avatarColor: '#F44336',
      cardImgUrl: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/assets/lunch.png'
    },
    roundtable: {
      icon: 'event_seat',
      avatarColor: '#90CCE0',
      cardImgUrl: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/assets/roundtable.png'
    },
    townhall: {
      icon: 'account_balance',
      avatarColor: '#1C4A89',
      cardImgUrl: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/assets/townhall-meeting.png'
    },
    workshop: {
      icon: 'build',
      avatarColor: '#94C9C0',
      cardImgUrl: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/assets/workshop.png'
    },
    mentoring: {
      icon: 'restaurant',
      avatarColor: '#DFE0DA',
      cardImgUrl: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/assets/intergenerational-mentoring-lunch.png'
    },
    reception: {
      icon: 'weekend',
      avatarColor: '#8A00A3',
      cardImgUrl: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/assets/youth-breakfast.png'
    },
    closing: {
      icon: 'mic',
      avatarColor: '#192546',
      cardImgUrl: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/assets/closing-session.png'
    }
  });
