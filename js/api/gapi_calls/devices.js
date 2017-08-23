// @flow

import apiQuery from '../../utils/gapi_promise';
import { VIEW_ID } from '../../config/api_credentials';

const devicesQuery = apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:users',
  dimensions: 'ga:deviceCategory',
  sort: 'ga:deviceCategory',
  'start-date': '30daysAgo',
  'end-date': 'today'
});

export default devicesQuery;