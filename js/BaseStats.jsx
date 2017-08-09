// @flow

import React from 'react';
import { Statistic, Icon } from 'semantic-ui-react';

const BaseStats = (props: {
  pageViewsMonth: number,
  pageViewsDay: number,
  pageViewsMonthPrevious: number,
  pageViewsDayPrevious: number
}) =>
  <Statistic.Group widths="two">
    <Statistic horizontal>
      <Statistic.Value>
        <Icon name={props.pageViewsMonth > props.pageViewsMonthPrevious ? 'arrow up' : 'arrow down'} />
        {props.pageViewsMonth}
      </Statistic.Value>
      <Statistic.Label>Monthly Views</Statistic.Label>
    </Statistic>
    <Statistic horizontal>
      <Statistic.Value>
        <Icon name={props.pageViewsDay > props.pageViewsDayPrevious ? 'arrow up' : 'arrow down'} />
        {props.pageViewsDay}
      </Statistic.Value>
      <Statistic.Label>Daily Views</Statistic.Label>
    </Statistic>
  </Statistic.Group>;

export default BaseStats;
