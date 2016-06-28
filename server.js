const express = require('express');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');

config.plugins.push(new webpack.HotModuleReplacementPlugin());
//config.plugins.push(new webpack.NoErrorsPlugin());

process.env.NODE_ENV = 'development';

new WebpackDevServer(webpack(config), {
  hot: true,
  stats: { colors: true },
  progress: true,
  contentBase: 'public/',
  historyApiFallback: true,
  proxy: {
    '/api*': 'http://localhost:3000'
  },
  publicPath: '/assets/js/'
}).listen(8080, '0.0.0.0', (e) => {
  if (e) {
    console.log(e);
  }

  console.log('[WebpackDevServer] Listening on 0.0.0.0:8080');
});


const app = express();

app.get('/api', (req, res) => {
  res.json({
    shouts: [
      'Hello World!',
      'This is React and Webpack...',
      'They make development fun',
      'Another shout'
    ]
  });
});

app.post('/api/nlevel', (req, res) => {
  res.json(
    {
      'rootNode': {
        'value': {
          'pk_NLGroupNo': 703,
          'sHPEntityId': 703,
          'name': 'Trinity Home Health Services',
          'nodeName': 'Trinity Home Health Services',
          'selectName': 'Trinity Home Health Services',
          'isProvider': false,
          'hasAccess': true,
          'hasLevelAccess': true,
          'level': 1,
          'levelName': 'Enterprise'
        },
        'children': [
          {
            'value': {
              'pk_NLGroupNo': 3077,
              'sHPEntityId': 3077,
              'name': 'CHE',
              'nodeName': 'CHE',
              'selectName': 'CHE',
              'isProvider': false,
              'hasAccess': true,
              'hasLevelAccess': true,
              'level': 2,
              'levelName': 'Division'
            },
            'children': [
              {
                'value': {
                  'pk_NLGroupNo': 4744,
                  'sHPEntityId': 1022,
                  'name': 'Eddy Visiting Nurse Association',
                  'nodeName': 'CCN (337203) Eddy Visiting Nurse Association',
                  'selectName': '(337203) Eddy Visiting Nurse Association',
                  'isProvider': false,
                  'hasAccess': true,
                  'hasLevelAccess': true,
                  'level': -2,
                  'levelName': 'CCN'
                },
                'children': [
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 31048,
                      'name': 'Eddy VNA - Troy',
                      'nodeName': 'Provider (31048) Eddy VNA - Troy',
                      'selectName': '(31048) Eddy VNA - Troy',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  }
                ]
              },
              {
                'value': {
                  'pk_NLGroupNo': 4741,
                  'sHPEntityId': 2486,
                  'name': 'Holy Cross Home Health',
                  'nodeName': 'CCN (107362) Holy Cross Home Health',
                  'selectName': '(107362) Holy Cross Home Health',
                  'isProvider': false,
                  'hasAccess': true,
                  'hasLevelAccess': true,
                  'level': -2,
                  'levelName': 'CCN'
                },
                'children': [
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 34057,
                      'name': 'Holy Cross Home Health',
                      'nodeName': 'Provider (34057) Holy Cross Home Health',
                      'selectName': '(34057) Holy Cross Home Health',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  }
                ]
              },
              {
                'value': {
                  'pk_NLGroupNo': 4746,
                  'sHPEntityId': 2580,
                  'name': 'McAuley Seton Home Care',
                  'nodeName': 'CCN (337251) McAuley Seton Home Care',
                  'selectName': '(337251) McAuley Seton Home Care',
                  'isProvider': false,
                  'hasAccess': true,
                  'hasLevelAccess': true,
                  'level': -2,
                  'levelName': 'CCN'
                },
                'children': [
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 34052,
                      'name': 'McAuley Seton Home Care',
                      'nodeName': 'Provider (34052) McAuley Seton Home Care',
                      'selectName': '(34052) McAuley Seton Home Care',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  }
                ]
              },
              {
                'value': {
                  'pk_NLGroupNo': 4743,
                  'sHPEntityId': 2557,
                  'name': 'Mercy Home Care -  PA',
                  'nodeName': 'CCN (227441) Mercy Home Care -  PA',
                  'selectName': '(227441) Mercy Home Care -  PA',
                  'isProvider': false,
                  'hasAccess': true,
                  'hasLevelAccess': true,
                  'level': -2,
                  'levelName': 'CCN'
                },
                'children': [
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 34054,
                      'name': 'Mercy Home Care',
                      'nodeName': 'Provider (34054) Mercy Home Care',
                      'selectName': '(34054) Mercy Home Care',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  }
                ]
              },
              {
                'value': {
                  'pk_NLGroupNo': 4747,
                  'sHPEntityId': 2485,
                  'name': 'Mercy Home Health - PA',
                  'nodeName': 'CCN (397015) Mercy Home Health - PA',
                  'selectName': '(397015) Mercy Home Health - PA',
                  'isProvider': false,
                  'hasAccess': true,
                  'hasLevelAccess': true,
                  'level': -2,
                  'levelName': 'CCN'
                },
                'children': [
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 34055,
                      'name': 'Mercy Home Health - New Town Square',
                      'nodeName': 'Provider (34055) Mercy Home Health - New Town Square',
                      'selectName': '(34055) Mercy Home Health - New Town Square',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  },
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 34203,
                      'name': 'Mercy Home Health \u2013 Philadelphia',
                      'nodeName': 'Provider (34203) Mercy Home Health \u2013 Philadelphia',
                      'selectName': '(34203) Mercy Home Health \u2013 Philadelphia',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  },
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 34202,
                      'name': 'Mercy Home Health \u2013 St Mary',
                      'nodeName': 'Provider (34202) Mercy Home Health \u2013 St Mary',
                      'selectName': '(34202) Mercy Home Health \u2013 St Mary',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  },
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 34204,
                      'name': 'Mercy Home Health \u2013 Suburban',
                      'nodeName': 'Provider (34204) Mercy Home Health \u2013 Suburban',
                      'selectName': '(34204) Mercy Home Health \u2013 Suburban',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  }
                ]
              },
              {
                'value': {
                  'pk_NLGroupNo': 4740,
                  'sHPEntityId': 2488,
                  'name': 'St. Francis Home Care',
                  'nodeName': 'CCN (087022) St. Francis Home Care',
                  'selectName': '(087022) St. Francis Home Care',
                  'isProvider': false,
                  'hasAccess': true,
                  'hasLevelAccess': true,
                  'level': -2,
                  'levelName': 'CCN'
                },
                'children': [
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 34059,
                      'name': 'St. Francis Home Care',
                      'nodeName': 'Provider (34059) St. Francis Home Care',
                      'selectName': '(34059) St. Francis Home Care',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  }
                ]
              },
              {
                'value': {
                  'pk_NLGroupNo': 4742,
                  'sHPEntityId': 2487,
                  'name': "St. Mary's Home Care",
                  'nodeName': "CCN (117019) St. Mary's Home Care",
                  'selectName': "(117019) St. Mary's Home Care",
                  'isProvider': false,
                  'hasAccess': true,
                  'hasLevelAccess': true,
                  'level': -2,
                  'levelName': 'CCN'
                },
                'children': [
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 34058,
                      'name': "St. Mary's Home Care",
                      'nodeName': "Provider (34058) St. Mary's Home Care",
                      'selectName': "(34058) St. Mary's Home Care",
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  }
                ]
              }
            ]
          },
          {
            'value': {
              'pk_NLGroupNo': 3078,
              'sHPEntityId': 3078,
              'name': 'TH',
              'nodeName': 'TH',
              'selectName': 'TH',
              'isProvider': false,
              'hasAccess': true,
              'hasLevelAccess': true,
              'level': 2,
              'levelName': 'Division'
            },
            'children': [
              {
                'value': {
                  'pk_NLGroupNo': 4800,
                  'sHPEntityId': 400,
                  'name': 'Chelseacare Home Health',
                  'nodeName': 'CCN (237249) Chelseacare Home Health',
                  'selectName': '(237249) Chelseacare Home Health',
                  'isProvider': false,
                  'hasAccess': true,
                  'hasLevelAccess': true,
                  'level': -2,
                  'levelName': 'CCN'
                },
                'children': [
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 30529,
                      'name': 'Chelsea Care Home Health',
                      'nodeName': 'Provider (30529) Chelsea Care Home Health',
                      'selectName': '(30529) Chelsea Care Home Health',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  }
                ]
              },
              {
                'value': {
                  'pk_NLGroupNo': 5177,
                  'sHPEntityId': 14000,
                  'name': 'Mercy Home Care',
                  'nodeName': 'CCN (167145) Mercy Home Care',
                  'selectName': '(167145) Mercy Home Care',
                  'isProvider': false,
                  'hasAccess': true,
                  'hasLevelAccess': true,
                  'level': -2,
                  'levelName': 'CCN'
                },
                'children': [
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 35657,
                      'name': 'Mercy Home Care - Dubuque',
                      'nodeName': 'Provider (35657) Mercy Home Care - Dubuque',
                      'selectName': '(35657) Mercy Home Care - Dubuque',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  }
                ]
              },
              {
                'value': {
                  'pk_NLGroupNo': 4748,
                  'sHPEntityId': 5924,
                  'name': 'Mercy Home Care & Hospice - IA',
                  'nodeName': 'CCN (167154) Mercy Home Care & Hospice - IA',
                  'selectName': '(167154) Mercy Home Care & Hospice - IA',
                  'isProvider': false,
                  'hasAccess': true,
                  'hasLevelAccess': true,
                  'level': -2,
                  'levelName': 'CCN'
                },
                'children': [
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 34816,
                      'name': 'Mercy Home Care & Hospice - HH',
                      'nodeName': 'Provider (34816) Mercy Home Care & Hospice - HH',
                      'selectName': '(34816) Mercy Home Care & Hospice - HH',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  }
                ]
              }
            ]
          },
          {
            'value': {
              'pk_NLGroupNo': 3079,
              'sHPEntityId': 3079,
              'name': 'THHS',
              'nodeName': 'THHS',
              'selectName': 'THHS',
              'isProvider': false,
              'hasAccess': true,
              'hasLevelAccess': true,
              'level': 2,
              'levelName': 'Division'
            },
            'children': [
              {
                'value': {
                  'pk_NLGroupNo': 4752,
                  'sHPEntityId': 2388,
                  'name': 'Holy Cross Home Care and Hospice, Silver Spring',
                  'nodeName': 'CCN (217030) Holy Cross Home Care and Hospice, Silver Spring',
                  'selectName': '(217030) Holy Cross Home Care and Hospice, Silver Spring',
                  'isProvider': false,
                  'hasAccess': true,
                  'hasLevelAccess': true,
                  'level': -2,
                  'levelName': 'CCN'
                },
                'children': [
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 33990,
                      'name': 'THHS - Silver Spring',
                      'nodeName': 'Provider (33990) THHS - Silver Spring',
                      'selectName': '(33990) THHS - Silver Spring',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  }
                ]
              },
              {
                'value': {
                  'pk_NLGroupNo': 8409,
                  'sHPEntityId': 5142,
                  'name': 'Loyola Univ. Ctr For Home Care',
                  'nodeName': 'CCN (147257) Loyola Univ. Ctr For Home Care',
                  'selectName': '(147257) Loyola Univ. Ctr For Home Care',
                  'isProvider': false,
                  'hasAccess': true,
                  'hasLevelAccess': true,
                  'level': -2,
                  'levelName': 'CCN'
                },
                'children': [
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 35808,
                      'name': 'Loyola Medicine Home Care',
                      'nodeName': 'Provider (35808) Loyola Medicine Home Care',
                      'selectName': '(35808) Loyola Medicine Home Care',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  }
                ]
              },
              {
                'value': {
                  'pk_NLGroupNo': 4760,
                  'sHPEntityId': 2381,
                  'name': 'Mercy Health Home Care, Grand Rapids',
                  'nodeName': 'CCN (237217) Mercy Health Home Care, Grand Rapids',
                  'selectName': '(237217) Mercy Health Home Care, Grand Rapids',
                  'isProvider': false,
                  'hasAccess': true,
                  'hasLevelAccess': true,
                  'level': -2,
                  'levelName': 'CCN'
                },
                'children': [
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 33981,
                      'name': 'THHS - Grand Rapids',
                      'nodeName': 'Provider (33981) THHS - Grand Rapids',
                      'selectName': '(33981) THHS - Grand Rapids',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  }
                ]
              },
              {
                'value': {
                  'pk_NLGroupNo': 5820,
                  'sHPEntityId': 2379,
                  'name': 'Mercy Home Care, Oakland',
                  'nodeName': 'CCN (237192) Mercy Home Care, Oakland',
                  'selectName': '(237192) Mercy Home Care, Oakland',
                  'isProvider': false,
                  'hasAccess': true,
                  'hasLevelAccess': true,
                  'level': -2,
                  'levelName': 'CCN'
                },
                'children': [
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 33984,
                      'name': 'St. Joseph Mercy Home Care and Mercy Home Care - Oakland',
                      'nodeName': 'Provider (33984) St. Joseph Mercy Home Care and Mercy Home Care - Oakland',
                      'selectName': '(33984) St. Joseph Mercy Home Care and Mercy Home Care - Oakland',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  }
                ]
              },
              {
                'value': {
                  'pk_NLGroupNo': 4762,
                  'sHPEntityId': 2384,
                  'name': 'Mercy Home Care, Port Huron',
                  'nodeName': 'CCN (237422) Mercy Home Care, Port Huron',
                  'selectName': '(237422) Mercy Home Care, Port Huron',
                  'isProvider': false,
                  'hasAccess': true,
                  'hasLevelAccess': true,
                  'level': -2,
                  'levelName': 'CCN'
                },
                'children': [
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 33985,
                      'name': 'St. Joseph Mercy Home Care and Mercy Home Care \u2013 Port Huron',
                      'nodeName': 'Provider (33985) St. Joseph Mercy Home Care and Mercy Home Care \u2013 Port Huron',
                      'selectName': '(33985) St. Joseph Mercy Home Care and Mercy Home Care \u2013 Port Huron',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  }
                ]
              },
              {
                'value': {
                  'pk_NLGroupNo': 4751,
                  'sHPEntityId': 2387,
                  'name': 'Mercy Home Care, Sioux City',
                  'nodeName': 'CCN (167073) Mercy Home Care, Sioux City',
                  'selectName': '(167073) Mercy Home Care, Sioux City',
                  'isProvider': false,
                  'hasAccess': true,
                  'hasLevelAccess': true,
                  'level': -2,
                  'levelName': 'CCN'
                },
                'children': [
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 33989,
                      'name': 'THHS - Sioux City',
                      'nodeName': 'Provider (33989) THHS - Sioux City',
                      'selectName': '(33989) THHS - Sioux City',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  }
                ]
              },
              {
                'value': {
                  'pk_NLGroupNo': 4759,
                  'sHPEntityId': 2383,
                  'name': 'Mercy VNS and Hospice Services, Muskegon',
                  'nodeName': 'CCN (237198) Mercy VNS and Hospice Services, Muskegon',
                  'selectName': '(237198) Mercy VNS and Hospice Services, Muskegon',
                  'isProvider': false,
                  'hasAccess': true,
                  'hasLevelAccess': true,
                  'level': -2,
                  'levelName': 'CCN'
                },
                'children': [
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 33983,
                      'name': 'THHS - Muskegon',
                      'nodeName': 'Provider (33983) THHS - Muskegon',
                      'selectName': '(33983) THHS - Muskegon',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  }
                ]
              },
              {
                'value': {
                  'pk_NLGroupNo': 4763,
                  'sHPEntityId': 2386,
                  'name': 'Mount Carmel Home Care, Columbus',
                  'nodeName': 'CCN (367273) Mount Carmel Home Care, Columbus',
                  'selectName': '(367273) Mount Carmel Home Care, Columbus',
                  'isProvider': false,
                  'hasAccess': true,
                  'hasLevelAccess': true,
                  'level': -2,
                  'levelName': 'CCN'
                },
                'children': [
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 33987,
                      'name': 'THHS - MT. Carmel',
                      'nodeName': 'Provider (33987) THHS - MT. Carmel',
                      'selectName': '(33987) THHS - MT. Carmel',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  }
                ]
              },
              {
                'value': {
                  'pk_NLGroupNo': 4749,
                  'sHPEntityId': 2385,
                  'name': 'Saint Agnes Home Health and Hospice, Fresno',
                  'nodeName': 'CCN (057135) Saint Agnes Home Health and Hospice, Fresno',
                  'selectName': '(057135) Saint Agnes Home Health and Hospice, Fresno',
                  'isProvider': false,
                  'hasAccess': true,
                  'hasLevelAccess': true,
                  'level': -2,
                  'levelName': 'CCN'
                },
                'children': [
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 33986,
                      'name': 'THHS - Fresno',
                      'nodeName': 'Provider (33986) THHS - Fresno',
                      'selectName': '(33986) THHS - Fresno',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  }
                ]
              },
              {
                'value': {
                  'pk_NLGroupNo': 4756,
                  'sHPEntityId': 1653,
                  'name': 'Saint Joseph Mercy Home Care \u2013 Ann Arbor',
                  'nodeName': 'CCN (237069) Saint Joseph Mercy Home Care \u2013 Ann Arbor',
                  'selectName': '(237069) Saint Joseph Mercy Home Care \u2013 Ann Arbor',
                  'isProvider': false,
                  'hasAccess': true,
                  'hasLevelAccess': true,
                  'level': -2,
                  'levelName': 'CCN'
                },
                'children': [
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 32989,
                      'name': 'Saint Joseph Mercy Home Care - Ann Arbor',
                      'nodeName': 'Provider (32989) Saint Joseph Mercy Home Care - Ann Arbor',
                      'selectName': '(32989) Saint Joseph Mercy Home Care - Ann Arbor',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  }
                ]
              },
              {
                'value': {
                  'pk_NLGroupNo': 4755,
                  'sHPEntityId': 1654,
                  'name': 'Saint Joseph Mercy Home Care \u2013 Livingston',
                  'nodeName': 'CCN (237023) Saint Joseph Mercy Home Care \u2013 Livingston',
                  'selectName': '(237023) Saint Joseph Mercy Home Care \u2013 Livingston',
                  'isProvider': false,
                  'hasAccess': true,
                  'hasLevelAccess': true,
                  'level': -2,
                  'levelName': 'CCN'
                },
                'children': [
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 32991,
                      'name': 'Saint Joseph Mercy Home Care - Livingston',
                      'nodeName': 'Provider (32991) Saint Joseph Mercy Home Care - Livingston',
                      'selectName': '(32991) Saint Joseph Mercy Home Care - Livingston',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [

                    ]
                  }
                ]
              },
              {
                'value': {
                  'pk_NLGroupNo': 4750,
                  'sHPEntityId': 283,
                  'name': 'Saint Joseph VNA Home Care, Mishawaka',
                  'nodeName': 'CCN (157005) Saint Joseph VNA Home Care, Mishawaka',
                  'selectName': '(157005) Saint Joseph VNA Home Care, Mishawaka',
                  'isProvider': false,
                  'hasAccess': true,
                  'hasLevelAccess': true,
                  'level': -2,
                  'levelName': 'CCN'
                },
                'children': [
                  {
                    'value': {
                      'pk_NLGroupNo': -1,
                      'sHPEntityId': 33988,
                      'name': 'THHS - South Bend',
                      'nodeName': 'Provider (33988) THHS - South Bend',
                      'selectName': '(33988) THHS - South Bend',
                      'isProvider': true,
                      'hasAccess': true,
                      'hasLevelAccess': true,
                      'level': -1,
                      'levelName': 'Provider'
                    },
                    'children': [
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    });
});

app.post('/api/test/test', (req, res) => {
  res.json({
    hello: 'world'
  });
});

app.listen(3000, '0.0.0.0', (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('[Express] running on localhost:3000');
});
