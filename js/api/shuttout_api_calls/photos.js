// @flow

import shuttoutQuery from '../../utils/shuttout_query';

export const photoLastUploaded = shuttoutQuery({
  name: 'photo_last_uploaded'
});

export const photoOfTheDay = shuttoutQuery({
  name: 'photo_of_the_day'
});

export const photoBiggestPrize = shuttoutQuery({
  name: 'photo_biggest_prize'
});

export const photosPremiumMonth = shuttoutQuery({
  name: 'photos_premium_month'
});

export const photosPremiumDay = shuttoutQuery({
  name: 'photos_premium_day'
});

export const photosTotalMonth = shuttoutQuery({
  name: 'photos_total_month'
});

export const photosTotalDay = shuttoutQuery({
  name: 'photos_total_day'
});