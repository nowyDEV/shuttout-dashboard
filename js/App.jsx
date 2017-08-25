// @flow

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Header, Loader } from 'semantic-ui-react';

import { CLIENT_ID } from './config/api_credentials';
import createChartData from './utils/create_chartjs_data';

import browsersQuery from './api/gapi_calls/browsers';
import devicesQuery from './api/gapi_calls/devices';
import { visitorsDay, visitorsDayPrevious, visitorsMonth, visitorsMonthPrevious } from './api/gapi_calls/visitors';
import {
  activeUsersDay,
  activeUsersDayPrevious,
  activeUsersMonth,
  activeUsersMonthPrevious
} from './api/gapi_calls/active_users';
import registrationsQuery from './api/gapi_calls/registrations';
import bounceRate from './api/gapi_calls/bounce_rate';
import exitRate from './api/gapi_calls/exit_rate';

import entryFees from './api/shuttout_api_calls/entry_fees';
import goldPayedOut from './api/shuttout_api_calls/gold_payed_out';
import goldTotal from './api/shuttout_api_calls/gold_total';
import photosPremium from './api/shuttout_api_calls/photos_premium';
import photosTotal from './api/shuttout_api_calls/photos_total';
import votesTotal from './api/shuttout_api_calls/votes_total';
import { PhotoOfTheDay, PhotoBiggestPrize, PhotoLastUploaded } from './api/shuttout_api_calls/photos';

import DisplayPanel from './DisplayPanel';

class App extends Component {
  state = {
    apiLoaded: false,
    googleData: {},
    shuttoutData: {}
  };

  componentDidMount() {
    this.gapiInit();
    this.shuttoutApiCall();
  }

  gapiInit() {
    /* global gapi */
    // $FlowFixMe
    gapi.analytics.ready(() => {
      gapi.analytics.auth.authorize({
        container: 'embed-api-auth-container',
        clientid: CLIENT_ID,
        scopes: 'https://www.googleapis.com/auth/analytics.readonly'
      });

      gapi.analytics.auth.on('signIn', () => {
        const authButton = document.getElementById('embed-api-auth-container');
        if (authButton) {
          authButton.innerHTML = '';
        }
        this.gapiCall();
      });
    });
  }

  shuttoutApiCall() {
    /**
     * Make api call and update state
     */
    const shuttoutResponseData = {
      entryFees: {},
      goldPayedOut: {},
      goldTotal: {},
      photosPremium: {},
      photosTotal: {},
      votesTotal: {},
      photoOfTheDay: {},
      photoLastUploaded: {},
      photoBiggestPrize: {}
    };

    Promise.all([
      entryFees.then(response => {
        shuttoutResponseData.entryFees = createChartData(response.data[0], {
          label: 'Entry Fees',
          backgroundColor: 'rgba(0,0,102, 0.3)',
          borderColor: 'rgba(255, 99, 132, 0.95)',
          months: true
        });
      }),
      goldPayedOut.then(response => {
        shuttoutResponseData.goldPayedOut = createChartData(response.data[0], {
          label: 'Money Payed Out',
          backgroundColor: 'rgba(0,51,51, 0.3)',
          borderColor: 'rgba(255, 99, 132, 0.95)',
          months: true
        });
      }),
      goldTotal.then(response => {
        shuttoutResponseData.goldTotal = createChartData(response.data[0], {
          label: 'Total Money',
          backgroundColor: 'rgba(0,153,0, 0.3)',
          borderColor: 'rgba(255, 99, 132, 0.95)',
          months: true
        });
      }),
      photosPremium.then(response => {
        shuttoutResponseData.photosPremium = createChartData(response.data[0], {
          label: 'Premium Photos',
          backgroundColor: 'rgba(0,153,204, 0.3)',
          borderColor: 'rgba(255, 99, 132, 0.95)',
          months: true,
          addTotal: true
        });
      }),
      photosTotal.then(response => {
        shuttoutResponseData.photosTotal = createChartData(response.data[0], {
          label: 'Total Photos',
          backgroundColor: 'rgba(204,204,0, 0.3)',
          borderColor: 'rgba(255, 99, 132, 0.95)',
          months: true,
          addTotal: true
        });
      }),
      votesTotal.then(response => {
        shuttoutResponseData.votesTotal = createChartData(response.data[0], {
          label: 'Total Votes',
          backgroundColor: 'rgba(204,51,51, 0.3)',
          borderColor: 'rgba(255, 99, 132, 0.95)',
          months: true
        });
      }),
      PhotoOfTheDay.then(response => {
        shuttoutResponseData.photoOfTheDay = response.data[0];
      }),
      PhotoLastUploaded.then(response => {
        shuttoutResponseData.photoLastUploaded = response.data[0];
      }),
      PhotoBiggestPrize.then(response => {
        shuttoutResponseData.photoBiggestPrize = response.data[0];
      })
    ]).then(() => {
      this.setState({
        shuttoutData: shuttoutResponseData
      });
    });
  }

