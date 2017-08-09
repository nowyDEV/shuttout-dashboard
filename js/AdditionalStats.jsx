// @flow

import React from 'react';
import { Segment, Statistic } from 'semantic-ui-react';

const AdditionalStats = (props: { exitRate: string, bounceRate: string }) =>
  <Segment inverted>
    <Statistic.Group size="small" widths="two">
      <Statistic inverted value={props.exitRate} label="Exit Rates" />
      <Statistic inverted color="yellow" value={props.bounceRate} label="Bounce Rate" />
    </Statistic.Group>
  </Segment>;

export default AdditionalStats;
