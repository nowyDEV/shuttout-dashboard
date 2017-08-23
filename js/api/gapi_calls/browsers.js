// @flow

import apiQuery from '../../utils/gapi_promise';
import { VIEW_ID } from '../../config/api_credentials';

const browsersQuery = apiQuery({
  ids: `ga:${VIEW_ID}`,
  dimensions: 'ga:browser',
  metrics: 'ga:pageviews',
  sort: '-ga:pageviews',
  'max-results': 5,
  'start-date': '180daysAgo',
  'end-date': 'today'
})

export default browsersQuery;