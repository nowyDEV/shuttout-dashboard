// @flow

import apiQuery from '../../utils/gapi_promise';
import { VIEW_ID } from '../../config/api_credentials';

export const activeUsersDay = () => apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:1dayUsers',
  dimensions: 'ga:day',
  'start-date': 'today',
  'end-date': 'today'
});

export const activeUsersDayPrevious = () => apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:1dayUsers',
  dimensions: 'ga:day',
  'start-date': 'yesterday',
  'end-date': 'yesterday',
});

export const activeUsersMonth = () => apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:30dayUsers',
  dimensions: 'ga:day',
  'start-date': 'today',
  'end-date': 'today'
});

export const activeUsersMonthPrevious = () => apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:30dayUsers',
  dimensions: 'ga:day',
  'start-date': '30daysAgo',
  'end-date': '30daysAgo'
});



