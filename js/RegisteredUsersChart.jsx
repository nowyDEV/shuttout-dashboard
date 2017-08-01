import React from 'react';
import { Bar } from 'react-chartjs-2';

const RegisteredUsersChart = props =>
  <div>
    <Bar
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

export default RegisteredUsersChart;
