// @flow

import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import BrowserChart from './BrowserChart';
import DeviceChart from './DeviceChart';
import NewUsersChart from './NewUsersChart';
import RegisteredUsersChart from './RegisteredUsersChart';
import BaseStats from './BaseStats';
import AdditionalStats from './AdditionalStats';

const DisplayPanel = (props: { data: gapiData }) =>
  <Container text style={{ marginTop: '5em' }}>
    {console.log(props.data)}
    <BaseStats
      pageViewsMonth={props.data.pageViewsMonth}
      pageViewsDay={props.data.pageViewsDay}
    />
    <Divider />
    <RegisteredUsersChart
      registeredUsersData={props.data.registeredUsers}
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
