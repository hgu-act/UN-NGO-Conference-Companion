'use strict';

/**
 * @ngdoc service
 * @name ngoConferenceCompanionApp.workshopValue
 * @description
 * # workshopValue
 * Value in the ngoConferenceCompanionApp.
 */
angular.module('ngoConferenceCompanionApp')
  .value('workshopValue', [
    {
      title: 'Session 1',
      workshops: [
        {
          topic: 'Peace Education for Children and Youth through SDGs Campaign',
          sponsor: 'Action for Peace Through Prayer and Aid',
          location: '101',
          id: 1
        },
        {
          topic: 'Education of the Children of Migrant Workers in Asia: Assistance, Barriers and Opportunities',
          sponsor: 'Human Asia',
          location: '102',
          id: 2,
          files: [
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-1/102/file+1.pdf',
              title: 'file 1.pdf',
              type: 'pdf'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-1/102/file+2.pdf',
              title: 'file 2.pdf',
              type: 'pdf'
            }
          ]
        },
        {
          topic: 'Foundation of UN NGO Center for Global Civil Society',
          sponsor: 'The Korean Association of NGO Studies, Social Science Korea (SSK)',
          location: '103',
          id: 3
        },
        {
          topic: 'Foundation of UN NGO Center for Global Civil Society',
          sponsor: 'Women\'s Federation for World Peace International',
          location: '104',
          id: 4,
          files: [
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-1/104/presentation+1.pptx',
              title: 'presentation 1.pptx',
              type: 'pptx'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-1/104/presentation+2.PPTX',
              title: 'presentation 2.pptx',
              type: 'pptx'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-1/104/presentation+3.pptx',
              title: 'presentation 3.pptx',
              type: 'pptx'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-1/104/text+1.docx',
              title: 'text 1.docx',
              type: 'docx'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-1/104/text+2.docx',
              title: 'text 2.docx',
              type: 'docx'
            }
          ]
        },
        {
          topic: 'Making a Difference: Good Governance, Rule of Law and Compliance with SDG\'s Policy Framework for Sustainability and Growth',
          sponsor: 'Tinker Institute on International Law and Organizations',
          location: '106',
          id: 5,
          files: [
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-1/106/TIILO+UN+DPI+NGO+conference+documents+for+Korea+-+Final.docx',
              title: 'TIILO UN DPI NGO conference documents for Korea - Final.docx',
              type: 'docx'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-1/106/TIILO+final+edited+Flyer+2.0.pdf',
              title: 'TIILO final edited Flyer 2.0.pdf',
              type: 'pdf'
            },
            {
              url: 'https://youtu.be/lrvxMJjpNiw',
              title: 'TIILO Final 5 20 16',
              type: 'youtube'
            }
          ]
        },
        {
          topic: 'Foundation of UN NGO Center for Global Civil Society',
          sponsor: 'Academy of Dentistry International',
          location: '201',
          id: 6,
          files: [
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-1/201/presentation+1.pptx',
              title: 'presentation 1.pptx',
              type: 'pptx'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-1/201/presentation+2.pptx',
              title: 'presentation 2.pptx',
              type: 'pptx'
            }
          ]
        },
        {
          topic: 'Foundation of UN NGO Center for Global Civil Society',
          sponsor: 'The Light Millennium',
          location: '202',
          id: 7
        },
        {
          topic: 'Foundation of UN NGO Center for Global Civil Society',
          sponsor: 'Sookmyung Women\'s University',
          location: '203',
          id: 8
        },
        {
          topic: 'Civil Society Space and Human Rights Education',
          sponsor: 'United Nations Office of the High Commissioner for Human Rights',
          location: '204',
          id: 9
        },
        {
          topic: 'Academia and NGOs : Stories of Partnership with the United Nations Department of Public Information',
          sponsor: 'United Nations Department of Public Information and Lehigh University',
          location: '205',
          id: 10
        },
        {
          topic: 'See the Unseen: The Inclusion of Marginalized Groups',
          sponsor: 'Dream Touch for All',
          location: '206',
          id: 11
        },
        {
          topic: 'Hwabaek Conference: Education for Global Citizenship',
          sponsor: 'Dongguk University, Gyeongju City',
          location: '300A\uff65B',
          id: 12,
          files: [
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-1/300AB/file+1.pdf',
              title: 'file 1.pdf',
              type: 'pdf'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-1/300AB/file+2.pdf',
              title: 'file 2.pdf',
              type: 'pdf'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-1/300AB/text+1.hwp',
              title: 'text 1.hwp',
              type: 'hwp'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-1/300AB/text+2.hwp',
              title: 'text 2.hwp',
              type: 'hwp'
            }
          ]
        }
      ]
    },
    {
      title: 'Session 2',
      workshops: [
        {
          id: 1,
          topic: 'The United Nations Sustainable Development Goals in ASEAN: Realizing Human Rights, Promoting Peace and Protecting Our Planet',
          sponsor: 'Khmers Kampuchea-Krom Federation',
          location: '101',
          files: [
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-2/101/presentation+1.pdf',
              title: 'presentation 1.pdf',
              type: 'pdf'
            }
          ]
        },
        {
          id: 2,
          topic: 'Youth Initiatives in Peace and Disarmament Advances SDG16',
          sponsor: 'NGO Committee on Disarmament, Peace and Security',
          location: '102'
        },
        {
          id: 3,
          topic: 'How to Strengthen Government-Citizen Relations: Citizens as Partners in Policy-making',
          sponsor: 'Prime Minister\'s Advisory Committee For Civil Society Development',
          location: '103'
        },
        {
          id: 4,
          topic: 'Religious Education as a Means to Counter Extremism',
          sponsor: 'Cooperative Baptist Fellowship',
          location: '104'
        },
        {
          id: 5,
          topic: 'International Partnership Models to Promote Globally Shared Quality Education for Sustainable Development',
          sponsor: 'Center for International Virtual Schooling (IVECA)',
          location: '106',
          files: [
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-2/106/file+1.pdf',
              title: 'file 1.pdf',
              type: 'pdf'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-2/106/presentation+1.pptx',
              title: 'presentation 1.pptx',
              type: 'pptx'
            }
          ]
        },
        {
          id: 6,
          topic: 'Grassroots Advocacy: A Key for the Achievement of the SDGs by 2030',
          sponsor: 'Rally for the Goals',
          location: '201'
        },
        {
          id: 7,
          topic: 'Community Driven Education: Local Ownership for Global Advancement',
          sponsor: 'Bahai International Community',
          location: '202'
        },
        {
          id: 8,
          topic: 'Strengthening the Solidarity and Effort of Women in Peace Building Process on the Korean Peninsula',
          sponsor: 'World YWCA',
          location: '203',
          files: [
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-2/203/file+1.pdf',
              title: 'file 1.pdf',
              type: 'pdf'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-2/203/file+2.pdf',
              title: 'file 2.pdf',
              type: 'pdf'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-2/203/text+1.docx',
              title: 'text 1.docx',
              type: 'docx'
            },
            {
              url: 'https://youtu.be/WYFwSHoD-B8',
              title: '[YWCA] 평화영상(영문)',
              type: 'youtube'
            },
            {
              url: 'https://soundcloud.com/joshua-jung/skotp7xnbr5v',
              title: '통일아리랑편집음원',
              type: 'soundcloud'
            }
          ]
        },
        {
          id: 9,
          topic: 'Achieving SDG 11 through Slum Upgrading, Urbanization and Education',
          sponsor: 'Habitat for Humanity Korea',
          location: '204',
          files: [
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-2/204/text+1.doc',
              title: 'text 1.doc',
              type: 'docx'
            }
          ]
        },
        {
          id: 10,
          topic: 'Civil Society and Public Information at the United Nations',
          sponsor: 'UN DPI',
          location: '205'
        },
        {
          id: 11,
          topic: 'Platforms for Global Citizenship Education in Higher Education',
          sponsor: 'UN Academic Impact Korea',
          location: '206',
          files: [
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-2/206/presentation1.pdf',
              title: 'presentation1.pdf',
              type: 'pdf'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-2/206/presentation2.pptx',
              title: 'presentation2.pptx',
              type: 'pptx'
            }
          ]
        },
        {
          id: 12,
          topic: 'Cross Sector Partnerships for Global Citizenship Education',
          sponsor: 'WFUNA',
          location: '300A\uff65B'
        }
      ]
    },
    {
      title: 'Session 3',
      workshops: [
        {
          id: 1,
          topic: 'Bridging Formal and Non-formal Education through Global Citizenship Education',
          sponsor: 'UNESCO APCEIU',
          location: '101'
        },
        {
          id: 2,
          topic: 'Ensuring Every Girl\'s Rights: Achieving Gender Equality through Active Citizenship and Child Participation',
          sponsor: 'Good Neighbors International',
          location: '102',
          files: [
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-3/102/presentaion+1.pdf',
              title: 'presentaion 1.pdf',
              type: 'pdf'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-3/102/presentaion+2.pdf',
              title: 'presentaion 2.pdf',
              type: 'pdf'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-3/102/presentaion+3.pdf',
              title: 'presentaion 3.pdf',
              type: 'pdf'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-3/102/presentaion+4.pdf',
              title: 'presentaion 4.pdf',
              type: 'pdf'
            }
          ]
        },
        {
          id: 3,
          topic: 'Making SDG 4.7 Happen Globally',
          sponsor: 'Korea NGO Council for Overseas Development Cooperation',
          location: '103'
        },
        {
          id: 4,
          topic: 'Learning from the Past – Lessons for Global Citizenship',
          sponsor: 'School of Diplomacy and International Relations, Seton Hall University',
          location: '104',
          files: [
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-3/104/presentation+1.pptx',
              title: 'presentation 1.pptx',
              type: 'pptx'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-3/104/presentation+2.ppt',
              title: 'presentation 2.ppt',
              type: 'pptx'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-3/104/presentation+3.ppt',
              title: 'presentation 3.ppt',
              type: 'pptx'
            },
            {
              url: 'https://youtu.be/CcEitmy0jx8',
              title: 'South Korea 1st Speech',
              type: 'youtube'
            },
            {
              url: 'https://youtu.be/DQeS3w1Dbg4',
              title: 'South Korea 2nd Speech',
              type: 'youtube'
            }
          ]
        },
        {
          id: 5,
          topic: 'Effective Use of Non-Formal Education Tools in achieving the SDGs',
          sponsor: 'Soka Gakkai International',
          location: '106'
        },
        {
          id: 6,
          topic: 'Empowering Youth to Find Solutions: Northeast Asian Models of Education for Peace, the Environment and the SDGs',
          sponsor: 'Peace Boat',
          location: '201'
        },
        {
          id: 7,
          topic: 'UNESCO UNITWIN Project for Capacity Building of Developing Countries',
          sponsor: 'Handong Global University',
          location: '202',
          files: [
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-3/202/presentation+1.pdf',
              title: 'presentation 1.pdf',
              type: 'pdf'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-3/202/presentation+2.pptx',
              title: 'presentation 2.pptx',
              type: 'pptx'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-3/202/presentation+3.pptx',
              title: 'presentation 3.pptx',
              type: 'pptx'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-3/202/presentation+4.pptx',
              title: 'presentation 4.pptx',
              type: 'pptx'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-3/202/presentation+5.pptx',
              title: 'presentation 5.pptx',
              type: 'pptx'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-3/202/text+1.docx',
              title: 'text 1.docx',
              type: 'docx'
            }
          ]
        },
        {
          id: 8,
          topic: 'Inclusive Education and the SDGs',
          sponsor: 'Unitarian Universalist Association',
          location: '203'
        },
        {
          id: 9,
          topic: 'Saemaul Citizenship Awareness and Rural Development in Developing Countries',
          sponsor: 'Gyeongsangbuk-do Province',
          location: '204',
          files: [
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-3/204/presentation+1.pptx',
              title: 'presentation 1.pptx',
              type: 'pptx'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-3/204/Presentation+2.pptx',
              title: 'Presentation 2.pptx',
              type: 'pptx'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-3/204/presentation+3.pptx',
              title: 'presentation 3.pptx',
              type: 'pptx'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-3/204/presentation+4.pptx',
              title: 'presentation 4.pptx',
              type: 'pptx'
            }
          ]
        },
        {
          id: 10,
          topic: 'Global Citizenship Education: Research and Practices for School Children',
          sponsor: 'Chungnam National University',
          location: '205'
        },
        {
          id: 11,
          topic: 'Sustainable Development in Asian Developing Countries through Education, Appropriate Technology, and Social Entrepreneurship',
          sponsor: 'Hanyang University',
          location: '206'
        }
      ]
    },
    {
      title: 'Session 4',
      workshops: [
        {
          id: 1,
          topic: 'Samsung Dream Class : An Education Program which Provides Hopes and Dreams to Students',
          sponsor: 'Samsung',
          location: '101'
        },
        {
          id: 2,
          topic: 'Climate Change, Cities and CSOs',
          sponsor: 'United Nations Economic and Social Commission for Asia and the Pacific (ESCAP)',
          location: '102'
        },
        {
          id: 3,
          topic: 'Make a Difference: Challenging and Empowering Youths to Achieve Global Citizenship',
          sponsor: 'JF Oberlin University',
          location: '103',
          files: [
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-4/103/presentation+1.pdf',
              title: 'presentation 1.pdf',
              type: 'pdf'
            }
          ]
        },
        {
          id: 4,
          topic: 'From Disaster Relief to Sustainable Development: Informal Education Cultivating Global Citizens',
          sponsor: 'Buddhist Tzu Chi Foundation',
          location: '104'
        },
        {
          id: 5,
          topic: 'Holistic Education for Indigenous People: Issues and Challenges',
          sponsor: 'Managing Committee of Kalinga Institute of Social Sciences',
          location: '106',
          files: [
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-4/106/presentation+1.pdf',
              title: 'presentation 1.pdf',
              type: 'pdf'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-4/106/presentation+2.pdf',
              title: 'presentation 2.pdf',
              type: 'pdf'
            },
            {
              url: 'https://youtu.be/ZfkWjJ_iaL4',
              title: 'KISS, Bhubaneswar Official Teaser',
              type: 'youtube'
            }
          ]
        },
        {
          id: 6,
          topic: 'Poverty Alleviation and Empowerment through Education in Africa',
          sponsor: 'Seoul Women\'s University',
          location: '201',
          files: [
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-4/201/presentation+1.pdf',
              title: 'presentation 1.pdf',
              type: 'pdf'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-4/201/presentation+2.pptx',
              title: 'presentation 2.pptx',
              type: 'pptx'
            }
          ]
        },
        {
          id: 7,
          topic: 'Inclusive Education for Persons with Disabilities',
          sponsor: 'Miral Welfare Foundation',
          location: '202',
          files: [
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-4/202/presentation+1.ppt',
              title: 'presentation 1.ppt',
              type: 'pptx'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-4/202/presentation+2.ppt',
              title: 'presentation 2.ppt',
              type: 'pptx'
            }
          ]
        },
        {
          id: 8,
          topic: 'Civil Participation and Cooperation to Achieve SDGs with Education for Sustainable Development: From Local to Global',
          sponsor: 'Local Sustainability Alliance of Korea(LSAK)',
          location: '203',
          files: [
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-4/203/presentation+1.pdf',
              title: 'presentation 1.pdf',
              type: 'pdf'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-4/203/presentation+2.pdf',
              title: 'presentation 2.pdf',
              type: 'pdf'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-4/203/presentation+3.pdf',
              title: 'presentation 3.pdf',
              type: 'pdf'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-4/203/presentation+4.pdf',
              title: 'presentation 4.pdf',
              type: 'pdf'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-4/203/presentation+5.pdf',
              title: 'presentation 5.pdf',
              type: 'pdf'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-4/203/presentation+6.pdf',
              title: 'presentation 6.pdf',
              type: 'pdf'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-4/203/presentation+7.pdf',
              title: 'presentation 7.pdf',
              type: 'pdf'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-4/203/presentation+9.pdf',
              title: 'presentation 9.pdf',
              type: 'pdf'
            }
          ]
        },
        {
          id: 9,
          topic: 'Educating Global Citizens about Mental Health, Well-being, Empowerment, and Resilience to Achieve Sustainable Development for All at All Ages',
          sponsor: 'American Psychological Association',
          location: '204',
          files: [
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-4/204/presentation+1.ppt',
              title: 'presentation 1.ppt',
              type: 'pptx'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-4/204/presentation+2.pptx',
              title: 'presentation 2.pptx',
              type: 'pptx'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-4/204/text+1.doc',
              title: 'text 1.doc',
              type: 'docx'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-4/204/text+2.docx',
              title: 'text 2.docx',
              type: 'docx'
            },
            {
              url: 'https://s3.ap-northeast-2.amazonaws.com/ngo-app/workshops/session-4/204/text+3.docx',
              title: 'text 3.docx',
              type: 'docx'
            }
          ]
        },
        {
          id: 10,
          topic: 'Sustainable Development Goal #4: Ensure Inclusive and Equitable Quality Education and Promote Lifelong Learning Opportunities for all',
          sponsor: 'United Nations Educational Scientific and Cultural Organization (UNESCO)',
          location: '205'
        },
        {
          id: 11,
          topic: 'SDG Action Campaign',
          sponsor: 'United Nations Development Programme (UNDP)',
          location: '206'
        }
      ]
    }
  ]);