  gapiCall() {
    /**
     * Make api call and update state
     */
    const responseData = {
      browsers: {},
      visitorsMonth: 0,
      visitorsMonthPrevious: 0,
      visitorsDay: 0,
      visitorsDayPrevious: 0,
      activeUsersMonth: 0,
      activeUsersMonthPrevious: 0,
      activeUsersDay: 0,
      activeUsersDayPrevious: 0,
      userDevice: {},
      visitorsMonthDay: {},
      registeredUsers: {},
      exitRate: '',
      bounceRate: ''
    };

    Promise.all([
      browsersQuery().then(response => {
        responseData.browsers = createChartData(response, {
          label: 'Browser popularity',
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)'
          ]
        });
      }),
      visitorsMonth().then(response => {
        responseData.visitorsMonth = parseInt(response.rows[0][0], 10);
      }),
      visitorsMonthPrevious().then(response => {
        responseData.visitorsMonthPrevious = parseInt(response.rows[0][0], 10);
      }),
      visitorsDay().then(response => {
        console.log(response)
        responseData.visitorsDay = parseInt(response.rows[0][0], 10);
      }),
      visitorsDayPrevious().then(response => {
        responseData.visitorsDayPrevious = parseInt(response.rows[0][0], 10);
      }),
      activeUsersMonth().then(response => {
        responseData.activeUsersMonth = parseInt(response.rows[0][1], 10);
      }),
      activeUsersMonthPrevious().then(response => {
        responseData.activeUsersMonthPrevious = parseInt(response.rows[0][1], 10);
      }),
      activeUsersDay().then(response => {
        responseData.activeUsersDay = parseInt(response.rows[0][1], 10);
      }),
      activeUsersDayPrevious().then(response => {
        responseData.activeUsersDayPrevious = parseInt(response.rows[0][1], 10);
      }),
      devicesQuery().then(response => {
        responseData.userDevice = createChartData(response, {
          label: 'Device popularity',
          backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)']
        });
      })
    ]).then(() =>
      Promise.all([
        registrationsQuery().then(response => {
          responseData.registeredUsers = createChartData(response, {
            label: 'Registered Users',
            backgroundColor: 'rgba(255, 99, 132, 0.3)',
            borderColor: 'rgba(255, 99, 132, 0.95)',
            months: true
          });
        }),
        exitRate().then(response => {
          responseData.exitRate = response.rows[0][0];
        }),
        bounceRate().then(response => {
          responseData.bounceRate = response.rows[0][0];
        })
      ]).then(() => {
        this.setState({
          apiLoaded: true,
          googleData: responseData
        });
      })
    );
  }

  render() {
    if (this.state.apiLoaded === true) {
      return <DisplayPanel data={this.state.googleData} shuttoutData={this.state.shuttoutData} />;
    }
    return (
      <Header as="h2" textAlign="center" style={{ marginTop: '7em' }}>
        <Header.Content style={{ marginBottom: '1em' }}>Loading data...</Header.Content>
        <Loader active inline="centered" />
      </Header>
    );
  }
}

render(<App />, document.getElementById('app'));
