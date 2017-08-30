// @flow

import React, { Component } from 'react'
import { Header, Loader } from 'semantic-ui-react'

import { CLIENT_ID } from '../config/api_credentials'
import createChartData from '../utils/create_chartjs_data'

import { visitorsDay, visitorsMonth } from '../api/gapi_calls/visitors'
import { activeUsersDay, activeUsersMonth } from '../api/gapi_calls/active_users'
import { registrationsDay, registrationsMonth, registrationsTotal } from '../api/gapi_calls/registrations'
import bounceRate from '../api/gapi_calls/bounce_rate'
import exitRate from '../api/gapi_calls/exit_rate'

import entryFees from '../api/shuttout_api_calls/entry_fees'
import goldPayedOut from '../api/shuttout_api_calls/gold_payed_out'
import goldTotal from '../api/shuttout_api_calls/gold_total'
import votesTotal from '../api/shuttout_api_calls/votes_total'
import {
  photoOfTheDay,
  photoBiggestPrize,
  photoLastUploaded,
  photosPremiumDay,
  photosPremiumMonth,
  photosTotalDay,
  photosTotalMonth
} from '../api/shuttout_api_calls/photos'

import DisplayPanel from './DisplayPanel'

class App extends Component {
  state: {
    apiLoaded: boolean,
    googleData: Object,
    shuttoutData: Object
  } = {
    apiLoaded: false,
    googleData: {},
    shuttoutData: {}
  }

  componentDidMount() {
    this.gapiInit()
    this.shuttoutApiCall()
  }

  gapiInit() {
    /* global gapi */
    // $FlowFixMe
    gapi.analytics.ready(() => {
      gapi.analytics.auth.authorize({
        container: 'embed-api-auth-container',
        clientid: CLIENT_ID,
        scopes: 'https://www.googleapis.com/auth/analytics.readonly'
      })

      gapi.analytics.auth.on('signIn', () => {
        const authButton = document.getElementById('embed-api-auth-container')
        if (authButton) {
          authButton.innerHTML = ''
        }
        this.gapiCall()
      })
    })
  }

  shuttoutApiCall() {
    /**
     * Make api call and update state
     */
    const shuttoutResponseData = {}

    Promise.all([
      entryFees.then(response => {
        shuttoutResponseData.entryFees = createChartData(response.data[0], {
          label: 'Entry Fees',
          backgroundColor: 'rgba(0,0,102, 0.3)',
          borderColor: 'rgba(255, 99, 132, 0.95)',
          month: true
        })
      }),
      goldPayedOut.then(response => {
        shuttoutResponseData.goldPayedOut = createChartData(response.data[0], {
          label: 'Money Payed Out',
          backgroundColor: 'rgba(0,51,51, 0.3)',
          borderColor: 'rgba(255, 99, 132, 0.95)',
          month: true
        })
      }),
      goldTotal.then(response => {
        shuttoutResponseData.goldTotal = createChartData(response.data[0], {
          label: 'Total Money',
          backgroundColor: 'rgba(0,153,0, 0.3)',
          borderColor: 'rgba(255, 99, 132, 0.95)',
          month: true
        })
      }),
      photosPremiumMonth.then(response => {
        shuttoutResponseData.photosPremiumMonth = createChartData(response.data[0], {
          label: 'Paid Entries Monthly',
          backgroundColor: 'rgba(0,153,204, 0.3)',
          borderColor: 'rgba(255, 99, 132, 0.95)',
          month: true,
          addTotal: true
        })
      }),
      photosPremiumDay.then(response => {
        shuttoutResponseData.photosPremiumDay = createChartData(response.data[0], {
          label: 'Paid Entries Daily',
          backgroundColor: 'rgba(0,153,204, 0.3)',
          borderColor: 'rgba(255, 99, 132, 0.95)',
          day: true,
          addTotal: true
        })
      }),
      photosTotalMonth.then(response => {
        shuttoutResponseData.photosTotalMonth = createChartData(response.data[0], {
          label: 'Total Photos Monthly',
          backgroundColor: 'rgba(204,204,0, 0.3)',
          borderColor: 'rgba(255, 99, 132, 0.95)',
          month: true,
          addTotal: true
        })
      }),
      photosTotalDay.then(response => {
        shuttoutResponseData.photosTotalDay = createChartData(response.data[0], {
          label: 'Total Photos Daily',
          backgroundColor: 'rgba(204,204,0, 0.3)',
          borderColor: 'rgba(255, 99, 132, 0.95)',
          day: true,
          addTotal: true
        })
      }),
      votesTotal.then(response => {
        shuttoutResponseData.votesTotal = createChartData(response.data[0], {
          label: 'Total Votes ',
          backgroundColor: 'rgba(204,51,51, 0.3)',
          borderColor: 'rgba(255, 99, 132, 0.95)',
          month: true
        })
      }),
      photoOfTheDay.then(response => {
        shuttoutResponseData.photoOfTheDay = response.data[0]
      }),
      photoLastUploaded.then(response => {
        shuttoutResponseData.photoLastUploaded = response.data[0]
      }),
      photoBiggestPrize.then(response => {
        shuttoutResponseData.photoBiggestPrize = response.data[0]
      })
    ]).then(() => {
      this.setState({
        shuttoutData: shuttoutResponseData
      })
    })
  }

