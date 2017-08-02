import React from 'react';
import { shape, array, bool, string } from 'prop-types';
import { Bar } from 'react-chartjs-2';

const BrowserChart = props =>
  <div>
    <Bar
      data={props.browserData}
      width={100}
      height={50}
      options={{
        title: {
          display: props.displayTitle,
          text: 'Browsers popularity'
        },
        legend: {
          display: props.displayLegend,
          position: props.legendPosition
        },
        maintainAspectRatio: true
      }}
    />
  </div>;

BrowserChart.propTypes = {
  browserData: shape({
    datasets: array.isRequired,
    labels: array.isRequired
  }).isRequired,
  displayTitle: bool.isRequired,
  displayLegend: bool.isRequired,
  legendPosition: string.isRequired
};

export default BrowserChart;
