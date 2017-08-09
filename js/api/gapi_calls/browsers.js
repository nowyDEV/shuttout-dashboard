// @flow

import moment from 'moment'
import apiQuery from '../../utils/gapi_promise';
import { VIEW_ID } from '../../config/api_credentials';

const browsersQuery = apiQuery({
  ids: `ga:${VIEW_ID}`,
  dimensions: 'ga:browser',
  metrics: 'ga:pageviews',
  sort: '-ga:pageviews',
  'max-results': 5,
  'start-date': moment().subtract(1, 'day').subtract(6, 'month').format('YYYY-MM-DD'),
  'end-date': moment().subtract(1, 'day').format('YYYY-MM-DD')
})

export default browsersQuery;