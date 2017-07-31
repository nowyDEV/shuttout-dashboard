import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

const Chart = props =>
  <div>
    <Bar
      data={props.chartData}
      width={100}
      height={50}
      options={{
        title: {
          display: props.displayTitle,
          text: 'Largest cities in Massachusets'
        },
        legend: {
          display: props.displayLegend,
          position: props.legendPosition
        },
        maintainAspectRatio: true
      }}
    />
    <Line
      data={props.chartData}
      width={100}
      height={50}
      options={{
        title: {
          display: props.displayTitle,
          text: 'Largest cities in Massachusets'
        },
        legend: {
          display: props.displayLegend,
          position: props.legendPosition
        },
        maintainAspectRatio: true
      }}
    />
    <Pie
      data={props.chartData}
      width={100}
      height={50}
      options={{
        title: {
          display: props.displayTitle,
          text: 'Largest cities in Massachusets'
        },
        legend: {
          display: props.displayLegend,
          position: props.legendPosition
        },
        maintainAspectRatio: true
      }}
    />
  </div>;

export default Chart;
