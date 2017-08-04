// @flow

import moment from 'moment';
import apiQuery from '../utils/gapi_promise';
import { VIEW_ID } from '../config/api_credentials';

const newUsersMonthDay = apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:newUsers',
  dimensions: 'ga:day',
  'start-date': moment().subtract(1, 'day').subtract(1, 'month').format('YYYY-MM-DD'),
  'end-date': moment().subtract(1, 'day').format('YYYY-MM-DD')
});

export default newUsersMonthDay;