// @flow

import apiQuery from '../../utils/gapi_promise';
import { VIEW_ID } from '../../config/api_credentials';

export const newUsersMonth = apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:newUsers',
  'start-date': '30daysAgo',
  'end-date': 'today'
});

export const newUsersMonthPrevious = apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:newUsers',
  'start-date': '60daysAgo',
  'end-date': '30daysAgo'
});