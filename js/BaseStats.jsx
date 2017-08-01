import React from 'react';
import { Statistic } from 'semantic-ui-react';

const BaseStats = props =>
  <Statistic.Group widths="two">
    <Statistic horizontal value={props.pageViewsMonth} label="Monthly Views" />
    <Statistic horizontal value={props.pageViewsDay} label="Daily Views" />
  </Statistic.Group>;

export default BaseStats;
