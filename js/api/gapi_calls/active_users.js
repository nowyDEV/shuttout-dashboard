// @flow

import apiQuery from '../../utils/gapi_promise';
import { VIEW_ID } from '../../config/api_credentials';

export const activeUsersDay = () => apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:1dayUsers',
  dimensions: 'ga:nthDay',
  'start-date': '7daysAgo',
  'end-date': 'yesterday'
});

export const activeUsersMonth = () => apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:30dayUsers',
  dimensions: 'ga:nthDay',
  'start-date': '360daysAgo',
  'end-date': 'today'
});



