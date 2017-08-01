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
    chartData: {
      browsers: {}
    },
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

  componentDidMount() {
    // Alias this
    const component = this;

    /* global gapi */
    gapi.analytics.ready(() => {
      // Step 3: Authorize the user.
      const CLIENT_ID = '1071518246281-2peqeloqqtr11hq6t5jk79eheue5ba82.apps.googleusercontent.com';

      component.setState({ apiLoaded: true });

      gapi.analytics.auth.authorize({
        container: 'embed-api-auth-container',
        clientid: CLIENT_ID
      });

      /**
         * Create a new ActiveUsers instance to be rendered inside of an
         * element with the id "active-users-container" and poll for changes every
         * five seconds.
         */
      const activeUsers = new gapi.analytics.ext.ActiveUsers({
        container: 'active-users-container',
        pollingInterval: 5
      });

      /**
         * Add CSS animation to visually show the when users come and go.
         */
      activeUsers.once('success', function() {
        let timeout;

        this.on('change', data => {
          const element = this.container.firstChild;
          const animationClass = data.delta > 0 ? 'is-increasing' : 'is-decreasing';
          element.className += ` ${animationClass}`;

          clearTimeout(timeout);
          timeout = setTimeout(() => {
            element.className = element.className.replace(/ is-(increasing|decreasing)/g, '');
          }, 3000);
        });
      });

      /**
         * Create a new ViewSelector2 instance to be rendered inside of an
         * element with the id "view-selector-container".
         */
      const viewSelector = new gapi.analytics.ext.ViewSelector2({
        container: 'view-selector-container'
      }).execute();

      /**
       * Extend the Embed APIs `gapi.analytics.report.Data` component to
       * return a promise the is fulfilled with the value returned by the API.
       * @param {Object} params The request parameters.
       * @return {Promise} A promise.
       */
      function query(params) {
        return new Promise((resolve, reject) => {
          const data = new gapi.analytics.report.Data({ query: params });
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

      /**
         * Make api call and display results
         */
      function browserData(ids) {
        query({
          ids,
          dimensions: 'ga:browser',
          metrics: 'ga:pageviews',
          sort: '-ga:pageviews',
          'max-results': 5
        }).then(response => {
          const browsers = {
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
            browsers.datasets[0].data.push(+row[1]);
            browsers.datasets[0].backgroundColor.push(colors[i]);
            browsers.labels.push(row[0]);
          });

          component.setState({
            chartData: {
              browsers
            }
          });
        });
      }

      function pageViewsMonth(ids) {
        // Adjust `now` to experiment with different days, for testing only...
        const now = moment(); // .subtract(3, 'day');

        query({
          ids,
          metrics: 'ga:newUsers',
          'start-date': moment(now).subtract(1, 'day').subtract(1, 'month').format('YYYY-MM-DD'),
          'end-date': moment(now).subtract(1, 'day').format('YYYY-MM-DD')
        }).then(response => {
          component.setState({
            pageViewsMonth: response.rows[0]
          });
        });
      }

      function pageViewsDay(ids) {
        // Adjust `now` to experiment with different days, for testing only...
        const now = moment(); // .subtract(3, 'day');

        query({
          ids,
          metrics: 'ga:newUsers',
          'start-date': moment(now).subtract(1, 'day').format('YYYY-MM-DD'),
          'end-date': moment(now).format('YYYY-MM-DD')
        }).then(response => {
          component.setState({
            pageViewsDay: response.rows[0]
          });
        });
      }

      function activeUsersMonthly(ids) {
        const now = moment();
        const activeUsersTotal = [];

        query({
          ids,
          metrics: 'ga:30dayUsers',
          dimensions: 'ga:date',
          'max-results': 5,
          sort: '-ga:date',
          'start-date': moment(now).subtract(1, 'day').subtract(1, 'month').format('YYYY-MM-DD'),
          'end-date': moment(now).subtract(1, 'day').format('YYYY-MM-DD')
        }).then(response => {
          response.rows.forEach(row => {
            activeUsersTotal.push({ date: row[0], amount: row[1] });
          });
          component.setState({
            activeUsersMonthly: activeUsersTotal
          });
        });
      }

      function userDevice(ids) {
        const now = moment();

        query({
          ids,
          metrics: 'ga:users',
          dimensions: 'ga:deviceCategory',
          sort: 'ga:deviceCategory',
          'start-date': moment(now).subtract(1, 'day').subtract(1, 'month').format('YYYY-MM-DD'),
          'end-date': moment(now).subtract(1, 'day').format('YYYY-MM-DD')
        }).then(response => {
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

          component.setState({
            userDevice: userDeviceData
          });
        });
      }

      function newUsers(ids) {
        const now = moment();

        query({
          ids,
          metrics: 'ga:newUsers',
          dimensions: 'ga:day',
          'start-date': moment(now).subtract(1, 'day').subtract(1, 'month').format('YYYY-MM-DD'),
          'end-date': moment(now).subtract(1, 'day').format('YYYY-MM-DD')
        }).then(response => {
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

          component.setState({
            newUsers: newUsersData
          });
        });
      }

      function registeredUsers(ids) {
        const now = moment();

        query({
          ids,
          metrics: 'ga:goal3Completions',
          dimensions: 'ga:month',
          'start-date': moment(now).subtract(1, 'day').subtract(6, 'month').format('YYYY-MM-DD'),
          'end-date': moment(now).subtract(1, 'day').format('YYYY-MM-DD')
        }).then(response => {
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

          component.setState({
            registeredUsers: registeredUsersData
          });
        });
      }

      function exitRate(ids) {
        // Adjust `now` to experiment with different days, for testing only...
        const now = moment(); // .subtract(3, 'day');

        query({
          ids,
          metrics: 'ga:exitRate',
          'start-date': moment(now).subtract(1, 'day').format('YYYY-MM-DD'),
          'end-date': moment(now).format('YYYY-MM-DD')
        }).then(response => {
          component.setState({
            exitRate: response.rows[0]
          });
        });
      }

      function bounceRate(ids) {
        // Adjust `now` to experiment with different days, for testing only...
        const now = moment(); // .subtract(3, 'day');

        query({
          ids,
          metrics: 'ga:bounceRate',
          'start-date': moment(now).subtract(1, 'day').format('YYYY-MM-DD'),
          'end-date': moment(now).format('YYYY-MM-DD')
        }).then(response => {
          component.setState({
            bounceRate: response.rows[0]
          });
        });
      }

      function uniquePageviews(ids) {
        // Adjust `now` to experiment with different days, for testing only...
        const now = moment(); // .subtract(3, 'day');

        query({
          ids,
          metrics: 'ga:uniquePageviews',
          'start-date': moment(now).subtract(3, 'year').format('YYYY-MM-DD'),
          'end-date': moment(now).format('YYYY-MM-DD')
        }).then(response => {
          component.setState({
            uniquePageviews: response.rows[0]
          });
        });
      }

      /**
       * Update the activeUsers component, the Chartjs charts, and the dashboard
       * title whenever the user changes the view.
       */
      viewSelector.on('viewChange', data => {
        // Start tracking
        activeUsers.set(data).execute();
        browserData(data.ids);
        pageViewsMonth(data.ids);
        pageViewsDay(data.ids);
        activeUsersMonthly(data.ids);
        userDevice(data.ids);
        newUsers(data.ids);
        registeredUsers(data.ids);
        exitRate(data.ids);
        bounceRate(data.ids);
        uniquePageviews(data.ids);
      });
    });
  }

  render() {
    if (this.state.apiLoaded === true) {
      return (
        <div>
          <TopMenu />
          <Container text style={{ marginTop: '5em' }}>
            <LoginPanel />
            <BaseStats pageViewsMonth={this.state.pageViewsMonth} pageViewsDay={this.state.pageViewsDay} />
            <Divider />
            <RegisteredUsersChart
              registeredUsersData={this.state.registeredUsers}
              legendPosition="bottom"
              displayLegend={false}
              displayTitle
            />
            <Divider />
            <NewUsersChart
              newUsersData={this.state.newUsers}
              legendPosition="bottom"
              displayLegend={false}
              displayTitle
            />
            <Divider />
            <DeviceChart userDeviceData={this.state.userDevice} legendPosition="bottom" displayLegend displayTitle />
            <Divider />
            <Chart
              browserData={this.state.chartData.browsers}
              legendPosition="bottom"
              displayLegend={false}
              displayTitle
            />
            <Divider />
            <AdditionalStats exitRate={this.state.exitRate} bounceRate={this.state.bounceRate} uniquePageviews={this.state.uniquePageviews}/>
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
