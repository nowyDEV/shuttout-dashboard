// @flow

export type GoogleData = {
  visitorsMonth: number,
  visitorsMonthPrevious: number,
  visitorsMonthly: ChartjsData,
  visitorsDay: number,
  visitorsDayPrevious: number,
  visitorsDaily: ChartjsData,
  activeUsersMonth: number,
  activeUsersMonthPrevious: number,
  activeUsersMonthly: ChartjsData,
  activeUsersDay: number,
  activeUsersDayPrevious: number,
  activeUsersDaily: ChartjsData,
  registrationsMonth: number,
  registrationsMonthPrevious: number,
  registrationsDay: number,
  registrationsDayPrevious: number,
  newUsers: ChartjsData,
  registeredTotalUsers: number,
  exitRate: string,
  bounceRate: string,
}

export type ShuttoutData = {
  entryFees: ChartjsData,
  goldPayedOut: ChartjsData,
  goldTotal: ChartjsData,
  photosPremiumDay: ChartjsData,
  photosPremiumMonth: ChartjsData,
  photosTotalDay: ChartjsData,
  photosTotalMonth: ChartjsData,
  votesTotal: ChartjsData,
  photoOfTheDay: ShuttoutPhoto,
  photoLastUploaded: ShuttoutPhoto,
  photoBiggestPrize: ShuttoutPhoto
}

export type ChartjsData = {
  datasets: Array<ChartjsDatasets>,
  labels: Array<string>,
  totalAmount: number
}

export type ChartjsDatasets = {
  backgroundColor: Array<string>,
  data: Array<string>,
  borderWidth: number,
  label: string,
  meta: Object
}

export type ShuttoutPhoto = {
  data: {
    description: string,
    url: string,
    votes?: string
  },
  name: string
}
