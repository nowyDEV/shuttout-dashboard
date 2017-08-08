// @flow

import moment from 'moment';
import apiQuery from '../../utils/gapi_promise';
import { VIEW_ID } from '../../config/api_credentials';

const devicesQuery = apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:users',
  dimensions: 'ga:deviceCategory',
  sort: 'ga:deviceCategory',
  'start-date': moment().subtract(1, 'day').subtract(1, 'month').format('YYYY-MM-DD'),
  'end-date': moment().subtract(1, 'day').format('YYYY-MM-DD')
});

export default devicesQuery;