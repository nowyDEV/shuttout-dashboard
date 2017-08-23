// @flow

import React from 'react';
import { Statistic, Icon, Divider, Label, Segment, Grid } from 'semantic-ui-react';

const BaseStats = (props: {
  pageViewsMonth: number,
  pageViewsMonthPrevious: number,
  pageViewsDay: number,
  pageViewsDayPrevious: number,
  photosTotalAmount: number,
  photosPremiumAmount: number
}) => {
  const doesGrowMonthly = props.pageViewsMonth > props.pageViewsMonthPrevious;
  const doesGrowDaily = props.pageViewsDay > props.pageViewsDayPrevious;

  const growMonthlyPercent =
    Math.round((1 - props.pageViewsMonthPrevious / props.pageViewsMonth + 0.00001) * 1000) / 1000;
  const growDailyPercent = Math.round((1 - props.pageViewsDayPrevious / props.pageViewsDay + 0.00001) * 1000) / 1000;

  return (
    <Grid doubling columns={4}>
      <Grid.Row>
        <Grid.Column>
          <Segment textAlign="center">
            <Label attached="bottom" color={doesGrowMonthly ? 'green' : 'red'}>
              <Icon name={doesGrowMonthly ? 'arrow up' : 'arrow down'} />
              {`${growMonthlyPercent}%`}
            </Label>
            <Statistic size="tiny">
              <Statistic.Value>
                {props.pageViewsMonth}
              </Statistic.Value>
              <Statistic.Label>Monthly Visitors</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            <Label attached="bottom" color={doesGrowDaily ? 'green' : 'red'}>
              <Icon name={doesGrowDaily ? 'arrow up' : 'arrow down'} /> {`${growDailyPercent}%`}
            </Label>
            <Statistic size="tiny">
              <Statistic.Value>
                {props.pageViewsDay}
              </Statistic.Value>
              <Statistic.Label>Daily Visitors</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            <Statistic size="tiny" value={props.photosTotalAmount} label="Total Photos" />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            <Statistic size="tiny" value={props.photosPremiumAmount} label="Premium Photos" />
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Divider />
    </Grid>
  );
};

export default BaseStats;
