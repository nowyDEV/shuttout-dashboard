// @flow

import apiQuery from '../../utils/gapi_promise';
import { VIEW_ID } from '../../config/api_credentials';

export const visitorsDay = () => apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:newUsers',
  'start-date': 'yesterday',
  'end-date': 'today'
});

export const visitorsDayPrevious = () => apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:newUsers',
  'start-date': '2daysAgo',
  'end-date': 'yesterday'
});

export const visitorsMonth = () => apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:newUsers',
  'start-date': '30daysAgo',
  'end-date': 'today'
});

export const visitorsMonthPrevious = () => apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:newUsers',
  'start-date': '60daysAgo',
  'end-date': '30daysAgo'
});



