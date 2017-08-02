import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import { Loader, Container, Divider, Header } from 'semantic-ui-react';
import Chart from './Chart';
import DeviceChart from './DeviceChart';
import NewUsersChart from './NewUsersChart';
import RegisteredUsersChart from './RegisteredUsersChart';
import LoginPanel from './LoginPanel';
import BaseStats from './BaseStats';
import AdditionalStats from './AdditionalStats';
import TopMenu from './TopMenu';

class App extends Component {
  state = {
    apiLoaded: false,
    data: {}
  };

  componentDidMount() {
    this.apiInit();
  }

  apiInit() {
    const CLIENT_ID = '1071518246281-2peqeloqqtr11hq6t5jk79eheue5ba82.apps.googleusercontent.com';
    const TABLE_ID = 'ga:101878164';
    const responseData = {
      apiLoaded: false,
      browsers: {},
      pageViewsMonth: 0,
      pageViewsDay: 0,
      activeUsersMonthly: [],
      userDevice: [],
      newUsers: [],
      registeredUsers: [],
      exitRate: 0,
      bounceRate: 0,
      uniquePageviews: 0
    };

    /* global gapi */
    gapi.analytics.ready(() => {
      console.log('analytics ready');
      gapi.analytics.auth.authorize({
        container: 'embed-api-auth-container',
        clientid: CLIENT_ID
      });

      /**
       * Extend the Embed APIs `gapi.analytics.report.Data` component to
       * return a promise the is fulfilled with the value returned by the API.
       * @param {Object} params The request parameters.
       * @return {Promise} A promise.
       */
      function apiQuery (params) {
        return new Promise((resolve, reject) => {
          const data = new gapi.analytics.report.Data({query: params});
          data
            .once('success', response => {
              resolve(response);
            })
            .once('error', response => {
              reject(response);
            })
            .execute();
        });
      }

      const now = moment();
      const activeUsersTotal = [];

      const apiRequests = Promise.all([
        apiQuery({
          ids: TABLE_ID,
          dimensions: 'ga:browser',
          metrics: 'ga:pageviews',
          sort: '-ga:pageviews',
          'max-results': 5
        })
          .then(response => {
            const browsersData = {
              labels: [],
              datasets: [
                {
                  label: 'Browsers popularity',
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
              browsersData.datasets[0].data.push(+row[1]);
              browsersData.datasets[0].backgroundColor.push(colors[i]);
              browsersData.labels.push(row[0]);
            });
            responseData.browsers = browsersData;
          }),
        apiQuery({
          ids: TABLE_ID,
          metrics: 'ga:newUsers',
          'start-date': moment(now).subtract(1, 'day').subtract(1, 'month').format('YYYY-MM-DD'),
          'end-date': moment(now).subtract(1, 'day').format('YYYY-MM-DD')
        })
          .then(response => {
            responseData.pageViewsMonth = response.rows[0];
          }),
        apiQuery({
          ids: TABLE_ID,
          metrics: 'ga:newUsers',
          'start-date': moment(now).subtract(1, 'day').format('YYYY-MM-DD'),
          'end-date': moment(now).format('YYYY-MM-DD')
        })
          .then(response => {
            responseData.pageViewsDay = response.rows[0];
          }),
        apiQuery({
          ids: TABLE_ID,
          metrics: 'ga:30dayUsers',
          dimensions: 'ga:date',
          'max-results': 5,
          sort: '-ga:date',
          'start-date': moment(now).subtract(1, 'day').subtract(1, 'month').format('YYYY-MM-DD'),
          'end-date': moment(now).subtract(1, 'day').format('YYYY-MM-DD')
        })
          .then(response => {
            response.rows.forEach(row => {
              activeUsersTotal.push({date: row[0], amount: row[1]});
            });
            responseData.activeUsersMonthly = activeUsersTotal;
          }),
        apiQuery({
          ids: TABLE_ID,
          metrics: 'ga:users',
          dimensions: 'ga:deviceCategory',
          sort: 'ga:deviceCategory',
          'start-date': moment(now).subtract(1, 'day').subtract(1, 'month').format('YYYY-MM-DD'),
          'end-date': moment(now).subtract(1, 'day').format('YYYY-MM-DD')
        })
          .then(response => {
            const userDeviceData = {
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
              userDeviceData.datasets[0].data.push(+row[1]);
              userDeviceData.datasets[0].backgroundColor.push(colors[i]);
              userDeviceData.labels.push(row[0]);
            });
            responseData.userDevice = userDeviceData;
          }),
        apiQuery({
          ids: TABLE_ID,
          metrics: 'ga:newUsers',
          dimensions: 'ga:day',
          'start-date': moment(now).subtract(1, 'day').subtract(1, 'month').format('YYYY-MM-DD'),
          'end-date': moment(now).subtract(1, 'day').format('YYYY-MM-DD')
        })
          .then(response => {
            const newUsersData = {
              labels: [],
              datasets: [
                {
                  label: 'New users visits',
                  data: [],
                  backgroundColor: `transparent`,
                  borderColor: 'rgba(54, 162, 235, 0.95)',
                  borderWidth: 2
                }
              ]
            };

            response.rows.forEach(row => {
              newUsersData.datasets[0].data.push(+row[1]);
              newUsersData.labels.push(`day ${row[0]}`);
            });
            responseData.newUsers = newUsersData;
          }),
        apiQuery({
          ids: TABLE_ID,
          metrics: 'ga:goal3Completions',
          dimensions: 'ga:month',
          'start-date': moment(now).subtract(1, 'day').subtract(6, 'month').format('YYYY-MM-DD'),
          'end-date': moment(now).subtract(1, 'day').format('YYYY-MM-DD')
        })
          .then(response => {
            const registeredUsersData = {
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
              registeredUsersData.datasets[0].data.push(+row[1]);
              registeredUsersData.labels.push(months[parseInt(row[0], 10) - 1]);
            });
            responseData.registeredUsers = registeredUsersData;
          }),
        apiQuery({
          ids: TABLE_ID,
          metrics: 'ga:exitRate',
          'start-date': moment(now).subtract(1, 'day').format('YYYY-MM-DD'),
          'end-date': moment(now).format('YYYY-MM-DD')
        })
          .then(response => {
            responseData.exitRate = response.rows[0];
          }),
        apiQuery({
          ids: TABLE_ID,
          metrics: 'ga:bounceRate',
          'start-date': moment(now).subtract(1, 'day').format('YYYY-MM-DD'),
          'end-date': moment(now).format('YYYY-MM-DD')
        })
          .then(response => {
            responseData.bounceRate = response.rows[0];
          }),
        apiQuery({
          ids: TABLE_ID,
          metrics: 'ga:uniquePageviews',
          'start-date': moment(now).subtract(3, 'year').format('YYYY-MM-DD'),
          'end-date': moment(now).format('YYYY-MM-DD')
        })
          .then(response => {
            responseData.uniquePageviews = response.rows[0];
          })
      ]).then(() => {
        responseData.apiLoaded = true;
        this.setState({data: responseData});
        console.log(responseData);
        console.log(this.state);
      });

      /**
       * Make api call and display results
       */
      console.log(apiRequests);
    });
  }

  render() {
    if (this.state.data.apiLoaded === true) {
      return (
        <div>
          <TopMenu />
          <Container text style={{ marginTop: '5em' }}>
            <LoginPanel />
            <BaseStats pageViewsMonth={this.state.data.pageViewsMonth} pageViewsDay={this.state.data.pageViewsDay} />
            <Divider />
            <RegisteredUsersChart
              registeredUsersData={this.state.data.registeredUsers}
              legendPosition="bottom"
              displayLegend={false}
              displayTitle
            />
            <Divider />
            <NewUsersChart
              newUsersData={this.state.data.newUsers}
              legendPosition="bottom"
              displayLegend={false}
              displayTitle
            />
            <Divider />
            <DeviceChart userDeviceData={this.state.data.userDevice} legendPosition="bottom" displayLegend displayTitle />
            <Divider />
            <Chart browserData={this.state.data.browsers} legendPosition="bottom" displayLegend={false} displayTitle />
            <Divider />
            <AdditionalStats
              exitRate={this.state.data.exitRate}
              bounceRate={this.state.data.bounceRate}
              uniquePageviews={this.state.data.uniquePageviews}
            />
          </Container>
        </div>
      );
    }
    return (
      <Header as="h2" textAlign="center" style={{ marginTop: '7em' }}>
        <Header.Content style={{ marginBottom: '1em' }}>Loading api...</Header.Content>
        <Loader active inline="centered" />
      </Header>
    );
  }
}

render(<App />, document.getElementById('app'));
