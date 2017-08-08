// @flow

import moment from 'moment';
import apiQuery from '../../utils/gapi_promise';
import { VIEW_ID } from '../../config/api_credentials';

const totalPageviews = apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:uniquePageviews',
  'start-date': moment().subtract(3, 'year').format('YYYY-MM-DD'),
  'end-date': moment().format('YYYY-MM-DD')
});

export default totalPageviews;