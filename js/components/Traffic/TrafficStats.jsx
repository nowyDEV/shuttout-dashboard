// @flow

import React from 'react'
import { Statistic, Icon, Label, Segment, Grid } from 'semantic-ui-react'
import CompareNumbers from '../../utils/compare_numbers'

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
  const {
    visitorsMonth,
    visitorsMonthPrevious,
    visitorsDay,
    visitorsDayPrevious,
    activeUsersMonth,
    activeUsersMonthPrevious,
    activeUsersDay,
    activeUsersDayPrevious,
    registrationsMonth,
    registrationsMonthPrevious,
    registrationsDay,
    registrationsDayPrevious,
    registeredTotalUsers
  } = props

  const doesVisitorsGrowMonthly = visitorsMonth > visitorsMonthPrevious
  const doesVisitorsGrowDaily = visitorsDay > visitorsDayPrevious
  const visitorsGrowMonthlyPercent = CompareNumbers(visitorsMonth, visitorsMonthPrevious)
  const visitorsGrowDailyPercent = CompareNumbers(visitorsDay, visitorsDayPrevious)

  const doesActiveUsersGrowMonthly = activeUsersMonth > activeUsersMonthPrevious
  const doesActiveUsersGrowDaily = activeUsersDay > activeUsersDayPrevious
  const activeUsersGrowMonthlyPercent = CompareNumbers(activeUsersMonth, activeUsersMonthPrevious)
  const activeUsersGrowDailyPercent = CompareNumbers(activeUsersDay, activeUsersDayPrevious)

  const doesRegistrationsGrowMonthly = registrationsMonth > registrationsMonthPrevious
  const doesRegistrationsGrowDaily = registrationsDay > registrationsDayPrevious
  const registrationsGrowMonthlyPercent = CompareNumbers(registrationsMonth, registrationsMonthPrevious)
  const registrationsGrowDailyPercent = CompareNumbers(registrationsDay, registrationsDayPrevious)

  return (
    <Grid stackable divided="vertically">
      <Grid.Row columns={4}>
        <Grid.Column>
          <Segment textAlign="center">
            <Label attached="bottom" color={doesVisitorsGrowMonthly ? 'green' : 'red'}>
              <Icon name={doesVisitorsGrowMonthly ? 'arrow up' : 'arrow down'} />
              {`${visitorsGrowMonthlyPercent}%`}
            </Label>
            <Statistic size="tiny">
              <Statistic.Value>{visitorsMonth}</Statistic.Value>
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
              <Statistic.Value>{visitorsDay}</Statistic.Value>
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
              <Statistic.Value>{activeUsersMonth}</Statistic.Value>
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
              <Statistic.Value>{activeUsersDay}</Statistic.Value>
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
              <Statistic.Value>{registrationsMonth}</Statistic.Value>
              <Statistic.Label>Monthly Registrations</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            <Label attached="bottom" color={doesRegistrationsGrowDaily ? 'green' : 'red'}>
              <Icon name={doesRegistrationsGrowDaily ? 'arrow up' : 'arrow down'} />{' '}
              {`${registrationsGrowDailyPercent}%`}
            </Label>
            <Statistic size="tiny">
              <Statistic.Value>{registrationsDay}</Statistic.Value>
              <Statistic.Label>Daily Registrations</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            <Statistic size="tiny">
              <Statistic.Value>{registeredTotalUsers}</Statistic.Value>
              <Statistic.Label>Registrations Total</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default TrafficStats
