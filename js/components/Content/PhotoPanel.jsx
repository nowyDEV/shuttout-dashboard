// @flow

import React from 'react'
import { Image, Divider } from 'semantic-ui-react'
import Carousel from 'react-slick'

import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'

const PhotoPanel = (props: {
  lastUploadedData: ShuttoutPhoto,
  ofTheDayData: ShuttoutPhoto,
  biggestPrizeData: ShuttoutPhoto,
  visible: boolean
}) => {
  if (props.visible) {
    return (
      <div>
        <Divider />
        <Carousel
          className="photo-carousel"
          swipe
          touchMove
          draggable
          dots={false}
          autoplay
          arrows={false}
          autoplaySpeed="5000"
          style={{ maxWidth: '400px', margin: '0 auto' }}>
          <Image
            fluid
            label={{ as: 'a', color: 'black', content: 'Photo of the day', icon: 'like', ribbon: true }}
            src={props.lastUploadedData.data.url}
          />
          <Image
            fluid
            label={{ as: 'a', color: 'black', content: 'Recently uploaded', icon: 'cloud upload', ribbon: true }}
            src={props.ofTheDayData.data.url}
          />
          <Image
            fluid
            label={{ as: 'a', color: 'black', content: 'Biggest Prize', icon: 'dollar', ribbon: true }}
            src={props.biggestPrizeData.data.url}
          />
        </Carousel>
      </div>
    )
  }
  return <div />
}

export default PhotoPanel
