// @flow

import React from 'react'
import Carousel from 'react-slick'
import { Divider } from 'semantic-ui-react'
import MixedChart from '../MixedChart'

import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'

const PhotoChart = (props: {
  photosTotalMonth: ChartjsData,
  photosTotalDay: ChartjsData,
  photosPremiumMonth: ChartjsData,
  photosPremiumDay: ChartjsData,
  visible: boolean
}) => {
  if (props.visible) {
    return (
      <div>
        <Divider />
        <Carousel
          className="traffic-carousel"
          swipe
          touchMove
          draggable
          dots={false}
          autoplay
          arrows={false}
          autoplaySpeed="5000"
          style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div>
            <MixedChart dataOne={props.photosTotalDay} dataTwo={props.photosPremiumDay} />
          </div>
          <div>
            <MixedChart dataOne={props.photosTotalMonth} dataTwo={props.photosPremiumMonth} />
          </div>
        </Carousel>
      </div>
    )
  }
  return <div />
}

export default PhotoChart
