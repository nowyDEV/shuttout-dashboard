// @flow

import React, { Component } from 'react';
import { Container, Divider, Grid } from 'semantic-ui-react';
import TopMenu from './TopMenu';
import PhotoPanel from './PhotoPanel';
import BaseStats from './BaseStats';
import AdditionalStats from './AdditionalStats';
import PieChart from './PieChart';
import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart';
import HorizontalBarChart from './HorizontalBarChart';
import MixedChart from './MixedChart';
import BarChart from './BarChart';

class DisplayPanel extends Component {
  state = {
    sidemenuVisible: false,
    activeItem: false,
    photoPanel: true,
    baseStats: true,
    photosChart: true,
    registeredUsers: true,
    entryFees: true,
    goldChart: true,
    totalVotes: true,
    newUsers: true,
    deviceAndBrowser: true,
    additionalStats: true
  };

  props: { data: gapiData, shuttoutData: gapiData };

  handleCheckboxChange = (event: Event, data: Object) => {
    this.setState({ [data.name]: data.checked });
  };

  handleMenuClick = () => {
    this.setState({
      activeItem: !this.state.activeItem,
      sidemenuVisible: !this.state.sidemenuVisible
    });
  };

  render() {
    const { data, shuttoutData } = this.props;
    return (
      <div>
        <TopMenu
          sidemenuVisible={this.state.sidemenuVisible}
          activeItem={this.state.activeItem}
          handleCheckboxChange={this.handleCheckboxChange}
          handleMenuClick={this.handleMenuClick}
        />
        <Container text style={{ marginTop: '5em' }}>
          {this.state.photoPanel
            ? <PhotoPanel lastUploadedData={shuttoutData.photoLastUploaded} ofTheDayData={shuttoutData.photoOfTheDay} />
            : null}
          {this.state.baseStats
            ? <BaseStats
                pageViewsMonth={data.pageViewsMonth}
                pageViewsMonthPrevious={data.pageViewsMonthPrevious}
                pageViewsDay={data.pageViewsDay}
                pageViewsDayPrevious={data.pageViewsDayPrevious}
                photosTotalAmount={shuttoutData.photosTotal.totalAmount}
                photosPremiumAmount={shuttoutData.photosPremium.totalAmount}
              />
            : null}
          <Divider />
          {this.state.photosChart
            ? <MixedChart dataOne={shuttoutData.photosTotal} dataTwo={shuttoutData.photosPremium} />
            : null}
          <Divider />
          {this.state.registeredUsers
            ? <HorizontalBarChart
                customTitle={'Registered Users'}
                data={data.registeredUsers}
                legendPosition="bottom"
                displayLegend={false}
                displayTitle
              />
            : null}
          <Divider />
          {this.state.entryFees
            ? <BarChart
                customTitle={'Entry Fees'}
                data={shuttoutData.entryFees}
                legendPosition="bottom"
                displayLegend={false}
                displayTitle
              />
            : null}
          <Divider />
          {this.state.goldChart
            ? <MixedChart dataOne={shuttoutData.goldTotal} dataTwo={shuttoutData.goldPayedOut} />
            : null}
          <Divider />
          {this.state.totalVotes
            ? <BarChart
                customTitle={'Total Votes'}
                data={shuttoutData.votesTotal}
                legendPosition="bottom"
                displayLegend={false}
                displayTitle
              />
            : null}
          <Divider />
          {this.state.newUsers
            ? <LineChart data={data.newUsers} legendPosition="bottom" displayLegend={false} displayTitle />
            : null}
          <Divider />
          {this.state.deviceAndBrowser
            ? <Grid doubling columns={2}>
                <Grid.Column>
                  <DoughnutChart data={data.userDevice} legendPosition="bottom" displayLegend displayTitle />
                </Grid.Column>
                <Grid.Column>
                  <PieChart data={data.browsers} legendPosition="bottom" displayLegend displayTitle />
                </Grid.Column>
              </Grid>
            : null}

          <Divider />
          {this.state.additionalStats
            ? <AdditionalStats
                exitRate={parseFloat(data.exitRate).toFixed(2)}
                bounceRate={parseFloat(data.bounceRate).toFixed(2)}
              />
            : null}
        </Container>
      </div>
    );
  }
}

export default DisplayPanel;
