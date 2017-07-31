import React, { Component } from 'react';
import { render } from 'react-dom';
import Chart from './Chart';
import Header from './Header';

class App extends Component {
  state = {
    apiLoaded: false,
    chartData: {}
  };

  componentDidMount() {
    require('google-client-api')().then(gapi => {
      console.log('teraz', gapi);
      this.setState({ apiLoaded: true });

      // Step 3: Authorize the user.
      const CLIENT_ID = '1071518246281-2peqeloqqtr11hq6t5jk79eheue5ba82.apps.googleusercontent.com';

      gapi.analytics.ready(function() {
        console.log('ready');

        gapi.analytics.auth.authorize({
          container: 'auth-button',
          clientid: CLIENT_ID
        });

        var viewSelector = new gapi.analytics.ViewSelector({
          container: 'view-selector'
        });

        var pageViews = new gapi.analytics.googleCharts.DataChart({
          reportType: 'ga',
          query: {
            'dimensions': 'ga:date',
            'metrics': 'ga:uniquePageviews',
            'start-date': '30daysAgo',
            'end-date': 'yesterday',
          },
          chart: {
            type: 'LINE',
            container: 'page-views'
          }
        });

        var activeUsers = new gapi.analytics.googleCharts.DataChart({
          reportType: 'ga',
          query: {
            'dimensions': 'ga:date',
            'metrics': 'ga:1DayUsers',
            'start-date': '30daysAgo',
            'end-date': 'yesterday',
          },
          chart: {
            type: 'LINE',
            container: 'active-users'
          }
        });

        var registeredUsers = new gapi.analytics.googleCharts.DataChart({
          reportType: 'ga',
          query: {
            'dimensions': 'ga:date',
            'metrics': 'ga:goal3Completions',
            'start-date': '30daysAgo',
            'end-date': 'yesterday',
          },
          chart: {
            type: 'LINE',
            container: 'registered-users'
          }
        });

        // Step 6: Hook up the components to work together.

        gapi.analytics.auth.on('success', function(response) {
          viewSelector.execute();
        });

        viewSelector.on('change', function(ids) {
          var newIds = {
            query: {
              ids: ids
            }
          }
          pageViews.set(newIds).execute();
          activeUsers.set(newIds).execute();
          registeredUsers.set(newIds).execute();
        });
      });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div>HELLO</div>
        <Chart chartData={this.state.chartData} legendPosition="bottom" displayLegend displayTitle />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
