// @flow

import React from 'react';
import { Bar } from 'react-chartjs-2';

const BrowserChart = (props: {
  browserData: ChartjsData,
  displayTitle: boolean,
  displayLegend: boolean,
  legendPosition: string
}) =>
  <div>
    <Bar
      data={props.browserData}
      width={100}
      height={50}
      options={{
        title: {
          display: props.displayTitle,
          text: 'Browser popularity'
        },
        legend: {
          display: props.displayLegend,
          position: props.legendPosition
        },
        maintainAspectRatio: true
      }}
    />
  </div>;

export default BrowserChart;
