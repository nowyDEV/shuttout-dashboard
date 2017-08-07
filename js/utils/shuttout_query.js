// @flow

import axios from 'axios'
/**
 * Helper function for simpler callling api with axios
 */
function shuttoutQuery(params: {
  name: string,
  'start-date'?: string,
  'end-date'?: string
}) {
  return axios
    .get(`http://localhost:3000/data?name=${params.name}`)
}

export default shuttoutQuery;
