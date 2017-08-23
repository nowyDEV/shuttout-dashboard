// @flow

import apiQuery from '../../utils/gapi_promise';
import { VIEW_ID } from '../../config/api_credentials';

const exitRate = apiQuery({
  ids: `ga:${VIEW_ID}`,
  metrics: 'ga:exitRate',
  'start-date': 'yesterday',
  'end-date': 'today'
});

export default exitRate;