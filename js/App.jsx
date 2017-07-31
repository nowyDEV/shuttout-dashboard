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
          container: 'embed-api-auth-container',
          clientid: CLIENT_ID
        });

        /**
         * Create a new ActiveUsers instance to be rendered inside of an
         * element with the id "active-users-container" and poll for changes every
         * five seconds.
         */
        var activeUsers = new gapi.analytics.ext.ActiveUsers({
          container: 'active-users-container',
          pollingInterval: 5
        });

        /**
         * Add CSS animation to visually show the when users come and go.
         */
        activeUsers.once('success', function() {
          var element = this.container.firstChild;
          var timeout;

          this.on('change', function(data) {
            var element = this.container.firstChild;
            var animationClass = data.delta > 0 ? 'is-increasing' : 'is-decreasing';
            element.className += ' ' + animationClass;

            clearTimeout(timeout);
            timeout = setTimeout(function() {
              element.className = element.className.replace(/ is-(increasing|decreasing)/g, '');
            }, 3000);
          });
        });

        /**
         * Create a new ViewSelector2 instance to be rendered inside of an
         * element with the id "view-selector-container".
         */
        var viewSelector = new gapi.analytics.ext.ViewSelector2({
          container: 'view-selector-container'
        }).execute();

        /**
         * Update the activeUsers component, the Chartjs charts, and the dashboard
         * title whenever the user changes the view.
         */
        viewSelector.on('viewChange', function(data) {
          var title = document.getElementById('view-name');
          title.textContent = data.property.name + ' (' + data.view.name + ')';

          // Start tracking active users for this view.
          activeUsers.set(data).execute();
          displayData(data.ids);
        });

        /**
         * Make api call and display results
         */
        function displayData(ids) {
          query({
            ids: ids,
            dimensions: 'ga:browser',
            metrics: 'ga:pageviews',
            sort: '-ga:pageviews',
            'max-results': 5
          }).then(function(response) {
            var data = [];
            var colors = ['#4D5360', '#949FB1', '#D4CCC5', '#E2EAE9', '#F7464A'];

            response.rows.forEach(function(row, i) {
              data.push({ value: +row[1], color: colors[i], label: row[0] });
            });

            console.log(data);
          });
        }

        /**
         * Extend the Embed APIs `gapi.analytics.report.Data` component to
         * return a promise the is fulfilled with the value returned by the API.
         * @param {Object} params The request parameters.
         * @return {Promise} A promise.
         */
        function query(params) {
          return new Promise(function(resolve, reject) {
            var data = new gapi.analytics.report.Data({ query: params });
            data
              .once('success', function(response) {
                resolve(response);
              })
              .once('error', function(response) {
                reject(response);
              })
              .execute();
          });
        }
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
