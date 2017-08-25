// @flow

import React from 'react';
import { Statistic, Icon, Divider, Label, Segment, Grid } from 'semantic-ui-react';

const BaseStats = (props: {
  visitorsMonth: number,
  visitorsMonthPrevious: number,
  visitorsDay: number,
  visitorsDayPrevious: number,
  activeUsersMonth: number,
  activeUsersMonthPrevious: number,
  activeUsersDay: number,
  activeUsersDayPrevious: number
}) => {
  const doesVisitorsGrowMonthly = props.visitorsMonth > props.visitorsMonthPrevious;
  const doesVisitorsGrowDaily = props.visitorsDay > props.visitorsDayPrevious;
  const doesActiveUsersGrowMonthly = props.activeUsersMonth > props.activeUsersMonthPrevious;
  const doesActiveUsersGrowDaily = props.activeUsersDay > props.activeUsersDayPrevious;

  const visitorsGrowMonthlyPercent =
    Math.round((1 - props.visitorsMonthPrevious / props.visitorsMonth + 0.00001) * 1000) / 1000;
  const visitorsGrowDailyPercent = Math.round((1 - props.visitorsDayPrevious / props.visitorsDay + 0.00001) * 1000) / 1000;

  const activeUsersGrowMonthlyPercent =
    Math.round((1 - props.activeUsersMonthPrevious / props.activeUsersMonth + 0.00001) * 1000) / 1000;
  const activeUsersGrowDailyPercent = Math.round((1 - props.activeUsersDayPrevious / props.activeUsersDay + 0.00001) * 1000) / 1000;

  return (
    <Grid doubling columns={4}>
      <Grid.Row>
        <Grid.Column>
          <Segment textAlign="center">
            <Label attached="bottom" color={doesVisitorsGrowMonthly ? 'green' : 'red'}>
              <Icon name={doesVisitorsGrowMonthly ? 'arrow up' : 'arrow down'} />
              {`${visitorsGrowMonthlyPercent}%`}
            </Label>
            <Statistic size="tiny">
              <Statistic.Value>
                {props.visitorsMonth}
              </Statistic.Value>
              <Statistic.Label>Monthly Visitors</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            <Label attached="bottom" color={doesVisitorsGrowDaily ? 'green' : 'red'}>
              <Icon name={doesVisitorsGrowDaily ? 'arrow up' : 'arrow down'} /> {`${visitorsGrowDailyPercent}%`}
            </Label>
            <Statistic size="tiny">
              <Statistic.Value>
                {props.visitorsDay}
              </Statistic.Value>
              <Statistic.Label>Daily Visitors</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            <Label attached="bottom" color={doesActiveUsersGrowMonthly ? 'green' : 'red'}>
              <Icon name={doesActiveUsersGrowMonthly ? 'arrow up' : 'arrow down'} />
              {`${activeUsersGrowMonthlyPercent}%`}
            </Label>
            <Statistic size="tiny">
              <Statistic.Value>
                {props.activeUsersMonth}
              </Statistic.Value>
              <Statistic.Label>Monthly Active Users</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            <Label attached="bottom" color={doesActiveUsersGrowDaily ? 'green' : 'red'}>
              <Icon name={doesActiveUsersGrowDaily ? 'arrow up' : 'arrow down'} /> {`${activeUsersGrowDailyPercent}%`}
            </Label>
            <Statistic size="tiny">
              <Statistic.Value>
                {props.visitorsDay}
              </Statistic.Value>
              <Statistic.Label>Daily Active Users</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Divider />
    </Grid>
  );
};

export default BaseStats;
