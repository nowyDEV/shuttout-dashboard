// @flow

import apiQuery from '../../utils/gapi_promise';
import { VIEW_ID } from '../../config/api_credentials';

export const visitorsDay = () => apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:newUsers',
  dimensions: 'ga:nthDay',
  'start-date': '7daysAgo',
  'end-date': 'yesterday'
});

export const visitorsMonth = () => apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:newUsers',
  dimensions: 'ga:nthMonth',
  'start-date': '360daysAgo',
  'end-date': 'today'
});



