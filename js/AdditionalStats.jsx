import React from 'react';
import { number, string } from 'prop-types';
import { Segment, Statistic } from 'semantic-ui-react';

const AdditionalStats = props =>
  <Segment inverted>
    <Statistic.Group size='small' widths="three">
      <Statistic inverted value={props.exitRate} label="Exit Rate" />
      <Statistic inverted color="yellow" value={props.bounceRate} label="Bounce Rate" />
      <Statistic inverted color="teal" value={props.uniquePageviews} label="Unique Pageviews" />
    </Statistic.Group>
  </Segment>;

AdditionalStats.propTypes = {
  exitRate: string.isRequired,
  bounceRate: string.isRequired,
  uniquePageviews: number.isRequired,
}

export default AdditionalStats;
