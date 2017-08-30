// @flow

import React from 'react'
import { Statistic, Icon, Label, Segment, Grid } from 'semantic-ui-react'
import CompareNumbers from '../../utils/compare_numbers'

const PhotoStats = (props: {
  photosTotalMonth: ChartjsData,
  photosTotalDay: ChartjsData,
  photosPremiumMonth: ChartjsData,
  photosPremiumDay: ChartjsData
}) => {
  const { photosTotalMonth, photosTotalDay, photosPremiumMonth, photosPremiumDay } = props

  const photosTotalMonthCurrent = parseInt(photosTotalMonth.datasets[0].data[11], 10)
  const photosTotalMonthPrevious = parseInt(photosTotalMonth.datasets[0].data[10], 10)
  const doesPhotosTotalGrowMonthly = photosTotalMonthCurrent > photosTotalMonthPrevious
  const photosTotalGrowMonthlyPercent = CompareNumbers(photosTotalMonthCurrent, photosTotalMonthPrevious)

  const photosTotalDayCurrent = parseInt(photosTotalDay.datasets[0].data[6], 10)
  const photosTotalDayPrevious = parseInt(photosTotalDay.datasets[0].data[5], 10)
  const doesPhotosTotalGrowDaily = photosTotalDayCurrent > photosTotalDayPrevious
  const photosTotalGrowDailyPercent = CompareNumbers(photosTotalDayCurrent, photosTotalDayPrevious)

  const photosPremiumMonthCurrent = parseInt(photosPremiumMonth.datasets[0].data[11], 10)
  const photosPremiumMonthPrevious = parseInt(photosPremiumMonth.datasets[0].data[10], 10)
  const doesPhotosPremiumGrowMonthly = photosPremiumMonthCurrent > photosPremiumMonthPrevious
  const photosPremiumGrowMonthlyPercent = CompareNumbers(photosPremiumMonthCurrent, photosPremiumMonthPrevious)

  const photosPremiumDayCurrent = parseInt(photosPremiumDay.datasets[0].data[6], 10)
  const photosPremiumDayPrevious = parseInt(photosPremiumDay.datasets[0].data[5], 10)
  const doesPhotosPremiumGrowDaily = photosPremiumDayCurrent > photosPremiumDayPrevious
  const photosPremiumGrowDailyPercent = CompareNumbers(photosPremiumDayCurrent, photosPremiumDayPrevious)

  return (
    <Grid stackable>
      <Grid.Row columns={4}>
        <Grid.Column>
          <Segment textAlign="center">
            <Label attached="bottom" color={doesPhotosTotalGrowMonthly ? 'green' : 'red'}>
              <Icon name={doesPhotosTotalGrowMonthly ? 'arrow up' : 'arrow down'} />
              {`${photosTotalGrowMonthlyPercent}%`}
            </Label>
            <Statistic size="tiny">
              <Statistic.Value>{photosTotalMonthCurrent}</Statistic.Value>
              <Statistic.Label>Total Photos Monthly</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            <Label attached="bottom" color={doesPhotosTotalGrowDaily ? 'green' : 'red'}>
              <Icon name={doesPhotosTotalGrowDaily ? 'arrow up' : 'arrow down'} /> {`${photosTotalGrowDailyPercent}%`}
            </Label>
            <Statistic size="tiny">
              <Statistic.Value>{photosTotalDayCurrent}</Statistic.Value>
              <Statistic.Label>Total Photos Daily</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            <Label attached="bottom" color={doesPhotosPremiumGrowMonthly ? 'green' : 'red'}>
              <Icon name={doesPhotosPremiumGrowMonthly ? 'arrow up' : 'arrow down'} />
              {`${photosPremiumGrowMonthlyPercent}%`}
            </Label>
            <Statistic size="tiny">
              <Statistic.Value>{photosPremiumMonthCurrent}</Statistic.Value>
              <Statistic.Label>Premium Photos Monthly</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="center">
            <Label attached="bottom" color={doesPhotosPremiumGrowDaily ? 'green' : 'red'}>
              <Icon name={doesPhotosPremiumGrowDaily ? 'arrow up' : 'arrow down'} />{' '}
              {`${photosPremiumGrowDailyPercent}%`}
            </Label>
            <Statistic size="tiny">
              <Statistic.Value>{photosPremiumDayCurrent}</Statistic.Value>
              <Statistic.Label>Premium Photos Daily</Statistic.Label>
            </Statistic>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default PhotoStats
