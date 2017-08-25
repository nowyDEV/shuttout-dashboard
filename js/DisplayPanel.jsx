// @flow

import React, { Component } from 'react';
import { Container, Grid, Transition, Segment, Header, Icon, Divider } from 'semantic-ui-react';

import TopMenu from './TopMenu';
import PhotoPanel from './PhotoPanel';
import BaseStats from './BaseStats';
import AdditionalStats from './AdditionalStats';
import PieChart from './PieChart';
import DoughnutChart from './DoughnutChart';
import HorizontalBarChart from './HorizontalBarChart';
import MixedChart from './MixedChart';
import BarChart from './BarChart';

import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

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

  props: { data: apiData, shuttoutData: apiData };

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
        <Container textAlign='center' style={{ marginTop: '5em' }}>
          <Segment>
            <div>
              <Transition visible={this.state.photoPanel} animation="scale" duration={500}>
                <div>
                  <PhotoPanel
                    lastUploadedData={shuttoutData.photoLastUploaded}
                    ofTheDayData={shuttoutData.photoOfTheDay}
                    biggestPrizeData={shuttoutData.photoBiggestPrize}
                    unmountOnHide
                  />
                </div>
              </Transition>
            </div>
          </Segment>
          <Segment>
            <Header as="h2" icon textAlign="center">
              <Icon name="users" circular />
              <Header.Content>Traffic</Header.Content>
            </Header>
            <Transition visible={this.state.baseStats} animation="fade right" duration={500}>
              <div>
                <BaseStats
                  visitorsMonth={data.visitorsMonth}
                  visitorsMonthPrevious={data.visitorsMonthPrevious}
                  visitorsDay={data.visitorsDay}
                  visitorsDayPrevious={data.visitorsDayPrevious}
                  activeUsersMonth={data.activeUsersMonth}
                  activeUsersMonthPrevious={data.activeUsersMonthPrevious}
                  activeUsersDay={data.activeUsersDay}
                  activeUsersDayPrevious={data.activeUsersDayPrevious}
                  unmountOnHide
                />
                <Divider />
              </div>
            </Transition>
            <Transition visible={this.state.registeredUsers} animation="fade up" duration={500}>
              <div>
                <HorizontalBarChart
                  customTitle={'Registered Users'}
                  data={data.registeredUsers}
                  legendPosition="bottom"
                  displayLegend={false}
                  displayTitle
                  unmountOnHide
                />
                <Divider />
              </div>
            </Transition>
          </Segment>
          <Segment>
            <Header as="h2" icon textAlign="center">
              <Icon name="photo" circular />
              <Header.Content>Content</Header.Content>
            </Header>
            <div>
              <Transition visible={this.state.photosChart} animation="fade down" duration={500}>
                <div>
                  <MixedChart dataOne={shuttoutData.photosTotal} dataTwo={shuttoutData.photosPremium} unmountOnHide />
                </div>
              </Transition>
            </div>
          </Segment>
          <Segment>
            <Header as="h2" icon textAlign="center">
              <Icon name="money" circular />
              <Header.Content>Business</Header.Content>
            </Header>
          </Segment>
          <div>
            <Transition visible={this.state.entryFees} animation="fade down" duration={500}>
              <div>
                <BarChart
                  customTitle={'Entry Fees'}
                  data={shuttoutData.entryFees}
                  legendPosition="bottom"
                  displayLegend={false}
                  displayTitle
                  unmountOnHide
                />
              </div>
            </Transition>
          </div>
          <div>
            <Transition visible={this.state.goldChart} animation="fade up" duration={500}>
              <div>
                <MixedChart dataOne={shuttoutData.goldTotal} dataTwo={shuttoutData.goldPayedOut} unmountOnHide />
              </div>
            </Transition>
          </div>
          <div>
            <Transition visible={this.state.totalVotes} animation="fade down" duration={500}>
              <div>
                <BarChart
                  customTitle={'Total Votes'}
                  data={shuttoutData.votesTotal}
                  legendPosition="bottom"
                  displayLegend={false}
                  displayTitle
                  unmountOnHide
                />
              </div>
            </Transition>
          </div>
          <div>
            <Transition visible={this.state.deviceAndBrowser} animation="scale" duration={500}>
              <div>
                <Grid doubling columns={2}>
                  <Grid.Column>
                    <DoughnutChart
                      data={data.userDevice}
                      legendPosition="bottom"
                      displayLegend
                      displayTitle
                      unmountOnHide
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <PieChart data={data.browsers} legendPosition="bottom" displayLegend displayTitle unmountOnHide />
                  </Grid.Column>
                </Grid>
              </div>
            </Transition>
          </div>
          <div>
            <Transition visible={this.state.additionalStats} animation="fade left" duration={500}>
              <div>
                <AdditionalStats
                  exitRate={parseFloat(data.exitRate).toFixed(2)}
                  bounceRate={parseFloat(data.bounceRate).toFixed(2)}
                  unmountOnHide
                />
              </div>
            </Transition>
          </div>
        </Container>
      </div>
    );
  }
}

export default DisplayPanel;
