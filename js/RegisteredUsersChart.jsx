import React from 'react';
import { shape, array, bool, string} from 'prop-types';
import { HorizontalBar } from 'react-chartjs-2';

const RegisteredUsersChart = props =>
  <div>
    <HorizontalBar
      data={props.registeredUsersData}
      width={100}
      height={50}
      options={{
        title: {
          display: props.displayTitle,
          text: 'Registrations per month'
        },
        legend: {
          display: props.displayLegend,
          position: props.legendPosition
        },
        maintainAspectRatio: true
      }}
    />
  </div>;

RegisteredUsersChart.propTypes = {
  registeredUsersData: shape({
    datasets: array.isRequired,
    labels: array.isRequired
  }).isRequired,
  displayTitle: bool.isRequired,
  displayLegend: bool.isRequired,
  legendPosition: string.isRequired
};

export default RegisteredUsersChart;
