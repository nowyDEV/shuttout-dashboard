import React from 'react';
import { Statistic } from 'semantic-ui-react';

const BaseStats = props =>
  <div>
    <Statistic horizontal value={props.pageViewsMonth} label="Monthly Views" />
    <Statistic horizontal value={props.pageViewsDay} label="Daily Views" />
  </div>;

export default BaseStats;
