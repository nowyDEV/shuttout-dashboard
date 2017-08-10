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
    display: {
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
    }
  };

  props: { data: gapiData, shuttoutData: gapiData };

  render() {
    const { data, shuttoutData } = this.props;
    return (
      <div>
        <TopMenu />
        <Container text style={{ marginTop: '5em' }}>
          {this.state.display.photoPanel
            ? <PhotoPanel lastUploadedData={shuttoutData.photoLastUploaded} ofTheDayData={shuttoutData.photoOfTheDay} />
            : null}
          {this.state.display.photoPanel
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
          {this.state.display.photosChart
            ? <MixedChart dataOne={shuttoutData.photosTotal} dataTwo={shuttoutData.photosPremium} />
            : null}
          <Divider />
          {this.state.display.registeredUsers
            ? <HorizontalBarChart
                customTitle={'Registered Users'}
                data={data.registeredUsers}
                legendPosition="bottom"
                displayLegend={false}
                displayTitle
              />
            : null}
          <Divider />
          {this.state.display.entryFees
            ? <BarChart
                customTitle={'Entry Fees'}
                data={shuttoutData.entryFees}
                legendPosition="bottom"
                displayLegend={false}
                displayTitle
              />
            : null}
          <Divider />
          {this.state.display.goldChart
            ? <MixedChart dataOne={shuttoutData.goldTotal} dataTwo={shuttoutData.goldPayedOut} />
            : null}
          <Divider />
          {this.state.display.votesTotal
            ? <BarChart
                customTitle={'Total Votes'}
                data={shuttoutData.votesTotal}
                legendPosition="bottom"
                displayLegend={false}
                displayTitle
              />
            : null}
          <Divider />
          {this.state.display.newUsers
            ? <LineChart data={data.newUsers} legendPosition="bottom" displayLegend={false} displayTitle />
            : null}
          <Divider />
          {this.state.display.deviceAndBrowser
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
          {this.state.display.additionalStats
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
