// @flow

const compareNumbers = (current: number, previous: number): number =>
  Math.round((1 - previous / current + 0.00001) * 1000) / 10

export default compareNumbers
