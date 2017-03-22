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
      // cardImgUrl: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/assets/opening-session.png'
      cardImgUrl: ''
    },
    caucus: {
      icon: 'forum',
      avatarColor: '#F7D669',
      // cardImgUrl: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/assets/youth-caucus.png'
      cardImgUrl: ''
    },
    lunch: {
      icon: 'restaurant',
      avatarColor: '#F44336',
      // cardImgUrl: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/assets/lunch.png'
      cardImgUrl: ''
    },
    roundtable: {
      icon: 'event_seat',
      avatarColor: '#90CCE0',
      // cardImgUrl: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/assets/roundtable.png'
      cardImgUrl: ''
    },
    townhall: {
      icon: 'account_balance',
      avatarColor: '#1C4A89',
      // cardImgUrl: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/assets/townhall-meeting.png'
      cardImgUrl: ''
    },
    workshop: {
      icon: 'build',
      avatarColor: '#94C9C0',
      // cardImgUrl: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/assets/workshop.png'
      cardImgUrl: ''
    },
    mentoring: {
      icon: 'restaurant',
      avatarColor: '#DFE0DA',
      // cardImgUrl: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/assets/youth-breakfast.png'
      cardImgUrl: ''
    },
    reception: {
      icon: 'weekend',
      avatarColor: '#8A00A3',
      // cardImgUrl: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/assets/break-30m.png'
      cardImgUrl: ''
    },
    closing: {
      icon: 'mic',
      avatarColor: '#192546',
      // cardImgUrl: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/assets/closing-session.png'
      cardImgUrl: ''
    },
    docx: 'text_fields',
    pdf: 'picture_as_pdf',
    pptx: 'slideshow',
    hwp: 'text_fields',
    youtube: 'subscriptions',
    soundcloud: 'library_music'
  });
