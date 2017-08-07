// @flow

import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import BrowserChart from './BrowserChart';
import DeviceChart from './DeviceChart';
import NewUsersChart from './NewUsersChart';
import RegisteredUsersChart from './RegisteredUsersChart';
import BaseStats from './BaseStats';
import AdditionalStats from './AdditionalStats';

const DisplayPanel = (props: { googleData: Data }) =>
  <Container text style={{ marginTop: '5em' }}>
    <BaseStats
      pageViewsMonth={props.googleData.pageViewsMonth}
      pageViewsDay={props.googleData.pageViewsDay}
    />
    <Divider />
    <RegisteredUsersChart
      registeredUsersData={props.googleData.registeredUsers}
      legendPosition="bottom"
      displayLegend={false}
      displayTitle
    />
    <Divider />
    <NewUsersChart newUsersData={props.googleData.newUsers} legendPosition="bottom" displayLegend={false} displayTitle />
    <Divider />
    <DeviceChart userDeviceData={props.googleData.userDevice} legendPosition="bottom" displayLegend displayTitle />
    <Divider />
    <BrowserChart browserData={props.googleData.browsers} legendPosition="bottom" displayLegend={false} displayTitle />
    <Divider />
    <AdditionalStats
      exitRate={parseFloat(props.googleData.exitRate).toFixed(2)}
      bounceRate={parseFloat(props.googleData.bounceRate).toFixed(2)}
      uniquePageviews={props.googleData.uniquePageviews}
    />
  </Container>;

export default DisplayPanel;
