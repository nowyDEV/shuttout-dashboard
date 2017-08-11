// @flow

export type apiData = {
  browsers: ChartjsData,
  pageViewsMonth: number,
  pageViewsMonthPrevious: number,
  pageViewsDay: number,
  pageViewsDayPrevious: number,
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
  photoLastUploaded: ShuttoutPhoto
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
