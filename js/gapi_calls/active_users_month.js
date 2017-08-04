// @flow

import moment from 'moment';
import apiQuery from '../utils/gapi_promise';
import { VIEW_ID } from '../config/api_credentials';

const activeUsersMonth = apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:30dayUsers',
  dimensions: 'ga:date',
  'max-results': 5,
  sort: '-ga:date',
  'start-date': moment().subtract(1, 'day').subtract(1, 'month').format('YYYY-MM-DD'),
  'end-date': moment().subtract(1, 'day').format('YYYY-MM-DD')
});

export default activeUsersMonth;




