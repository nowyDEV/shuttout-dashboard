import React from 'react';
import { shape, array, bool, string} from 'prop-types';
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

DeviceChart.propTypes = {
  userDeviceData: shape({
    datasets: array.isRequired,
    labels: array.isRequired
  }).isRequired,
  displayTitle: bool.isRequired,
  displayLegend: bool.isRequired,
  legendPosition: string.isRequired
}

export default DeviceChart;
