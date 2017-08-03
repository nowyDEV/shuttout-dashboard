// @flow

import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const RegisteredUsersChart = (props: {
  registeredUsersData: ChartjsData,
  displayTitle: boolean,
  displayLegend: boolean,
  legendPosition: string
}) =>
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

export default RegisteredUsersChart;
