// @flow

/**
 * Extend the Embed APIs `gapi.analytics.report.Data` component to
 * return a promise the is fulfilled with the value returned by the API.
 * @param {Object} params The request parameters.
 * @return {Promise} A promise.
 */
function apiQuery(params: {
  ids: string,
  metrics: string,
  dimensions?: string,
  sort?: string,
  'start-date'?: string,
  'end-date'?: string
}) {
  return new Promise((resolve, reject) => {
    /* global gapi */
    // $FlowFixMe
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

export default apiQuery;
