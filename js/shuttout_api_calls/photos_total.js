// @flow

import shuttoutQuery from '../utils/shuttout_query';

const photosTotal = shuttoutQuery({
  name: 'photos_total'
});

export default photosTotal;