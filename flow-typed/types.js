// @flow

export type apiData = {
  browsers: ChartjsData,
  visitorsMonth: number,
  visitorsMonthPrevious: number,
  visitorsDay: number,
  visitorsDayPrevious: number,
  activeUsersMonth: number,
  activeUsersMonthPrevious: number,
  activeUsersDay: number,
  activeUsersDayPrevious: number,
  userDevice: ChartjsData,
  newUsers: ChartjsData,
  registeredUsers: ChartjsData,
  exitRate: string,
  bounceRate: string,
  entryFees: ChartjsData,
  goldPayedOut: ChartjsData,
  goldTotal: ChartjsData,
  photosPremium: ChartjsData,
  photosTotal: ChartjsData,
  votesTotal: ChartjsData,
  photoOfTheDay: ShuttoutPhoto,
  photoLastUploaded: ShuttoutPhoto,
  photoBiggestPrize: ShuttoutPhoto
};

export type ChartjsData = {
  datasets: Array<ChartjsDatasets>,
  labels: Array<string>,
  totalAmount: number
};

export type ChartjsDatasets = {
  backgroundColor: Array<string>,
  data: Array<string>,
  borderWidth: number,
  label: string,
  meta: Object
};

export type ShuttoutPhoto = {
  data: {
    description: string,
    url: string,
    votes?: string
  },
  name: string
};
