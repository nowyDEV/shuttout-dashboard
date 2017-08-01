import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DeviceChart = props =>
  <div>
    <Doughnut
      data={props.userDeviceData}
      width={100}
      height={50}
      options={{
        title: {
          display: props.displayTitle,
          text: 'Device popularity'
        },
        legend: {
          display: props.displayLegend,
          position: props.legendPosition
        },
        maintainAspectRatio: true
      }}
    />
  </div>;

export default DeviceChart;
