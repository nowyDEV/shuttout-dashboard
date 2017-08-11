// @flow

import React from 'react';
import { Statistic, Icon, Divider } from 'semantic-ui-react';

const BaseStats = (props: {
  pageViewsMonth: number,
  pageViewsMonthPrevious: number,
  pageViewsDay: number,
  pageViewsDayPrevious: number,
  photosTotalAmount: number,
  photosPremiumAmount: number
}) =>
  <div>
    <Statistic.Group size="tiny" widths="two">
      <Statistic>
        <Statistic.Value>
          <Icon name={props.pageViewsMonth > props.pageViewsMonthPrevious ? 'arrow up' : 'arrow down'} />
          {props.pageViewsMonth}
        </Statistic.Value>
        <Statistic.Label>Monthly Visitors</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>
          <Icon name={props.pageViewsDay > props.pageViewsDayPrevious ? 'arrow up' : 'arrow down'} />
          {props.pageViewsDay}
        </Statistic.Value>
        <Statistic.Label>Daily Visitors</Statistic.Label>
      </Statistic>
    </Statistic.Group>
    <Divider />
    <Statistic.Group size="tiny" widths="two">
      <Statistic value={props.photosTotalAmount} label="Total Photos" />
      <Statistic value={props.photosPremiumAmount} label="Premium Photos" />
    </Statistic.Group>
  </div>;

export default BaseStats;
