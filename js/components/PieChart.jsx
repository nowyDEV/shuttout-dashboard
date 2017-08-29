// @flow

import React from 'react'
import { Pie } from 'react-chartjs-2'

const PieChart = (props: {
  data: ChartjsData,
  displayTitle: boolean,
  displayLegend: boolean,
  legendPosition: string
}) => (
  <div>
    <Pie
      data={props.data}
      width={100}
      height={50}
      options={{
        title: {
          display: props.displayTitle,
          text: 'Browser popularity'
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

export default PieChart
