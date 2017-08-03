// @flow

import React from 'react';
import { Segment, Statistic } from 'semantic-ui-react';

const AdditionalStats = (props: { exitRate: string, bounceRate: string, uniquePageviews: number }) =>
  <Segment inverted>
    <Statistic.Group size="small" widths="three">
      <Statistic inverted value={props.exitRate} label="Exit Rate" />
      <Statistic inverted color="yellow" value={props.bounceRate} label="Bounce Rate" />
      <Statistic inverted color="teal" value={props.uniquePageviews} label="Unique Pageviews" />
    </Statistic.Group>
  </Segment>;

export default AdditionalStats;
