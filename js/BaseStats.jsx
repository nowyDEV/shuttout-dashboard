import React from 'react';
import { number } from 'prop-types';
import { Statistic } from 'semantic-ui-react';

const BaseStats = props =>
  <Statistic.Group widths="two">
    <Statistic horizontal value={props.pageViewsMonth} label="Monthly Views" />
    <Statistic horizontal value={props.pageViewsDay} label="Daily Views" />
  </Statistic.Group>;

BaseStats.propTypes = {
  pageViewsMonth: number.isRequired,
  pageViewsDay: number.isRequired
}

export default BaseStats;
