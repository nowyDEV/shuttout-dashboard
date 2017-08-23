// @flow

import apiQuery from '../../utils/gapi_promise';
import { VIEW_ID } from '../../config/api_credentials';

const registrationsQuery = apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:goal3Completions',
  dimensions: 'ga:month',
  'start-date': '180daysAgo',
  'end-date': 'today'
});

export default registrationsQuery;