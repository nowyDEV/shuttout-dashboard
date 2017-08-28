// @flow

import React from 'react';
import { Statistic, Icon, Label, Segment, Grid } from 'semantic-ui-react';

const PhotoStats = (props: {
  photosTotalMonth: ChartjsData,
  photosTotalDay: ChartjsData,
  photosPremiumMonth: ChartjsData,
  photosPremiumDay: ChartjsData
}) => {
  const photosTotalMonthCurrent = parseInt(props.photosTotalMonth.datasets[0].data[11], 10);
  const photosTotalMonthPrevious = parseInt(props.photosTotalMonth.datasets[0].data[10], 10);
  const photosTotalDayCurrent = parseInt(props.photosTotalDay.datasets[0].data[6], 10);
  const photosTotalDayPrevious = parseInt(props.photosTotalDay.datasets[0].data[5], 10);

  const photosPremiumMonthCurrent = parseInt(props.photosPremiumMonth.datasets[0].data[11], 10);
  const photosPremiumMonthPrevious = parseInt(props.photosPremiumMonth.datasets[0].data[10], 10);
  const photosPremiumDayCurrent = parseInt(props.photosPremiumDay.datasets[0].data[6], 10);
  const photosPremiumDayPrevious = parseInt(props.photosPremiumDay.datasets[0].data[5], 10);

  const doesPhotosTotalGrowMonthly = photosTotalMonthCurrent > photosTotalMonthPrevious;
  const doesPhotosTotalGrowDaily = photosTotalDayCurrent > photosTotalDayPrevious;
  const doesPhotosPremiumGrowMonthly = photosPremiumMonthCurrent > photosPremiumMonthPrevious;
  const doesPhotosPremiumGrowDaily = photosPremiumDayCurrent > photosPremiumDayPrevious;

  const photosTotalGrowMonthlyPercent =
    Math.round((1 - photosTotalMonthPrevious / photosTotalMonthCurrent + 0.00001) * 1000) / 10;
  const photosTotalGrowDailyPercent = Math.round((1 - photosTotalDayPrevious / photosTotalDayCurrent + 0.00001) * 1000) / 10;

  const photosPremiumGrowMonthlyPercent =
    Math.round((1 - photosPremiumMonthPrevious / photosPremiumMonthCurrent + 0.00001) * 1000) / 10;
  const photosPremiumGrowDailyPercent = Math.round((1 - photosPremiumDayPrevious / photosPremiumDayCurrent + 0.00001) * 1000) / 10;

  return (
    <Grid stackable>
      <Grid.Row columns={4}>
        <Grid.Column>
          <Segment textAlign="center">
            <Label attached="bottom" color={doesPhotosTotalGrowMonthly ? 'green' : 'red'}>
              <Icon name={doesPhotosTotalGrowMonthly ? 'arrow up' : 'arrow down'} />
              {`${photosTotalGrowMonthlyPercent}%`}
            </Label>
            <Statistic size="tiny">
              <Statistic.Value>
                {photosTotalMonthCurrent}
              </Statistic.Value>
              <Statistic.Label>Total Photos Monthly</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            <Label attached="bottom" color={doesPhotosTotalGrowDaily ? 'green' : 'red'}>
              <Icon name={doesPhotosTotalGrowDaily ? 'arrow up' : 'arrow down'} /> {`${photosTotalGrowDailyPercent}%`}
            </Label>
            <Statistic size="tiny">
              <Statistic.Value>
                {photosTotalDayCurrent}
              </Statistic.Value>
              <Statistic.Label>Total Photos Daily</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            <Label attached="bottom" color={doesPhotosPremiumGrowMonthly ? 'green' : 'red'}>
              <Icon name={doesPhotosPremiumGrowMonthly ? 'arrow up' : 'arrow down'} />
              {`${photosPremiumGrowMonthlyPercent}%`}
            </Label>
            <Statistic size="tiny">
              <Statistic.Value>
                {photosPremiumMonthCurrent}
              </Statistic.Value>
              <Statistic.Label>Premium Photos Monthly</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            <Label attached="bottom" color={doesPhotosPremiumGrowDaily ? 'green' : 'red'}>
              <Icon name={doesPhotosPremiumGrowDaily ? 'arrow up' : 'arrow down'} /> {`${photosPremiumGrowDailyPercent}%`}
            </Label>
            <Statistic size="tiny">
              <Statistic.Value>
                {photosPremiumDayCurrent}
              </Statistic.Value>
              <Statistic.Label>Premium Photos Daily</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default PhotoStats;
