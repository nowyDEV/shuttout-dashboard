// @flow

import React from 'react';
import { Statistic, Icon, Label, Segment, Grid } from 'semantic-ui-react';

const BusinessStats = (props: {
  entryFees: ChartjsData
}) => {
  const entryFeesMonthCurrent = parseInt(props.entryFees.datasets[0].data[11], 10);
  const entryFeesMonthPrevious = parseInt(props.entryFees.datasets[0].data[10], 10);
  const entryFeesTotal = props.entryFees.totalAmount;

  const doesEntryFeesGrowMonthly = entryFeesMonthCurrent > entryFeesMonthPrevious;

  const entryFeesGrowMonthlyPercent =
    Math.round((1 - entryFeesMonthPrevious / entryFeesMonthCurrent + 0.00001) * 1000) / 10;

  return (
    <Grid stackable>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Segment textAlign="center">
            <Label attached="bottom" color={doesEntryFeesGrowMonthly ? 'green' : 'red'}>
              <Icon name={doesEntryFeesGrowMonthly ? 'arrow up' : 'arrow down'} />
              {`${entryFeesGrowMonthlyPercent}%`}
            </Label>
            <Statistic size="tiny">
              <Statistic.Value>
                {entryFeesMonthCurrent}
              </Statistic.Value>
              <Statistic.Label>Entry Fees Monthly</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            <Statistic size="tiny">
              <Statistic.Value>
                {entryFeesTotal}
              </Statistic.Value>
              <Statistic.Label>Total Entry Fees</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default BusinessStats;
