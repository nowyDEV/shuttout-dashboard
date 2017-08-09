// @flow

import moment from 'moment';
import apiQuery from '../../utils/gapi_promise';
import { VIEW_ID } from '../../config/api_credentials';

export const newUsersDay = apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:newUsers',
  'start-date': moment().subtract(1, 'day').format('YYYY-MM-DD'),
  'end-date': moment().format('YYYY-MM-DD')
});

export const newUsersDayPrevious = apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:newUsers',
  'start-date': moment().subtract(2, 'day').format('YYYY-MM-DD'),
  'end-date': moment().subtract(1, 'day').format('YYYY-MM-DD'),
});