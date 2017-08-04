// @flow

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Header, Loader } from 'semantic-ui-react';
import googleClientApi from 'google-client-api';

import { CLIENT_ID } from './config/api_credentials';

import browsersQuery from './gapi_calls/browsers';
import devicesQuery from './gapi_calls/devices'
import newUsersDay from './gapi_calls/new_users_day'
import newUsersMonth from './gapi_calls/new_users_month';
import newUsersMonthDay from './gapi_calls/new_users_month_day'
import activeUsersMonth from './gapi_calls/active_users_month'
import registrationsQuery from './gapi_calls/registrations'
import totalPageviews from './gapi_calls/total_pageviews'
import bounceRate from './gapi_calls/bounce_rate'
import exitRate from './gapi_calls/exit_rate'

import TopMenu from './TopMenu';
import DisplayPanel from './DisplayPanel';

class App extends Component {
  state = {
    apiLoaded: false,
    data: {}
  };

  componentDidMount() {
    this.apiInit();
  }

  apiInit() {
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

        this.apiCall();
      });
    });
  }

  apiCall() {
    /**
     * Make api call and update state
     */
    const responseData = {
      apiLoaded: false,
      browsers: {},
      pageViewsMonth: '',
      pageViewsDay: '',
      activeUsersMonthly: [],
      userDevice: {},
      newUsers: {},
      registeredUsers: {},
      exitRate: '',
      bounceRate: '',
      uniquePageviews: ''
    };

    googleClientApi().then(() => {
      Promise.all([
        browsersQuery
          .then(response => {
            responseData.browsers = {
              labels: [],
              datasets: [
                {
                  label: 'Browser popularity',
                  data: [],
                  backgroundColor: []
                }
              ]
            };
            const colors = [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)'
            ];

            response.rows.forEach((row, i) => {
              responseData.browsers.datasets[0].data.push(+row[1]);
              responseData.browsers.datasets[0].backgroundColor.push(colors[i]);
              responseData.browsers.labels.push(row[0]);
            });
          }),
        newUsersMonth
          .then(response => {
            responseData.pageViewsMonth = response.rows[0];
          }),
        newUsersDay
          .then(response => {
            responseData.pageViewsDay = response.rows[0];
          }),
        activeUsersMonth
          .then(response => {
            response.rows.forEach(row => {
              responseData.activeUsersMonthly.push({ date: row[0], amount: row[1] });
            });
          }),
        devicesQuery
          .then(response => {
            responseData.userDevice = {
              labels: [],
              datasets: [
                {
                  label: 'Device popularity',
                  data: [],
                  backgroundColor: []
                }
              ]
            };
            const colors = ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'];

            response.rows.forEach((row, i) => {
              responseData.userDevice.datasets[0].data.push(+row[1]);
              responseData.userDevice.datasets[0].backgroundColor.push(colors[i]);
              responseData.userDevice.labels.push(row[0]);
            });
          }),
        newUsersMonthDay
          .then(response => {
            responseData.newUsers = {
              labels: [],
              datasets: [
                {
                  label: 'New user visits',
                  data: [],
                  backgroundColor: `transparent`,
                  borderColor: 'rgba(54, 162, 235, 0.95)',
                  borderWidth: 2
                }
              ]
            };

            response.rows.forEach(row => {
              responseData.newUsers.datasets[0].data.push(+row[1]);
              responseData.newUsers.labels.push(`day ${row[0]}`);
            });
          }),
        registrationsQuery
          .then(response => {
            responseData.registeredUsers = {
              labels: [],
              datasets: [
                {
                  label: 'Registered Users',
                  data: [],
                  backgroundColor: 'rgba(255, 99, 132, 0.3)',
                  borderWidth: 1,
                  borderColor: 'rgba(255, 99, 132, 0.95)'
                }
              ]
            };

            const months = [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December'
            ];

            response.rows.forEach(row => {
              responseData.registeredUsers.datasets[0].data.push(+row[1]);
              responseData.registeredUsers.labels.push(months[parseInt(row[0], 10) - 1]);
            });
          }),
        exitRate
          .then(response => {
            responseData.exitRate = response.rows[0];
          }),
        bounceRate
          .then(response => {
            responseData.bounceRate = response.rows[0];
          }),
        totalPageviews
          .then(response => {
            responseData.uniquePageviews = response.rows[0];
          })
      ]).then(() => {
        this.setState({
          apiLoaded: true,
          data: responseData
        });
      });
    });
  }

  render() {
    if (this.state.apiLoaded === true) {
      return (
        <div>
          <TopMenu />
          <DisplayPanel data={this.state.data} />
        </div>
      );
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
