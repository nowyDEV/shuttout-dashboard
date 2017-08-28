// @flow

import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = (props: {
  data: ChartjsData,
  displayTitle: boolean,
  displayLegend: boolean,
  legendPosition: string
}) =>
  <div>
    <Line
      data={props.data}
      width={100}
      height={50}
      options={{
        title: {
          display: props.displayTitle,
          text: 'New User visits per day'
        },
        legend: {
          display: props.displayLegend,
          position: props.legendPosition
        },
        maintainAspectRatio: true
      }}
    />
  </div>;

export default LineChart;
