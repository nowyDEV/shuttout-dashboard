// @flow

import React, { Component } from 'react';
import { Container, Transition, Segment, Header, Icon, Divider } from 'semantic-ui-react';

import TopMenu from '../components/TopMenu';
import PhotoPanel from '../components/Content/PhotoPanel';
import PhotoStats from '../components/Content/PhotoStats';
import TrafficStats from '../components/Traffic/TrafficStats';
import AdditionalStats from '../components/AdditionalStats';
import PhotoChart from '../components/Content/PhotoChart';
import BarChart from '../components/BarChart';
import TrafficChart from '../components/Traffic/TrafficChart';
import MixedChart from '../components/MixedChart';
import BusinessStats from '../components/Business/BusinessStats';

import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';

class DisplayPanel extends Component {
  state = {
    sidemenuVisible: false,
    activeItem: false,
    photoPanel: true,
    photoStats: true,
    trafficStats: true,
    trafficChart: true,
    photosChart: true,
    entryFees: true,
    goldChart: true,
    totalVotes: true,
    newUsers: true,
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
        <Container textAlign="center" style={{ marginTop: '5em' }}>
          <Segment>
            <Header as="h2" icon textAlign="center">
              <Icon name="users" circular />
              <Header.Content>Traffic</Header.Content>
            </Header>
            <Transition visible={this.state.trafficStats} animation="fade right" duration={500}>
              <div>
                <TrafficStats
                  visitorsMonth={data.visitorsMonth}
                  visitorsMonthPrevious={data.visitorsMonthPrevious}
                  visitorsDay={data.visitorsDay}
                  visitorsDayPrevious={data.visitorsDayPrevious}
                  activeUsersMonth={data.activeUsersMonth}
                  activeUsersMonthPrevious={data.activeUsersMonthPrevious}
                  activeUsersDay={data.activeUsersDay}
                  activeUsersDayPrevious={data.activeUsersDayPrevious}
                  registrationsMonth={data.registrationsMonth}
                  registrationsMonthPrevious={data.registrationsMonthPrevious}
                  registrationsDay={data.registrationsDay}
                  registrationsDayPrevious={data.registrationsDayPrevious}
                  registeredTotalUsers={data.registeredTotalUsers}
                  unmountOnHide
                />
                <Divider />
              </div>
            </Transition>
            <Transition visible={this.state.trafficChart} animation="fade left" duration={500}>
              <div>
                <TrafficChart
                  visitorsMonthly={data.visitorsMonthly}
                  visitorsDaily={data.visitorsDaily}
                  activeUsersMonthly={data.activeUsersMonthly}
                  activeUsersDaily={data.activeUsersDaily}
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
            <Divider />
            <div>
              <Transition visible={this.state.photoStats} animation="fade down" duration={500}>
                <div>
                  <PhotoStats
                    photosTotalMonth={shuttoutData.photosTotalMonth}
                    photosTotalDay={shuttoutData.photosTotalDay}
                    photosPremiumMonth={shuttoutData.photosPremiumMonth}
                    photosPremiumDay={shuttoutData.photosPremiumDay}
                    unmountOnHide
                  />
                </div>
              </Transition>
            </div>
            <Divider />
            <div>
              <Transition visible={this.state.photosChart} animation="fade down" duration={500}>
                <div>
                  <PhotoChart
                    photosTotalMonth={shuttoutData.photosTotalMonth}
                    photosTotalDay={shuttoutData.photosTotalDay}
                    photosPremiumMonth={shuttoutData.photosPremiumMonth}
                    photosPremiumDay={shuttoutData.photosPremiumDay}
                    unmountOnHide
                  />
                </div>
              </Transition>
            </div>
            <Divider />
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
          </Segment>
          <Segment>
            <Header as="h2" icon textAlign="center">
              <Icon name="money" circular />
              <Header.Content>Business</Header.Content>
            </Header>
            <div>
              <BusinessStats entryFees={shuttoutData.entryFees} />
            </div>
          </Segment>
          <div>
            <Transition visible={this.state.goldChart} animation="fade up" duration={500}>
              <div>
                <MixedChart dataOne={shuttoutData.goldTotal} dataTwo={shuttoutData.goldPayedOut} unmountOnHide />
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
