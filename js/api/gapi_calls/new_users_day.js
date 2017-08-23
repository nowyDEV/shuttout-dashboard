// @flow

import apiQuery from '../../utils/gapi_promise';
import { VIEW_ID } from '../../config/api_credentials';

export const newUsersDay = apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:newUsers',
  'start-date': 'yesterday',
  'end-date': 'today'
});

export const newUsersDayPrevious = apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:newUsers',
  'start-date': '2daysAgo',
  'end-date': 'yesterday',
});