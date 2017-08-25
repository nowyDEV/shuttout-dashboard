// @flow

import shuttoutQuery from '../../utils/shuttout_query';

 export const PhotoLastUploaded = shuttoutQuery({
  name: 'photo_last_uploaded'
});

export const PhotoOfTheDay = shuttoutQuery({
  name: 'photo_of_the_day'
});

export const PhotoBiggestPrize = shuttoutQuery({
  name: 'photo_biggest_prize'
});