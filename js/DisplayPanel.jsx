// @flow

import React from 'react';
import { Container, Divider, Grid } from 'semantic-ui-react';
import PhotoPanel from './PhotoPanel';
import BrowserChart from './BrowserChart';
import DeviceChart from './DeviceChart';
import NewUsersChart from './NewUsersChart';
import RegisteredUsersChart from './RegisteredUsersChart';
import BaseStats from './BaseStats';
import AdditionalStats from './AdditionalStats';
import MixedChart from './MixedChart';
import BarChart from './BarChart'

const DisplayPanel = (props: { data: gapiData, shuttoutData: gapiData }) =>
  <Container text style={{ marginTop: '5em' }}>
    <PhotoPanel
      lastUploadedData={props.shuttoutData.photoLastUploaded}
      ofTheDayData={props.shuttoutData.photoOfTheDay}
    />
    <BaseStats
      pageViewsMonth={props.data.pageViewsMonth}
      pageViewsMonthPrevious={props.data.pageViewsMonthPrevious}
      pageViewsDay={props.data.pageViewsDay}
      pageViewsDayPrevious={props.data.pageViewsDayPrevious}
    />
    <Divider />
    <MixedChart dataOne={props.shuttoutData.photosTotal} dataTwo={props.shuttoutData.photosPremium} />
    <Divider />
    <RegisteredUsersChart
      customTitle={'Registered Users'}
      registeredUsersData={props.data.registeredUsers}
      legendPosition="bottom"
      displayLegend={false}
      displayTitle
    />
    <Divider />
    <BarChart
      customTitle={'Entry Fees'}
      data={props.shuttoutData.entryFees}
      legendPosition="bottom"
      displayLegend={false}
      displayTitle
    />
    <Divider />
    <MixedChart dataOne={props.shuttoutData.goldTotal} dataTwo={props.shuttoutData.goldPayedOut} />
    <Divider />
    <BarChart
      customTitle={'Total Votes'}
      data={props.shuttoutData.votesTotal}
      legendPosition="bottom"
      displayLegend={false}
      displayTitle
    />
    <Divider />
    <NewUsersChart newUsersData={props.data.newUsers} legendPosition="bottom" displayLegend={false} displayTitle />
    <Divider />
    <Grid doubling columns={2}>
      <Grid.Column>
        <DeviceChart userDeviceData={props.data.userDevice} legendPosition="bottom" displayLegend displayTitle />
      </Grid.Column>
      <Grid.Column>
        <BrowserChart browserData={props.data.browsers} legendPosition="bottom" displayLegend displayTitle />
      </Grid.Column>
    </Grid>
    <Divider />
    <AdditionalStats
      exitRate={parseFloat(props.data.exitRate).toFixed(2)}
      bounceRate={parseFloat(props.data.bounceRate).toFixed(2)}
    />
  </Container>;

export default DisplayPanel;
