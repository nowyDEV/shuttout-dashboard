import React from 'react';
import { Segment, Statistic } from 'semantic-ui-react';

const AdditionalStats = props =>
  <Segment inverted>
    <Statistic.Group widths="three">
      <Statistic size='tiny' inverted value={parseFloat(props.exitRate).toFixed(2)} label="Exit Rate" />
      <Statistic size='tiny' inverted color="yellow" value={parseFloat(props.bounceRate).toFixed(2)} label="Bounce Rate" />
      <Statistic size='tiny' inverted color="teal" value={props.uniquePageviews} label="Unique Pageviews" />
    </Statistic.Group>
  </Segment>;

export default AdditionalStats;
