// @flow

import React from 'react';
import Carousel from 'react-slick';
import MixedChart from './MixedChart';

import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';

const TrafficChart = (props: {
  visitorsDaily: ChartjsData,
  visitorsMonthly: ChartjsData,
  activeUsersDaily: ChartjsData,
  activeUsersMonthly: ChartjsData
}) =>
  <Carousel
    className="traffic-carousel"
    swipe
    touchMove
    draggable
    dots={false}
    autoplay
    arrows={false}
    autoplaySpeed="5000"
    style={{ maxWidth: '400px', margin: '0 auto' }}
  >
    <div>
      <MixedChart
        dataOne={props.visitorsDaily}
        dataTwo={props.activeUsersDaily}
      />
    </div>
    <div>
      <MixedChart
        dataOne={props.visitorsMonthly}
        dataTwo={props.activeUsersMonthly}
      />
    </div>
  </Carousel>;

export default TrafficChart;