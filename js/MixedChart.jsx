// @flow

import React from 'react';
import { Bar } from 'react-chartjs-2';

const MixedChart = (props: { dataOne: ChartjsData, dataTwo: ChartjsData }) => {
  const data = {
    labels: props.dataOne.labels,
    datasets: [
      {
        label: props.dataTwo.datasets[0].label,
        type: 'line',
        data: props.dataTwo.datasets[0].data,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#EC932F',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-2'
      },
      {
        type: 'bar',
        label: props.dataOne.datasets[0].label,
        data: props.dataOne.datasets[0].data,
        fill: false,
        backgroundColor: '#71B37C',
        borderColor: '#71B37C',
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-1'
      }
    ]
  };
  const options = {
    responsive: true,
    tooltips: {
      mode: 'label'
    },
    elements: {
      line: {
        fill: false
      }
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            display: false
          },
          labels: {
            show: true
          }
        }
      ],
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
          gridLines: {
            display: false
          },
          labels: {
            show: true
          }
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            display: false
          },
          labels: {
            show: true
          }
        }
      ]
    }
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default MixedChart;
