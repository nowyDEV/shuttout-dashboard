import React from 'react';
import { shape, array, bool, string} from 'prop-types';
import { Line } from 'react-chartjs-2';

const NewUsersChart = props =>
  <div>
    <Line
      data={props.newUsersData}
      width={100}
      height={50}
      options={{
        title: {
          display: props.displayTitle,
          text: 'New Users visits per day'
        },
        legend: {
          display: props.displayLegend,
          position: props.legendPosition
        },
        maintainAspectRatio: true
      }}
    />
  </div>;

NewUsersChart.propTypes = {
  newUsersData: shape({
    datasets: array.isRequired,
    labels: array.isRequired
  }).isRequired,
  displayTitle: bool.isRequired,
  displayLegend: bool.isRequired,
  legendPosition: string.isRequired
};

export default NewUsersChart;