  gapiCall() {
    /**
     * Make api call and update state
     */
    const googleResponseData = {}

    Promise.all([
      visitorsMonth().then(response => {
        googleResponseData.visitorsMonth = parseInt(response.rows[11][1], 10)
        googleResponseData.visitorsMonthPrevious = parseInt(response.rows[10][1], 10)
        googleResponseData.visitorsMonthly = createChartData(response, {
          label: 'Visitors Monthly',
          backgroundColor: ['rgba(255, 99, 132, 0.6)'],
          month: true
        })
      }),
      visitorsDay().then(response => {
        googleResponseData.visitorsDay = parseInt(response.rows[5][1], 10)
        googleResponseData.visitorsDayPrevious = parseInt(response.rows[4][1], 10)
        googleResponseData.visitorsDaily = createChartData(response, {
          label: 'Visitors Daily',
          backgroundColor: ['rgba(255, 99, 132, 0.6)'],
          day: true
        })
      }),
      activeUsersMonth().then(response => {
        googleResponseData.activeUsersMonth = parseInt(response.rows[360][1], 10)
        googleResponseData.activeUsersMonthPrevious = parseInt(response.rows[330][1], 10)
        googleResponseData.activeUsersMonthly = createChartData(response, {
          label: 'Active Users Monthly',
          backgroundColor: ['rgba(255, 99, 132, 0.6)'],
          month: true
        })
      }),
      activeUsersDay().then(response => {
        googleResponseData.activeUsersDay = parseInt(response.rows[5][1], 10)
        googleResponseData.activeUsersDayPrevious = parseInt(response.rows[4][1], 10)
        googleResponseData.activeUsersDaily = createChartData(response, {
          label: 'Active Users Daily',
          backgroundColor: ['rgba(255, 99, 132, 0.6)'],
          day: true
        })
      }),
      registrationsMonth().then(response => {
        if (response.rows.length > 2) {
          response.rows.shift()
        }
        googleResponseData.registrationsMonth = parseInt(response.rows[1][1], 10)
        googleResponseData.registrationsMonthPrevious = parseInt(response.rows[0][1], 10)
      }),
      registrationsDay().then(response => {
        googleResponseData.registrationsDay = parseInt(response.rows[1][1], 10)
        googleResponseData.registrationsDayPrevious = parseInt(response.rows[0][1], 10)
      }),
      registrationsTotal().then(response => {
        googleResponseData.registeredTotalUsers = parseInt(response.rows[0][0], 10)
      }),
      exitRate().then(response => {
        googleResponseData.exitRate = response.rows[0][0]
      }),
      bounceRate().then(response => {
        googleResponseData.bounceRate = response.rows[0][0]
      })
    ]).then(() => {
      this.setState({
        apiLoaded: true,
        googleData: googleResponseData
      })
    })
  }

  render() {
    if (this.state.apiLoaded === true) {
      return <DisplayPanel data={this.state.googleData} shuttoutData={this.state.shuttoutData} />
    }
    return (
      <Header as="h2" textAlign="center" style={{ marginTop: '7em' }}>
        <Header.Content style={{ marginBottom: '1em' }}>Loading data...</Header.Content>
        <Loader active inline="centered" />
      </Header>
    )
  }
}

export default App
