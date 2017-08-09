// @flow

export type gapiData = {
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
  labels: Array<string>
};

export type ChartjsDatasets = {
  backgroundColor: Array<string>,
  data: Array<string>,
  borderWidth: number,
  label: string,
  meta: Object
};

// export type ShuttoutData = {
//   entryFees: ShuttoutStandardResponse,
//   goldPayedOut: ShuttoutStandardResponse,
//   goldTotal: ShuttoutStandardResponse,
//   photosPremium: ShuttoutStandardResponse,
//   photosTotal: ShuttoutStandardResponse,
//   votesTotal: ShuttoutStandardResponse,
//   photoOfTheDay: ShuttoutPhoto,
//   photoLastUploaded: ShuttoutPhoto
// };

// export type ShuttoutStandardResponse = {
//   rows: Array<Array<string>>,
//   name: string,
//   totalForAllResults: string,
//   totalResults: string,
//   startDate: string,
//   endDate: string
// };

export type ShuttoutPhoto = {
  data: {
    description: string,
    url: string,
    votes?: string
  },
  name: string
};
