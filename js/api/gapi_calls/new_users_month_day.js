// @flow

import apiQuery from '../../utils/gapi_promise';
import { VIEW_ID } from '../../config/api_credentials';

const newUsersMonthDay = apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:newUsers',
  dimensions: 'ga:day',
  'start-date': '30daysAgo',
  'end-date': 'today'
});

export default newUsersMonthDay;