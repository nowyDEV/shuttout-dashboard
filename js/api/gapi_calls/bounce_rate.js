// @flow

import apiQuery from '../../utils/gapi_promise';
import { VIEW_ID } from '../../config/api_credentials';

const bounceRate = apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:bounceRate',
  'start-date': 'yesterday',
  'end-date': 'today'
});

export default bounceRate;