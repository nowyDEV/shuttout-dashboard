export type gapiData = {
  browsers: ChartjsData,
  pageViewsMonth: string,
  pageViewsDay: string,
  activeUsersMonthly: array,
  userDevice: ChartjsData,
  newUsers: ChartjsData,
  registeredUsers: ChartjsData,
  exitRate: string,
  bounceRate: string,
  uniquePageviews: string
}

export type ChartjsData = {
  datasets: array<ChartjsDatasets>,
  labels: array<string>
};

export type ChartjsDatasets = {
  backgroundColor: array<string>,
  data: array<string>
}

