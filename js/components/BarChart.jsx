// @flow

import React from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = (props: {
  data: ChartjsData,
  displayTitle: boolean,
  displayLegend: boolean,
  legendPosition: string,
  customTitle: string
}) => (
  <div>
    <Bar
      data={props.data}
      width={100}
      height={50}
      options={{
        title: {
          display: props.displayTitle,
          text: props.customTitle
        },
        legend: {
          display: props.displayLegend,
          position: props.legendPosition
        },
        maintainAspectRatio: true
      }}
    />
  </div>
)

export default BarChart
