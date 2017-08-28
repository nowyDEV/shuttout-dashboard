// @flow

import React from 'react';
import { Statistic, Icon, Label, Segment, Grid } from 'semantic-ui-react';

const TrafficStats = (props: {
  visitorsMonth: number,
  visitorsMonthPrevious: number,
  visitorsDay: number,
  visitorsDayPrevious: number,
  activeUsersMonth: number,
  activeUsersMonthPrevious: number,
  activeUsersDay: number,
  activeUsersDayPrevious: number,
  registrationsMonth: number,
  registrationsMonthPrevious: number,
  registrationsDay: number,
  registrationsDayPrevious: number,
  registeredTotalUsers: number
}) => {
  const doesVisitorsGrowMonthly = props.visitorsMonth > props.visitorsMonthPrevious;
  const doesVisitorsGrowDaily = props.visitorsDay > props.visitorsDayPrevious;
  const doesActiveUsersGrowMonthly = props.activeUsersMonth > props.activeUsersMonthPrevious;
  const doesActiveUsersGrowDaily = props.activeUsersDay > props.activeUsersDayPrevious;
  const doesRegistrationsGrowMonthly = props.registrationsMonth > props.registrationsMonthPrevious;
  const doesRegistrationsGrowDaily = props.registrationsDay > props.registrationsDayPrevious;

  const visitorsGrowMonthlyPercent =
    Math.round((1 - props.visitorsMonthPrevious / props.visitorsMonth + 0.00001) * 1000) / 10;
  const visitorsGrowDailyPercent = Math.round((1 - props.visitorsDayPrevious / props.visitorsDay + 0.00001) * 1000) / 10;

  const activeUsersGrowMonthlyPercent =
    Math.round((1 - props.activeUsersMonthPrevious / props.activeUsersMonth + 0.00001) * 1000) / 10;
  const activeUsersGrowDailyPercent = Math.round((1 - props.activeUsersDayPrevious / props.activeUsersDay + 0.00001) * 1000) / 10;

  const registrationsGrowMonthlyPercent =
    Math.round((1 - props.registrationsMonthPrevious / props.registrationsMonth + 0.00001) * 1000) / 10;
  const registrationsGrowDailyPercent = Math.round((1 - props.registrationsDayPrevious / props.registrationsDay + 0.00001) * 1000) / 10;

  return (
    <Grid stackable divided='vertically'>
      <Grid.Row columns={4}>
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
                {props.activeUsersDay}
              </Statistic.Value>
              <Statistic.Label>Daily Active Users</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Segment textAlign="center">
            <Label attached="bottom" color={doesRegistrationsGrowMonthly ? 'green' : 'red'}>
              <Icon name={doesRegistrationsGrowMonthly ? 'arrow up' : 'arrow down'} />
              {`${registrationsGrowMonthlyPercent}%`}
            </Label>
            <Statistic size="tiny">
              <Statistic.Value>
                {props.registrationsMonth}
              </Statistic.Value>
              <Statistic.Label>Monthly Registrations</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            <Label attached="bottom" color={doesRegistrationsGrowDaily ? 'green' : 'red'}>
              <Icon name={doesRegistrationsGrowDaily ? 'arrow up' : 'arrow down'} /> {`${registrationsGrowDailyPercent}%`}
            </Label>
            <Statistic size="tiny">
              <Statistic.Value>
                {props.registrationsDay}
              </Statistic.Value>
              <Statistic.Label>Daily Registrations</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            <Statistic size="tiny">
              <Statistic.Value>
                {props.registeredTotalUsers}
              </Statistic.Value>
              <Statistic.Label>Registrations Total</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default TrafficStats;
