// @flow

import moment from 'moment';
import apiQuery from '../../utils/gapi_promise';
import { VIEW_ID } from '../../config/api_credentials';

const registrationsQuery = apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:goal3Completions',
  dimensions: 'ga:month',
  'start-date': moment().subtract(1, 'day').subtract(6, 'month').format('YYYY-MM-DD'),
  'end-date': moment().subtract(1, 'day').format('YYYY-MM-DD')
});

export default registrationsQuery;