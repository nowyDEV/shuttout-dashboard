// @flow

import apiQuery from '../../utils/gapi_promise'
import { VIEW_ID } from '../../config/api_credentials'

export const registrationsDay = () =>
  apiQuery({
    ids: `ga:${VIEW_ID}`,
    metrics: 'ga:goal3Completions',
    dimensions: 'ga:nthDay',
    'start-date': '2daysAgo',
    'end-date': 'yesterday'
  })

export const registrationsMonth = () =>
  apiQuery({
    ids: `ga:${VIEW_ID}`,
    metrics: 'ga:goal3Completions',
    dimensions: 'ga:nthMonth',
    'start-date': '60daysAgo',
    'end-date': 'today'
  })

export const registrationsTotal = () =>
  apiQuery({
    ids: `ga:${VIEW_ID}`,
    metrics: 'ga:goal3Completions',
    'start-date': '2015-10-01',
    'end-date': 'today'
  })
