// @flow

import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import PhotoPanel from './PhotoPanel';
import BrowserChart from './BrowserChart';
import DeviceChart from './DeviceChart';
import NewUsersChart from './NewUsersChart';
import RegisteredUsersChart from './RegisteredUsersChart';
import BaseStats from './BaseStats';
import AdditionalStats from './AdditionalStats';

const DisplayPanel = (props: { data: gapiData, shuttoutData: gapiData }) =>
  <Container text style={{ marginTop: '5em' }}>
    <PhotoPanel
      lastUploadedData={props.shuttoutData.photoLastUploaded}
      ofTheDayData={props.shuttoutData.photoOfTheDay}
    />
    <BaseStats pageViewsMonth={props.data.pageViewsMonth} pageViewsDay={props.data.pageViewsDay} />
    <Divider />
    <RegisteredUsersChart
      customTitle={'Registered Users'}
      registeredUsersData={props.data.registeredUsers}
      legendPosition="bottom"
      displayLegend={false}
      displayTitle
    />
    <Divider />
    <RegisteredUsersChart
      customTitle={'Entry Fees'}
      registeredUsersData={props.shuttoutData.entryFees}
      legendPosition="bottom"
      displayLegend={false}
      displayTitle
    />
    <Divider />
    <RegisteredUsersChart
      customTitle={'Money Payed Out'}
      registeredUsersData={props.shuttoutData.goldPayedOut}
      legendPosition="bottom"
      displayLegend={false}
      displayTitle
    />
    <Divider />
    <RegisteredUsersChart
      customTitle={'Total Gold'}
      registeredUsersData={props.shuttoutData.goldTotal}
      legendPosition="bottom"
      displayLegend={false}
      displayTitle
    />
    <Divider />
    <RegisteredUsersChart
      customTitle={'Total number of Photos'}
      registeredUsersData={props.shuttoutData.photosTotal}
      legendPosition="bottom"
      displayLegend={false}
      displayTitle
    />
    <Divider />
    <Divider />
    <RegisteredUsersChart
      customTitle={'Number of Premium Photos'}
      registeredUsersData={props.shuttoutData.photosPremium}
      legendPosition="bottom"
      displayLegend={false}
      displayTitle
    />
    <Divider />
    <RegisteredUsersChart
      customTitle={'Total Votes'}
      registeredUsersData={props.shuttoutData.votesTotal}
      legendPosition="bottom"
      displayLegend={false}
      displayTitle
    />
    <Divider />
    <NewUsersChart newUsersData={props.data.newUsers} legendPosition="bottom" displayLegend={false} displayTitle />
    <Divider />
    <DeviceChart userDeviceData={props.data.userDevice} legendPosition="bottom" displayLegend displayTitle />
    <Divider />
    <BrowserChart browserData={props.data.browsers} legendPosition="bottom" displayLegend={false} displayTitle />
    <Divider />
    <AdditionalStats
      exitRate={parseFloat(props.data.exitRate).toFixed(2)}
      bounceRate={parseFloat(props.data.bounceRate).toFixed(2)}
      uniquePageviews={props.data.uniquePageviews}
    />
  </Container>;

export default DisplayPanel;
